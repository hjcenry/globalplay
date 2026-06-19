import GameCard from '@/components/GameCard';
import { getIndexableCategories, getIndexableGames } from '@/data/games';
import { canonical } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Games - GlobalPlay Games',
  description:
    'Browse reviewed games available on GlobalPlay, organized across action, puzzle, strategy, racing, and adventure categories.',
  alternates: {
    canonical: canonical('/all-games'),
  },
};

export default function AllGamesPage() {
  const allGames = getIndexableGames();
  const categories = getIndexableCategories();

  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="breadcrumb-nav">
          <a href="/">Home</a> <span>›</span> <span>All Games</span>
        </div>
      </div>

      {/* All Games Section */}
      <section className="all-games-section">
        <div className="container">
          <div className="section-header">
            <h1 className="page-title">🎮 All Games</h1>
            <p className="page-description">
              Browse {allGames.length} reviewed GlobalPlay browser games with editorial notes, controls,
              source context, ratings, and related game links.
            </p>
          </div>

          <div className="games-stats">
            <div className="stat">
              <strong>{allGames.length}</strong> Reviewed Games
            </div>
            <div className="stat">
              <strong>{categories.length}</strong> Categories
            </div>
            <div className="stat">
              <strong>0</strong> Required Downloads
            </div>
          </div>

          <div className="games-grid">
            {allGames.map((game) => (
              <GameCard key={game.id} game={game} showPlayIcon={true} showImage={true} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
} 
