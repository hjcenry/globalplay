import GameCard from '@/components/GameCard';
import { categories, getNewGames } from '@/data/games';
import { canonical } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New Games - GlobalPlay Games',
  description:
    'Discover recently added browser games in the GlobalPlay catalog, with descriptions, controls, and category links.',
  alternates: {
    canonical: canonical('/new-games'),
  },
};

export default function NewGamesPage() {
  const newGames = getNewGames();

  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="breadcrumb-nav">
          <a href="/">Home</a> <span>›</span> <span>New Games</span>
        </div>
      </div>

      {/* New Games Section */}
      <section className="all-games-section">
        <div className="container">
          <div className="section-header">
            <h1 className="page-title">🆕 New Games</h1>
            <p className="page-description">
              Browse games marked as recent additions in the current catalog. 
              Each page includes launch details, controls, category context, and related games.
            </p>
          </div>

          <div className="games-stats">
            <div className="stat">
              <strong>{newGames.length}</strong> Recent Adds
            </div>
            <div className="stat">
              <strong>{categories.length}</strong> Categories
            </div>
            <div className="stat">
              <strong>Free</strong> Browser Play
            </div>
          </div>

          <div className="games-grid">
            {newGames.map((game) => (
              <GameCard key={game.id} game={game} showPlayIcon={true} showImage={true} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
} 
