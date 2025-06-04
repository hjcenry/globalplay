import GameCard from '@/components/GameCard';
import { games } from '@/data/games';

export const metadata = {
  title: 'All Games - GlobalPlay Games',
  description: 'Browse all games available on GlobalPlay. Over 1200+ premium online games including action, puzzle, strategy, racing, adventure, and shooting games.',
};

export default function AllGamesPage() {
  // 按评分和游玩次数排序所有游戏
  const allGames = games
    .sort((a, b) => {
      // 先按评分降序排序
      if (a.rating !== b.rating) {
        return b.rating - a.rating;
      }
      // 评分相同时，按游玩次数降序排序
      return b.playCount - a.playCount;
    });

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
              Discover our complete collection of 1200+ premium online games. 
              From action-packed adventures to brain-teasing puzzles, find your next favorite game here.
            </p>
          </div>

          <div className="games-stats">
            <div className="stat">
              <strong>1200+</strong> Premium Games
            </div>
            <div className="stat">
              <strong>15</strong> Categories
            </div>
            <div className="stat">
              <strong>100%</strong> Free to Play
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