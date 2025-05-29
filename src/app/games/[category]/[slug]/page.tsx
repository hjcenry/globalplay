import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getGameBySlug, games, categories } from '@/data/games';
import type { Metadata } from 'next';
import GameClient from './GameClient';
import GameCard from '@/components/GameCard';

interface GamePageProps {
  params: {
    category: string;
    slug: string;
  };
}

export async function generateStaticParams() {
  return games.map((game) => ({
    category: game.category,
    slug: game.slug,
  }));
}

export async function generateMetadata({ params }: GamePageProps): Promise<Metadata> {
  const game = getGameBySlug(params.category, params.slug);
  
  if (!game) {
    return {
      title: 'Game Not Found - GlobalPlay Games',
    };
  }

  const categoryName = categories.find(cat => cat.id === game.category)?.name || 'Games';

  return {
    title: `${game.title} - Free Online ${categoryName} | GlobalPlay.games`,
    description: game.description,
    keywords: [
      game.title,
      'online game',
      'free games',
      'browser game',
      game.category,
      ...game.tags,
    ].join(', '),
    openGraph: {
      title: `${game.title} - Free Online Game`,
      description: game.shortDescription,
      url: `https://globalplay.games/games/${game.category}/${game.slug}`,
      type: 'website',
      images: [
        {
          url: `https://globalplay.games${game.thumbnail}`,
          width: 1200,
          height: 630,
          alt: game.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${game.title} - Free Online Game`,
      description: game.shortDescription,
    },
  };
}

export default function GamePage({ params }: GamePageProps) {
  const game = getGameBySlug(params.category, params.slug);

  if (!game) {
    notFound();
  }

  const categoryName = categories.find(cat => cat.id === game.category)?.name || 'Games';
  const relatedGames = games.filter(g => g.category === game.category && g.slug !== game.slug).slice(0, 4);

  const formatPlayCount = (count: number): string => {
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
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="breadcrumb-nav">
          <Link href="/">Home</Link> &gt; 
          <Link href={`/categories/${game.category}`}>{categoryName}</Link> &gt; 
          <span>{game.title}</span>
        </div>
      </div>

      {/* Game Hero Section */}
      <section className="game-hero">
        <div className="hero-content">
          <h1>🧟 {game.title}</h1>
          <p className="game-tagline">{game.shortDescription}</p>
          <a href="#game-frame" className="play-button">🚀 Play Now</a>
        </div>
      </section>

      {/* Game Container */}
      <div className="game-container">
        <div id="game-frame">
          <GameClient game={game} />
        </div>
      </div>

      {/* Game Info Section */}
      <section className="game-info-section">
        <div className="container">
          <div className="info-grid">
            <div className="game-description-block">
              <h2>🎯 About {game.title}</h2>
              <p>{game.description}</p>
              <p>
                Experience the thrill of {game.title} with smooth controls, stunning visual effects, and addictive 
                gameplay that will keep you coming back for more. Perfect for both casual gaming sessions and 
                competitive play.
              </p>
              <p>
                {game.title} features dynamic gameplay with increasing difficulty and multiple 
                upgrades. Strategic thinking and quick reflexes are essential for achieving high scores.
              </p>
            </div>
            
            <div className="game-stats">
              <h2>📊 Game Stats</h2>
              <div className="stat-item">
                <span className="stat-label">Rating</span>
                <div className="rating stat-value">
                  <span className="stars">{renderStars(game.rating)}</span>
                  <span>{game.rating}/5</span>
                </div>
              </div>
              <div className="stat-item">
                <span className="stat-label">Times Played</span>
                <span className="stat-value">{formatPlayCount(game.playCount)}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Category</span>
                <span className="stat-value">{categoryName}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Platform</span>
                <span className="stat-value">Browser (HTML5)</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Controls</span>
                <span className="stat-value">{game.controls}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Full Screen</span>
                <span className="stat-value">Yes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Play Section */}
      <section className="how-to-play">
        <div className="container">
          <h2 className="section-title">🎮 How to Play</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚔️</div>
              <h3 className="feature-title">Game Controls</h3>
              <p className="feature-description">
                Use {game.controls.toLowerCase()} to control your character. 
                Master the controls to achieve the highest scores and unlock achievements.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💎</div>
              <h3 className="feature-title">Collect & Upgrade</h3>
              <p className="feature-description">
                Gather power-ups and special items to enhance your abilities and 
                unlock new features throughout the game.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3 className="feature-title">Level Up</h3>
              <p className="feature-description">
                Progress through levels, gain experience, and unlock powerful upgrades 
                to become the ultimate champion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Games Section */}
      {relatedGames.length > 0 && (
        <section className="similar-games">
          <div className="container">
            <h2 className="section-title">🔥 More {categoryName}</h2>
            <div className="games-grid">
              {relatedGames.map((relatedGame) => (
                <GameCard key={relatedGame.id} game={relatedGame} showPlayIcon={false} showImage={true} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Game",
            "name": game.title,
            "description": game.description,
            "url": `https://globalplay.games/games/${game.category}/${game.slug}`,
            "image": `https://globalplay.games${game.thumbnail}`,
            "genre": game.tags,
            "platform": "Web Browser",
            "operatingSystem": "Any",
            "applicationCategory": "Game",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": game.rating.toString(),
              "ratingCount": "1247",
              "bestRating": "5",
              "worstRating": "1"
            },
            "publisher": {
              "@type": "Organization",
              "name": "GlobalPlay.games"
            }
          })
        }}
      />
    </>
  );
} 