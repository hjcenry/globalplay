import Link from 'next/link';
import Image from 'next/image';
import { Game } from '@/data/games';

interface GameCardProps {
  game: Game;
  showPlayIcon?: boolean;
  showImage?: boolean;
}

export default function GameCard({ game, showPlayIcon = true, showImage = true }: GameCardProps) {
  const formatPlayCount = (count: number) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push('⭐');
    }
    return stars.join('');
  };

  return (
    <div className="game-card">
      <Link href={`/games/${game.category}/${game.slug}`}>
        {showImage ? (
          <div className="game-thumbnail">
            <Image
              src={game.thumbnail}
              alt={game.title}
              fill
              style={{ objectFit: 'cover', borderRadius: '24px 24px 0 0' }}
              unoptimized
              priority={false}
            />
            {showPlayIcon && (
              <div className="play-icon">▶</div>
            )}
          </div>
        ) : (
          <div className="game-thumbnail gradient-block">
            <span className="game-title-on-block">{game.title}</span>
            {showPlayIcon && (
              <div className="play-icon">▶</div>
            )}
          </div>
        )}
        <div className="game-info">
          <h3 className="game-title">{game.title}</h3>
          <p className="game-description">{game.shortDescription}</p>
          <div className="game-stats-row">
            <div className="rating">
              <span className="stars">{renderStars(game.rating)}</span>
              <span>{game.rating}</span>
            </div>
            <div className="play-count">
              Played {formatPlayCount(game.playCount)} times
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
} 