#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';

import ts from 'typescript';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const dataFile = path.join(projectRoot, 'src/data/games.ts');

const VALID_CONTENT_STATUSES = new Set([
  'ready',
  'needs_editorial',
  'restricted',
  'retired',
]);

const VALID_AD_ELIGIBILITY = new Set(['eligible', 'excluded']);

const REQUIRED_GAME_FIELDS = [
  'id',
  'slug',
  'title',
  'description',
  'shortDescription',
  'category',
  'gameUrl',
  'sourceName',
  'sourceUrl',
  'licenseNote',
  'contentStatus',
  'adEligibility',
];

const READY_TEXT_MIN_LENGTH = 240;
const MIN_PLAY_TIPS = 3;
const MAX_DISPLAYED_ISSUES = 30;

const PROVIDER_PHRASES = [
  {
    name: 'provider-exclusive CTA',
    pattern: /play more games only on y8\.com/i,
  },
  {
    name: 'provider-host CTA',
    pattern: /\b(?:play|enjoy playing).{0,80}\bat y8(?:\.com)?\b/i,
  },
  {
    name: 'provider-branded version phrase',
    pattern: /\by8 games version\b/i,
  },
];

function textValue(value) {
  return typeof value === 'string' ? value.trim() : '';
}

function hasText(value) {
  return textValue(value).length > 0;
}

function pushIssue(collection, severity, game, check, message) {
  collection.push({
    severity,
    gameId: game?.id ?? 'unknown',
    title: game?.title ?? 'Unknown game',
    check,
    message,
  });
}

function collectUserFacingText(game) {
  const chunks = [
    game.title,
    game.description,
    game.shortDescription,
    game.editorialSummary,
    game.testedControls,
    game.deviceNotes,
  ];

  if (Array.isArray(game.playTips)) {
    chunks.push(...game.playTips);
  }

  return chunks.filter(hasText).join('\n');
}

function hasCompleteReadyReview(game) {
  return (
    hasText(game.editorialSummary) &&
    textValue(game.editorialSummary).length >= READY_TEXT_MIN_LENGTH &&
    hasText(game.testedControls) &&
    hasText(game.deviceNotes) &&
    Array.isArray(game.playTips) &&
    game.playTips.length >= MIN_PLAY_TIPS &&
    game.playTips.every(hasText) &&
    hasText(game.reviewedAt) &&
    hasText(game.sourceName) &&
    hasText(game.sourceUrl) &&
    hasText(game.licenseNote)
  );
}

function isSitemapIncluded(game) {
  return game.contentStatus === 'ready';
}

function addDuplicateErrors(games, errors, field) {
  const seen = new Map();

  for (const game of games) {
    const value = game[field];
    if (!hasText(value)) {
      continue;
    }

    if (seen.has(value)) {
      pushIssue(
        errors,
        'error',
        game,
        `duplicate-${field}`,
        `Duplicate ${field} "${value}" also appears on ${seen.get(value)}.`
      );
      continue;
    }

    seen.set(value, game.id);
  }
}

function auditRequiredFields(game, errors) {
  for (const field of REQUIRED_GAME_FIELDS) {
    if (!hasText(game[field])) {
      pushIssue(
        errors,
        'error',
        game,
        'required-field',
        `Missing required field "${field}".`
      );
    }
  }

  if (!VALID_CONTENT_STATUSES.has(game.contentStatus)) {
    pushIssue(
      errors,
      'error',
      game,
      'content-status',
      `Invalid contentStatus "${game.contentStatus}".`
    );
  }

  if (!VALID_AD_ELIGIBILITY.has(game.adEligibility)) {
    pushIssue(
      errors,
      'error',
      game,
      'ad-eligibility',
      `Invalid adEligibility "${game.adEligibility}".`
    );
  }
}

function auditReadyGame(game, errors, warnings) {
  if (game.contentStatus !== 'ready') {
    return;
  }

  if (!hasText(game.editorialSummary)) {
    pushIssue(
      errors,
      'error',
      game,
      'ready-editorial',
      'Ready games must include an original editorialSummary.'
    );
  } else if (textValue(game.editorialSummary).length < READY_TEXT_MIN_LENGTH) {
    pushIssue(
      errors,
      'error',
      game,
      'ready-editorial-length',
      `editorialSummary is shorter than ${READY_TEXT_MIN_LENGTH} characters.`
    );
  }

  if (!Array.isArray(game.playTips) || game.playTips.length < MIN_PLAY_TIPS) {
    pushIssue(
      errors,
      'error',
      game,
      'ready-play-tips',
      `Ready games must include at least ${MIN_PLAY_TIPS} practical playTips.`
    );
  } else if (!game.playTips.every(hasText)) {
    pushIssue(
      errors,
      'error',
      game,
      'ready-play-tips',
      'Ready games must not include empty playTips.'
    );
  }

  for (const field of ['testedControls', 'deviceNotes', 'reviewedAt']) {
    if (!hasText(game[field])) {
      pushIssue(
        errors,
        'error',
        game,
        'ready-review-field',
        `Ready games must include "${field}".`
      );
    }
  }

  if (game.adEligibility !== 'eligible') {
    pushIssue(
      warnings,
      'warning',
      game,
      'ready-ad-excluded',
      'Ready game is excluded from ads. Confirm this is intentional.'
    );
  }
}

