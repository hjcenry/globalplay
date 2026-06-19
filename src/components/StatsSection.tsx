import { getFeaturedGames, getIndexableCategories, getIndexableGames, getNewGames } from '@/data/games';

interface StatItemProps {
  icon: string;
  number: string;
  label: string;
}

function formatNumber(num: number) {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M+`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(0)}K+`;
  }
  return num.toString();
}

function StatItem({ icon, number, label }: StatItemProps) {
  const targetNumber = parseInt(number.replace(/[^0-9]/g, ''));

  return (
    <div className="stat-card">
      <div className="stat-icon">{icon}</div>
      <div className="stat-number">{formatNumber(targetNumber)}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function StatsSection() {
  const reviewedGameCount = getIndexableGames().length;
  const reviewedCategoryCount = getIndexableCategories().length;
  const featuredCount = getFeaturedGames().length;
  const newCount = getNewGames().length;

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          <StatItem 
            icon="🎮" 
            number={reviewedGameCount.toString()} 
            label="Reviewed Games"
          />
          <StatItem 
            icon="🎯" 
            number={reviewedCategoryCount.toString()} 
            label="Game Categories"
          />
          <StatItem 
            icon="⭐" 
            number={featuredCount.toString()} 
            label="Featured Picks"
          />
          <StatItem 
            icon="🆕" 
            number={newCount.toString()} 
            label="Recent Adds"
          />
        </div>
      </div>
    </section>
  );
} 
