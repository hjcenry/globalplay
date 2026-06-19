import type { Game } from '@/data/games';

export function isIndexableGame(game: Game) {
  return game.contentStatus === 'ready';
}

export function isAdEligibleGame(game: Game) {
  return game.contentStatus === 'ready' && game.adEligibility === 'eligible';
}

export function hasRestrictedContent(game: Game) {
  return Boolean(game.contentWarnings?.length);
}
