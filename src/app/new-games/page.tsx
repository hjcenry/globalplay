import GameCard from '@/components/GameCard';
import { getNewGames } from '@/data/games';

export const metadata = {
  title: 'New Games - GlobalPlay Games',
  description: 'Discover the latest games added to GlobalPlay. Fresh new premium games updated daily for endless entertainment.',
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
              Discover the latest premium games added to our platform. 
              Fresh content updated daily with 50+ new games added every week.
            </p>
          </div>

          <div className="games-stats">
            <div className="stat">
              <strong>50+</strong> Weekly Additions
            </div>
            <div className="stat">
              <strong>Premium</strong> Quality
            </div>
            <div className="stat">
              <strong>24/7</strong> Updates
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