function auditConservativeDefaults(game, errors) {
  if (game.contentStatus !== 'ready' && game.adEligibility === 'eligible') {
    pushIssue(
      errors,
      'error',
      game,
      'non-ready-ad-eligible',
      'Non-ready games must stay excluded from ads until editorial review is complete.'
    );
  }
}

function auditRestrictedContent(game, errors) {
  if (
    Array.isArray(game.contentWarnings) &&
    game.contentWarnings.length > 0 &&
    game.adEligibility === 'eligible'
  ) {
    pushIssue(
      errors,
      'error',
      game,
      'warnings-ad-eligible',
      'Games with contentWarnings must not be marked adEligibility: eligible.'
    );
  }
}

function auditProviderPhrases(game, errors, warnings) {
  const content = collectUserFacingText(game);

  for (const providerPhrase of PROVIDER_PHRASES) {
    if (!providerPhrase.pattern.test(content)) {
      continue;
    }

    const collection = game.contentStatus === 'ready' ? errors : warnings;
    pushIssue(
      collection,
      game.contentStatus === 'ready' ? 'error' : 'warning',
      game,
      'provider-phrase',
      `User-facing text contains ${providerPhrase.name}; rewrite before indexing.`
    );
  }
}

function auditSitemapEligibility(game, errors) {
  if (!isSitemapIncluded(game)) {
    return;
  }

  if (!hasCompleteReadyReview(game)) {
    pushIssue(
      errors,
      'error',
      game,
      'sitemap-readiness',
      'Sitemap policy would include this page, but its ready review fields are incomplete.'
    );
  }

  if (Array.isArray(game.contentWarnings) && game.contentWarnings.length > 0) {
    pushIssue(
      errors,
      'error',
      game,
      'sitemap-restricted',
      'Sitemap policy would include a page with contentWarnings.'
    );
  }
}

export function auditGames(games) {
  if (!Array.isArray(games)) {
    throw new TypeError('auditGames expected an array of games.');
  }

  const errors = [];
  const warnings = [];

  addDuplicateErrors(games, errors, 'id');
  addDuplicateErrors(games, errors, 'slug');

  for (const game of games) {
    auditRequiredFields(game, errors);
    auditReadyGame(game, errors, warnings);
    auditConservativeDefaults(game, errors);
    auditRestrictedContent(game, errors);
    auditProviderPhrases(game, errors, warnings);
    auditSitemapEligibility(game, errors);
  }

  const readyGames = games.filter(game => game.contentStatus === 'ready');
  const adEligibleGames = games.filter(game => game.adEligibility === 'eligible');
  const sitemapGamePages = games.filter(isSitemapIncluded);

  return {
    ok: errors.length === 0,
    summary: {
      totalGames: games.length,
      readyGames: readyGames.length,
      adEligibleGames: adEligibleGames.length,
      sitemapGamePages: sitemapGamePages.length,
      warnings: warnings.length,
      errors: errors.length,
    },
    errors,
    warnings,
  };
}

export function loadGamesFromSource(sourcePath = dataFile) {
  const source = fs.readFileSync(sourcePath, 'utf8');
  const output = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      esModuleInterop: true,
      strict: false,
    },
    fileName: sourcePath,
  });

  const module = { exports: {} };
  const context = {
    module,
    exports: module.exports,
    require: createRequire(import.meta.url),
    console,
    process: { env: process.env },
  };

  vm.runInNewContext(output.outputText, context, {
    filename: sourcePath,
    displayErrors: true,
  });

  if (!Array.isArray(module.exports.games)) {
    throw new Error(`No games export found in ${sourcePath}.`);
  }

  return module.exports.games;
}

function formatIssueList(title, issues) {
  if (issues.length === 0) {
    return [`${title}: none`];
  }

  const visibleIssues = issues.slice(0, MAX_DISPLAYED_ISSUES).map(issue => {
    return `- ${issue.gameId} (${issue.check}): ${issue.message}`;
  });

  if (issues.length > visibleIssues.length) {
    visibleIssues.push(
      `- ... ${issues.length - visibleIssues.length} more issue(s) not shown`
    );
  }

  return [`${title}: ${issues.length}`, ...visibleIssues];
}

export function formatReport(result) {
  const lines = [
    'AdSense content audit',
    `Total games: ${result.summary.totalGames}`,
    `Ready games: ${result.summary.readyGames}`,
    `Ad-eligible games: ${result.summary.adEligibleGames}`,
    `Sitemap game pages: ${result.summary.sitemapGamePages}`,
    `Errors: ${result.summary.errors}`,
    `Warnings: ${result.summary.warnings}`,
    '',
    ...formatIssueList('Errors', result.errors),
    '',
    ...formatIssueList('Warnings', result.warnings),
  ];

  return lines.join('\n');
}

function isMainModule() {
  return process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;
}

if (isMainModule()) {
  const games = loadGamesFromSource();
  const result = auditGames(games);

  console.log(formatReport(result));

  if (!result.ok) {
    process.exitCode = 1;
  }
}
