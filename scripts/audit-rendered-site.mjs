#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { loadGamesFromSource } from './audit-games-content.mjs';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const buildRoot = path.join(projectRoot, '.next/server/app');
const siteUrl = 'https://globalplay.games';

function readBuildFile(relativePath) {
  const filePath = path.join(buildRoot, relativePath);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing built page: ${relativePath}. Run npm run build first.`);
  }

  return fs.readFileSync(filePath, 'utf8');
}

function visibleText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

function canonicalHref(html) {
  return html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/i)?.[1] ?? null;
}

function checkCanonical(errors, relativePath, expectedCanonical) {
  const html = readBuildFile(relativePath);
  const actualCanonical = canonicalHref(html);

  if (actualCanonical !== expectedCanonical) {
    errors.push(
      `${relativePath} canonical is ${actualCanonical ?? 'missing'}, expected ${expectedCanonical}.`
    );
  }
}

function checkNoNonReadyGames(errors, relativePath, nonReadyTitles) {
  const text = visibleText(readBuildFile(relativePath));
  const exposedTitle = nonReadyTitles.find(title => text.includes(title));

  if (exposedTitle) {
    errors.push(`${relativePath} exposes non-ready game "${exposedTitle}".`);
  }
}

function gamePagePath(game) {
  return `games/${game.category}/${game.slug}.html`;
}

function assertRenderedSite() {
  const games = loadGamesFromSource();
  const readyGames = games.filter(game => game.contentStatus === 'ready');
  const nonReadyTitles = games
    .filter(game => game.contentStatus !== 'ready')
    .map(game => game.title)
    .sort((a, b) => b.length - a.length);

  const errors = [];

  const listPages = [
    'index.html',
    'all-games.html',
    'trending.html',
    'new-games.html',
    'categories.html',
    'sitemap.html',
    'categories/action.html',
    'categories/adventure.html',
    'categories/puzzle.html',
    'categories/racing.html',
    'categories/strategy.html',
  ];

  for (const relativePath of listPages) {
    checkNoNonReadyGames(errors, relativePath, nonReadyTitles);
  }

  for (const game of readyGames) {
    checkNoNonReadyGames(errors, gamePagePath(game), nonReadyTitles);
  }

  const canonicalChecks = [
    ['index.html', `${siteUrl}/`],
    ['about.html', `${siteUrl}/about`],
    ['contact.html', `${siteUrl}/contact`],
    ['terms.html', `${siteUrl}/terms`],
    ['guides.html', `${siteUrl}/guides`],
    ['help.html', `${siteUrl}/help`],
    ['privacy.html', `${siteUrl}/privacy`],
    ['privacy-policy.html', `${siteUrl}/privacy-policy`],
    ['sitemap.html', `${siteUrl}/sitemap`],
    ['categories.html', `${siteUrl}/categories`],
  ];

  for (const [relativePath, expectedCanonical] of canonicalChecks) {
    checkCanonical(errors, relativePath, expectedCanonical);
  }

  return errors;
}

const errors = assertRenderedSite();

if (errors.length > 0) {
  console.error('Rendered site audit failed:');
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exitCode = 1;
} else {
  console.log('Rendered site audit passed');
}
