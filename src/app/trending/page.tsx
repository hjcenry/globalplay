import GameCard from '@/components/GameCard';
import { getTrendingGames } from '@/data/games';

export const metadata = {
  title: 'Trending Games - GlobalPlay Games',
  description: 'Discover the most popular trending games on GlobalPlay. Play the hottest games that millions of players are enjoying right now.',
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
              Discover the most popular games that are trending right now. 
              These hottest picks are played by millions of gamers worldwide every day.
            </p>
          </div>

          <div className="games-stats">
            <div className="stat">
              <strong>500+</strong> Trending Games
            </div>
            <div className="stat">
              <strong>Updated</strong> Hourly
            </div>
            <div className="stat">
              <strong>2.5M+</strong> Daily Players
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