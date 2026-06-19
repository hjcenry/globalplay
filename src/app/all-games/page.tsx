import GameCard from '@/components/GameCard';
import { categories, games } from '@/data/games';
import { canonical } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Games - GlobalPlay Games',
  description:
    'Browse all games available on GlobalPlay, organized across action, puzzle, strategy, racing, shooting, and adventure categories.',
  alternates: {
    canonical: canonical('/all-games'),
  },
};

export default function AllGamesPage() {
  // 按评分和游玩次数排序所有游戏
  const allGames = [...games]
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
              Browse the complete GlobalPlay catalog of {allGames.length} browser games. 
              Use the category labels, controls, ratings, and related game links to choose what to play next.
            </p>
          </div>

          <div className="games-stats">
            <div className="stat">
              <strong>{allGames.length}</strong> Available Games
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
