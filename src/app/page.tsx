import Link from 'next/link';
import GameCard from '@/components/GameCard';
import { getFeaturedGames, getTrendingGames, categories } from '@/data/games';

export default function HomePage() {
  const featuredGames = getFeaturedGames();
  const trendingGames = getTrendingGames();

  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="breadcrumb-nav">
          <span>Home</span> &gt; <span>Online Games</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>🎯 The Best Free Online Games Platform</h1>
          <p>
            Over 10,000 handpicked games, no download required!
            Play action, strategy, puzzle, racing and more games instantly
          </p>
          <Link href="#featured" className="cta-button">
            🚀 Start Playing
          </Link>
        </div>
      </section>

      {/* Featured Games */}
      <section className="featured-section" id="featured">
        <div className="container">
          <h2 className="section-title">🔥 Featured Games</h2>
          <div className="featured-carousel">
            {featuredGames.map((game) => (
              <GameCard key={game.id} game={game} showPlayIcon={true} showImage={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories-section">
        <div className="container">
          <h2 className="section-title" id="categories">🎮 Game Categories</h2>
          <div className="categories-grid">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/categories/${category.id}`}
                className="category-card"
              >
                <div className="category-icon">{category.icon}</div>
                <div className="category-name">{category.name}</div>
                <div className="category-count">{category.count.toLocaleString()} games</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Games */}
      <section className="trending-section">
        <div className="container">
          <h2 className="section-title" id="trending">📈 Trending Today</h2>
          <div className="trending-grid">
            {trendingGames.map((game) => (
              <GameCard key={game.id} game={game} showPlayIcon={false} showImage={true} />
            ))}
          </div>
        </div>
      </section>

      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "GlobalPlay Games",
            "description": "Professional free online games platform with thousands of premium games",
            "url": "https://globalplay.games",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://globalplay.games/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
    </>
  );
} 