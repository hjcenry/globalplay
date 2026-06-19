import GameCard from '@/components/GameCard';
import { getTrendingGames } from '@/data/games';
import { canonical } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trending Games - GlobalPlay Games',
  description:
    'Discover popular browser games on GlobalPlay, ranked by catalog rating and play-count signals from the current game data.',
  alternates: {
    canonical: canonical('/trending'),
  },
};

export default function TrendingPage() {
  const trendingGames = getTrendingGames();

  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="breadcrumb-nav">
          <a href="/">Home</a> <span>›</span> <span>Trending Games</span>
        </div>
      </div>

      {/* Trending Games Section */}
      <section className="all-games-section">
        <div className="container">
          <div className="section-header">
            <h1 className="page-title">📈 Trending Games</h1>
            <p className="page-description">
              Discover popular games from the current GlobalPlay catalog. 
              This page uses rating and play-count signals from our game data to surface strong starting points.
            </p>
          </div>

          <div className="games-stats">
            <div className="stat">
              <strong>{trendingGames.length}</strong> Popular Listings
            </div>
            <div className="stat">
              <strong>Sorted</strong> By Rating
            </div>
            <div className="stat">
              <strong>No</strong> Download Required
            </div>
          </div>

          <div className="games-grid">
            {trendingGames.map((game) => (
              <GameCard key={game.id} game={game} showPlayIcon={true} showImage={true} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
} 
