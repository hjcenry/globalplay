import assert from 'node:assert/strict';

import { auditGames, formatReport } from './audit-games-content.mjs';

const baseGame = {
  id: 'fixture-game',
  slug: 'fixture-game',
  title: 'Fixture Game',
  description:
    'A browser game fixture used to verify the AdSense content audit rules.',
  shortDescription: 'A short fixture game description for the audit.',
  category: 'puzzle',
  thumbnail: '/images/games/fixture.png',
  gameUrl: 'https://example.com/embed/fixture',
  rating: 4.1,
  playCount: 1200,
  tags: ['fixture'],
  controls: 'Keyboard & Mouse',
  featured: false,
  trending: false,
  isNew: false,
  sourceName: 'Fixture Provider',
  sourceUrl: 'https://example.com/embed/fixture',
  licenseNote:
    'Third-party browser game embed with independent editorial context.',
};

const completeReadyGame = {
  ...baseGame,
  id: 'complete-ready',
  slug: 'complete-ready',
  contentStatus: 'ready',
  adEligibility: 'eligible',
  editorialSummary:
    'This fixture has a substantial original editorial summary that explains the gameplay loop, expected controls, player fit, and practical browser-play considerations. It is intentionally long enough to meet the audit threshold so the test can isolate other failures without tripping the editorial-length rule.',
  testedControls: 'Keyboard and mouse controls were checked in the embedded frame.',
  deviceNotes: 'Desktop works best; mobile depends on the embedded frame controls.',
  playTips: [
    'Click the game frame before using keyboard input.',
    'Use fullscreen if the interface feels cramped.',
    'Start slowly to learn how the fixture responds.',
  ],
  reviewedAt: '2026-06-19',
};

const thinReadyGame = {
  ...completeReadyGame,
  id: 'thin-ready',
  slug: 'thin-ready',
  editorialSummary: '',
  playTips: [],
};

const eligibleWarningGame = {
  ...completeReadyGame,
  id: 'eligible-warning',
  slug: 'eligible-warning',
  contentWarnings: ['fictional violence'],
};

const nonReadyProviderPhrase = {
  ...baseGame,
  id: 'provider-phrase',
  slug: 'provider-phrase',
  contentStatus: 'needs_editorial',
  adEligibility: 'excluded',
  description: 'Play more games only on y8.com and enjoy playing here at Y8.com!',
};

const result = auditGames([
  completeReadyGame,
  thinReadyGame,
  eligibleWarningGame,
  nonReadyProviderPhrase,
]);

assert.equal(result.summary.totalGames, 4);
assert.equal(result.summary.readyGames, 3);
assert(result.errors.some(error => error.gameId === 'thin-ready'));
assert(result.errors.some(error => error.gameId === 'eligible-warning'));
assert(result.warnings.some(warning => warning.gameId === 'provider-phrase'));
assert.doesNotThrow(() => formatReport(result));

console.log('audit-games-content tests passed');
