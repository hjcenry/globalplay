import Link from 'next/link';
import { categories, games, getFeaturedGames, getNewGames, getTrendingGames } from '@/data/games';
import './about.css';

export default function AboutPage() {
  const featuredCount = getFeaturedGames().length;
  const trendingCount = getTrendingGames().length;
  const newCount = getNewGames().length;

  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About GlobalPlay</h1>
        <p className="about-subtitle">
          An independent directory for finding and launching free browser games.
        </p>
      </div>

      <div className="about-content">
        <section className="about-section hero-section">
          <div className="hero-content">
            <h2>What GlobalPlay Publishes</h2>
            <p>
              GlobalPlay.games organizes browser-playable games into simple category, search, popular, and recent
              addition pages. Each game page lists the title, category, controls, short description, related games,
              and an embedded play area when a third-party provider makes one available.
            </p>
            <p>
              We focus on practical discovery: helping players understand what a game is, how it is controlled, and
              where similar games are grouped before they launch the iframe.
            </p>
          </div>
        </section>

        <section className="about-section stats-section">
          <h2>Catalog Snapshot</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">{games.length}</div>
              <div className="stat-label">Available Games</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{categories.length}</div>
              <div className="stat-label">Categories</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{featuredCount}</div>
              <div className="stat-label">Featured Picks</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{trendingCount}</div>
              <div className="stat-label">Popular Listings</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{newCount}</div>
              <div className="stat-label">Recent Adds</div>
            </div>
          </div>
        </section>

        <section className="about-section mission-section">
          <h2>Editorial Approach</h2>
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-icon">🎮</div>
              <h3>Playable first</h3>
              <p>
                Game pages are built around direct browser play, controls, and clear category context instead of fake
                download buttons or misleading install prompts.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">🧭</div>
              <h3>Easy discovery</h3>
              <p>
                Categories, search, featured lists, and related games help players move through the catalog without
                relying on thin tag pages.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">🔎</div>
              <h3>Useful page details</h3>
              <p>
                We aim to keep descriptions, controls, and troubleshooting information specific enough to help a
                player decide whether to launch a title.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">⚖️</div>
              <h3>Transparent sourcing</h3>
              <p>
                Games, logos, screenshots, and trademarks remain the property of their respective owners. GlobalPlay
                is not an official site for third-party game brands unless explicitly stated.
              </p>
            </div>
          </div>
        </section>

        <section className="about-section partners-section" id="publisher">
          <h2>Publisher and Contact Information</h2>
          <p>
            GlobalPlay.games is published as an independent game discovery website. The site does not claim ownership
            of third-party games and does not imply endorsement by game studios, publishers, or trademark owners.
          </p>
          <div className="partners-grid">
            <div className="partner-category">
              <h3>General contact</h3>
              <ul>
                <li><a href="mailto:hello@globalplay.games">hello@globalplay.games</a></li>
                <li><Link href="/contact">Contact page</Link></li>
              </ul>
            </div>
            <div className="partner-category">
              <h3>Privacy and legal</h3>
              <ul>
                <li><a href="mailto:privacy@globalplay.games">privacy@globalplay.games</a></li>
                <li><a href="mailto:legal@globalplay.games">legal@globalplay.games</a></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="about-section technology-section">
          <h2>Third-Party Games and Trademarks</h2>
          <div className="tech-content">
            <p>
              Some pages may reference well-known games, game genres, or game-inspired descriptions for identification
              and player discovery. Names such as Minecraft or other game brands, when present, are trademarks of
              their respective owners.
            </p>
            <p>
              If you represent a rights holder and believe a listing, image, embed, or description should be changed
              or removed, please contact us with the affected URL and proof of authority so we can review it.
            </p>
          </div>
        </section>

        <section className="about-section contact-section">
          <h2>Get in Touch</h2>
          <div className="contact-content">
            <p>
              Use the contact page for support, broken game reports, privacy requests, advertising questions, or
              trademark and copyright concerns.
            </p>
            <div className="contact-methods">
              <div className="contact-method">
                <h3>Support</h3>
                <p><a href="mailto:support@globalplay.games">support@globalplay.games</a></p>
              </div>
              <div className="contact-method">
                <h3>Rights holders</h3>
                <p><a href="mailto:legal@globalplay.games">legal@globalplay.games</a></p>
              </div>
              <div className="contact-method">
                <h3>Privacy</h3>
                <p><a href="mailto:privacy@globalplay.games">privacy@globalplay.games</a></p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="about-navigation">
        <Link href="/" className="back-home">
          ← Back to Home
        </Link>
        <Link href="/contact" className="help-link">
          Contact GlobalPlay →
        </Link>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'About GlobalPlay - Independent Browser Game Directory',
  description:
    'Learn what GlobalPlay.games publishes, how the browser game catalog is organized, and how to contact the site publisher.',
};
