import Link from 'next/link';
import { getIndexableCategories, getIndexableCategoryCount } from '@/data/games';
import { canonical } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Browser Game Guides - GlobalPlay',
  description:
    'Practical browser gaming guides for choosing categories, fixing loading issues, understanding controls, privacy settings, and third-party game embeds.',
  alternates: {
    canonical: canonical('/guides'),
  },
};

export default function GuidesPage() {
  const categories = getIndexableCategories();

  return (
    <>
      <div className="breadcrumb">
        <div className="breadcrumb-nav">
          <Link href="/">Home</Link> <span>›</span> <span>Guides</span>
        </div>
      </div>

      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <h1 className="page-title">Browser Game Guides</h1>
            <p className="page-description">
              Practical notes for playing web games on GlobalPlay: how to pick a category, what to check when a game
              does not load, and how third-party embeds, cookies, and controls work.
            </p>
          </div>

          <div className="features-grid">
            <article className="feature-card">
              <div className="feature-icon">🧭</div>
              <h2 className="feature-title">Choosing a Game</h2>
              <p className="feature-description">
                Start with a category that matches your session length. Action and racing usually work well
                for quick rounds. Puzzle and strategy pages are better when you want slower decisions. Adventure games
                tend to vary the most, so check controls and related titles before launching.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon">⌨️</div>
              <h2 className="feature-title">Controls and Fullscreen</h2>
              <p className="feature-description">
                Each game page lists the available control style, such as keyboard, mouse, touch, or keyboard and mouse.
                Click inside the game frame before using keys, because browsers often keep keyboard focus on the page
                until the iframe is selected.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon">🛠️</div>
              <h2 className="feature-title">If a Game Does Not Load</h2>
              <p className="feature-description">
                Refresh the page, disable strict iframe blockers for the current site, and try another browser. Some
                games are hosted by third-party providers, so availability can change if that provider removes or moves
                the embedded game.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon">🔒</div>
              <h2 className="feature-title">Privacy and Third Parties</h2>
              <p className="feature-description">
                GlobalPlay does not require an account to browse or play. Embedded games may be delivered from external
                CDNs or game providers, and optional analytics load only after you accept analytics cookies.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="categories-section">
        <div className="container">
          <h2 className="section-title">Category Guide</h2>
          <div className="categories-grid">
            {categories.map((category) => {
              const count = getIndexableCategoryCount(category.id);
              return (
                <Link key={category.id} href={`/categories/${category.id}`} className="category-card">
                  <div className="category-icon">{category.icon}</div>
                  <div className="category-name">{category.name}</div>
                  <div className="category-count">{count} reviewed games</div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="featured-section">
        <div className="container">
          <h2 className="section-title">Helpful Site Pages</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">❓</div>
              <h3 className="feature-title">Help Center</h3>
              <p className="feature-description">
                Troubleshooting steps for loading, controls, fullscreen behavior, and broken game reports.
              </p>
              <Link href="/help" className="inline-link">Open Help Center</Link>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚖️</div>
              <h3 className="feature-title">Terms & Disclaimer</h3>
              <p className="feature-description">
                Third-party game, trademark, no-affiliation, advertising, and acceptable use disclosures.
              </p>
              <Link href="/terms" className="inline-link">Read Terms</Link>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🍪</div>
              <h3 className="feature-title">Privacy Policy</h3>
              <p className="feature-description">
                Cookie, analytics, embedded game, Google AdSense, and user choice information.
              </p>
              <Link href="/privacy-policy" className="inline-link">Read Privacy Policy</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
