import Link from 'next/link';
import { categories, games, getFeaturedGames, getTrendingGames } from '@/data/games';
import BackToTop from './BackToTop';
import './sitemap.css';

export const metadata = {
  title: 'Sitemap - GlobalPlay Games',
  description: 'Browse the complete sitemap of GlobalPlay to quickly find all game categories, popular games, and website pages. Includes action, puzzle, strategy, racing and other free online games.',
  keywords: 'sitemap, game categories, online games, free games, GlobalPlay',
  robots: 'index, follow',
};

export default function SitemapPage() {
  const featuredGames = getFeaturedGames();
  const trendingGames = getTrendingGames();

  return (
    <div className="sitemap-container">
      <div className="sitemap-header">
        <h1>Sitemap</h1>
        <p className="sitemap-subtitle">
          Explore all pages and game content on GlobalPlay to quickly find what you're looking for.
        </p>
        <div className="last-updated">
          Last updated: December 2024
        </div>
      </div>

      <div className="sitemap-content">
        {/* Main Pages */}
        <section className="sitemap-section">
          <h2>🏠 Main Pages</h2>
          <div className="links-grid">
            <div className="link-category">
              <h3>🎮 Core Pages</h3>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/categories">Game Categories</Link></li>
                <li><Link href="/trending">Trending Games</Link></li>
                <li><Link href="/new-games">New Games</Link></li>
                <li><Link href="/search">Search Games</Link></li>
              </ul>
            </div>
            <div className="link-category">
              <h3>📚 Help & Support</h3>
              <ul>
                <li><Link href="/help">Game Help</Link></li>
                <li><Link href="/guides">Game Guides</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/sitemap">Sitemap</Link></li>
              </ul>
            </div>
            <div className="link-category">
              <h3>⚖️ Legal Information</h3>
              <ul>
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Game Categories */}
        <section className="sitemap-section">
          <h2>🎯 Game Categories</h2>
          <div className="categories-grid">
            {categories.map((category) => {
              const categoryGames = games.filter(game => game.category === category.id);
              const displayGames = categoryGames.slice(0, 5);
              
              return (
                <div key={category.id} className="category-card">
                  <div className="category-header">
                    <span className="category-icon">{category.icon}</span>
                    <Link href={`/categories/${category.id}`} className="category-title">
                      {category.name}
                    </Link>
                    <span className="game-count">({categoryGames.length} games)</span>
                  </div>
                  <div className="category-games">
                    {displayGames.map((game) => (
                      <Link 
                        key={game.slug}
                        href={`/games/${game.category}/${game.slug}`} 
                        className="game-link"
                      >
                        {game.title}
                      </Link>
                    ))}
                    {categoryGames.length > 5 && (
                      <Link href={`/categories/${category.id}`} className="view-all">
                        View All →
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Featured Games */}
        <section className="sitemap-section">
          <h2>⭐ Featured Games</h2>
          <div className="games-grid">
            {featuredGames.map((game) => (
              <div key={game.slug} className="game-item">
                <Link href={`/games/${game.category}/${game.slug}`} className="game-title">
                  {game.title}
                </Link>
                <div className="game-meta">
                  <span className="game-category">{categories.find(c => c.id === game.category)?.name}</span>
                  <span className="game-rating">⭐ {game.rating}</span>
                  <span className="game-plays">🎮 {game.playCount.toLocaleString()}</span>
                </div>
                <div className="game-tags">
                  {game.tags.map((tag) => (
                    <span key={tag} className="game-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trending Games */}
        <section className="sitemap-section">
          <h2>🔥 Popular Games</h2>
          <div className="games-grid">
            {trendingGames.map((game) => (
              <div key={game.slug} className="game-item">
                <Link href={`/games/${game.category}/${game.slug}`} className="game-title">
                  {game.title}
                </Link>
                <div className="game-meta">
                  <span className="game-category">{categories.find(c => c.id === game.category)?.name}</span>
                  <span className="game-rating">⭐ {game.rating}</span>
                  <span className="game-plays">🎮 {game.playCount.toLocaleString()}</span>
                </div>
                <div className="game-tags">
                  {game.tags.map((tag) => (
                    <span key={tag} className="game-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="view-more">
            <Link href="/trending" className="view-more-btn">
              View More Popular Games →
            </Link>
          </div>
        </section>

        {/* All Games Alphabetically */}
        <section className="sitemap-section">
          <h2>📋 All Games (A-Z)</h2>
          <div className="alphabetical-games">
            {Object.entries(
              games
                .sort((a, b) => a.title.localeCompare(b.title))
                .reduce((acc: { [key: string]: typeof games }, game) => {
                  const firstLetter = game.title.charAt(0).toUpperCase();
                  if (!acc[firstLetter]) {
                    acc[firstLetter] = [];
                  }
                  acc[firstLetter].push(game);
                  return acc;
                }, {})
            ).map(([letter, letterGames]) => (
              <div key={letter} className="letter-group">
                <h3 className="letter-header">{letter}</h3>
                <div className="letter-games">
                  {letterGames.map((game) => (
                    <Link 
                      key={game.slug}
                      href={`/games/${game.category}/${game.slug}`} 
                      className="alpha-game-link"
                    >
                      {game.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Website Statistics */}
        <section className="sitemap-section stats-section">
          <h2>📊 Website Statistics</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">{games.length}</div>
              <div className="stat-label">Total Games</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{categories.length}</div>
              <div className="stat-label">Game Categories</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{featuredGames.length}</div>
              <div className="stat-label">Featured Games</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{trendingGames.length}</div>
              <div className="stat-label">Popular Games</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{games.reduce((total, game) => total + game.playCount, 0).toLocaleString()}</div>
              <div className="stat-label">Total Plays</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{(games.reduce((total, game) => total + game.rating, 0) / games.length).toFixed(1)}</div>
              <div className="stat-label">Average Rating</div>
            </div>
          </div>
        </section>
      </div>

      <div className="sitemap-footer">
        <div className="sitemap-note">
          <h3>📝 About This Sitemap</h3>
          <p>
            This sitemap contains all major pages and game links on the GlobalPlay website. 
            We regularly update our game content to provide you with the latest and best online gaming experience.
          </p>
          <p>
            If you encounter any issues while using our site or have any suggestions, please contact us through the 
            <Link href="/help"> Help page</Link>.
          </p>
        </div>
        <BackToTop />
      </div>
    </div>
  );
} 