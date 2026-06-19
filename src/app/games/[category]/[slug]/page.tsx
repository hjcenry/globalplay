import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getGameBySlug, games, categories } from '@/data/games';
import type { Metadata } from 'next';
import GameClient from './GameClient';
import GameCard from '@/components/GameCard';
import { canonical } from '@/lib/seo';
import { isIndexableGame } from '@/lib/gamePolicy';

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
  const isIndexable = isIndexableGame(game);

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
    robots: {
      index: isIndexable,
      follow: true,
    },
    alternates: {
      canonical: canonical(`/games/${game.category}/${game.slug}`),
    },
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

  const category = categories.find(cat => cat.id === game.category);
  const categoryName = category?.name || 'Games';
  const relatedGames = games.filter(g => g.category === game.category && g.slug !== game.slug).slice(0, 4);
  const sourceLabel = game.sourceName;

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
          <h1>{category?.icon} {game.title}</h1>
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
              {game.editorialSummary && (
                <>
                  <h3>Editorial Notes</h3>
                  <p>{game.editorialSummary}</p>
                </>
              )}
              <p>
                This listing is organized under {categoryName}. The listed control style is {game.controls}, and the
                game is launched in a browser iframe when the third-party provider is available.
              </p>
              <p>
                GlobalPlay.games is an independent directory and is not the developer, publisher, or official brand
                site for {game.title}. Game names, logos, screenshots, and trademarks belong to their respective owners.
              </p>
              <p>
                Source and rights: {game.sourceName}. {game.licenseNote}
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
              <div className="stat-item">
                <span className="stat-label">Source</span>
                <span className="stat-value">{sourceLabel}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {(game.testedControls || game.deviceNotes || game.playTips?.length) && (
        <section className="how-to-play">
          <div className="container">
            <h2 className="section-title">Editorial Review Details</h2>
            <div className="features-grid">
              {game.testedControls && (
                <div className="feature-card">
                  <div className="feature-icon">✓</div>
                  <h3 className="feature-title">Controls Tested</h3>
                  <p className="feature-description">{game.testedControls}</p>
                </div>
              )}
              {game.deviceNotes && (
                <div className="feature-card">
                  <div className="feature-icon">D</div>
                  <h3 className="feature-title">Device Compatibility</h3>
                  <p className="feature-description">{game.deviceNotes}</p>
                </div>
              )}
              {game.playTips?.length ? (
                <div className="feature-card">
                  <div className="feature-icon">i</div>
                  <h3 className="feature-title">Tips Before Playing</h3>
                  <ul className="feature-description">
                    {game.playTips.map((tip) => (
                      <li key={tip}>{tip}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      )}

      {/* How to Play Section */}
      <section className="how-to-play">
        <div className="container">
          <h2 className="section-title">🎮 How to Play</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚔️</div>
              <h3 className="feature-title">Use the listed controls</h3>
              <p className="feature-description">
                Use {game.controls.toLowerCase()} for this game. Click once inside the game frame first if keyboard
                input is not recognized.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🖥️</div>
              <h3 className="feature-title">Play in the browser</h3>
              <p className="feature-description">
                The game opens in an embedded browser frame. If it does not load, refresh the page or check whether a
                browser extension is blocking third-party frames.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🧭</div>
              <h3 className="feature-title">Find related games</h3>
              <p className="feature-description">
                Use the related game section below to compare other {categoryName.toLowerCase()} with similar controls
                or pacing.
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
            "isAccessibleForFree": true,
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
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
