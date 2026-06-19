import Link from 'next/link';
import { canonical } from '@/lib/seo';
import type { Metadata } from 'next';
import './terms.css';

export const metadata: Metadata = {
  title: 'Terms of Service and Disclaimer - GlobalPlay',
  description:
    'Terms of Service for GlobalPlay.games, including third-party game disclosures, trademark disclaimer, acceptable use, ads, and analytics.',
  alternates: {
    canonical: canonical('/terms'),
  },
};

export default function TermsPage() {
  return (
    <div className="terms-container">
      <div className="terms-header">
        <h1>Terms of Service</h1>
        <p className="terms-subtitle">
          Terms, third-party game disclosures, and trademark disclaimer for GlobalPlay.games.
        </p>
        <div className="last-updated">Last updated: June 19, 2026</div>
      </div>

      <div className="terms-content">
        <section className="terms-section">
          <h2>Agreement Overview</h2>
          <p>
            These Terms govern your use of GlobalPlay.games. By accessing the site, browsing the catalog, using search,
            or launching an embedded game, you agree to these Terms and our{' '}
            <Link href="/privacy-policy">Privacy Policy</Link>.
          </p>
          <div className="agreement-box">
            <h3>Key points</h3>
            <ul>
              <li>GlobalPlay.games is an independent browser game directory.</li>
              <li>Third-party games and trademarks belong to their respective owners.</li>
              <li>Do not misuse the site, interfere with game embeds, or submit unlawful requests.</li>
              <li>Ads and analytics, when used, are subject to the privacy disclosures linked above.</li>
            </ul>
          </div>
        </section>

        <section className="terms-section">
          <h2>Site Description</h2>
          <div className="service-grid">
            <div className="service-card">
              <div className="service-icon">🎮</div>
              <h3>What we provide</h3>
              <ul>
                <li>Game discovery pages, categories, search, and related game lists.</li>
                <li>Information such as descriptions, controls, tags, ratings, and play count signals.</li>
                <li>Embedded game frames when a third-party provider makes a playable version available.</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">🧩</div>
              <h3>What we do not provide</h3>
              <ul>
                <li>We do not sell game downloads, subscriptions, gambling products, or paid game credits.</li>
                <li>We do not claim to be an official site for third-party game brands.</li>
                <li>We do not guarantee that every embedded game will always remain available.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="terms-section" id="third-party-content">
          <h2>Third-Party Games, Brands, and Trademarks</h2>
          <div className="ip-content">
            <div className="game-ip">
              <h3>Ownership</h3>
              <p>
                Games, names, logos, characters, screenshots, and trademarks shown or referenced on GlobalPlay.games
                are owned by their respective developers, publishers, licensors, or trademark holders. GlobalPlay.games
                uses this information for identification, cataloging, commentary, discovery, and compatibility context.
              </p>
            </div>
            <div className="our-ip">
              <h3>No affiliation implied</h3>
              <p>
                Unless a page clearly states otherwise, GlobalPlay.games is not affiliated with, sponsored by, endorsed
                by, or officially connected to any third-party game studio, publisher, platform, or brand referenced on
                the site.
              </p>
            </div>
            <div className="game-ip">
              <h3>Rights holder requests</h3>
              <p>
                If you believe a listing, image, embed, title, or description infringes your rights or creates brand
                confusion, email <a href="mailto:legal@globalplay.games">legal@globalplay.games</a> with the affected
                URL, the rights involved, and proof that you are authorized to act for the rights holder.
              </p>
            </div>
          </div>
        </section>

        <section className="terms-section">
          <h2>Acceptable Use</h2>
          <div className="usage-policy">
            <div className="allowed-uses">
              <h3>Permitted uses</h3>
              <ul>
                <li>Browse the catalog and launch games for personal entertainment.</li>
                <li>Use search, category pages, and related links to find games.</li>
                <li>Contact us about support, broken games, privacy, or rights-holder issues.</li>
              </ul>
            </div>

            <div className="prohibited-uses">
              <h3>Prohibited activities</h3>
              <div className="prohibition-grid">
                <div className="prohibition-item">
                  <h4>Technical abuse</h4>
                  <ul>
                    <li>Interfering with site security, game iframes, or provider systems.</li>
                    <li>Using bots, scrapers, or automated traffic in a way that degrades the site.</li>
                    <li>Attempting to inject code, malware, spam, or misleading redirects.</li>
                  </ul>
                </div>
                <div className="prohibition-item">
                  <h4>Misuse and impersonation</h4>
                  <ul>
                    <li>Impersonating GlobalPlay.games, a game publisher, or another rights holder.</li>
                    <li>Submitting false takedown, support, or legal claims.</li>
                    <li>Using the site to promote unlawful, harmful, or infringing activity.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="terms-section">
          <h2>Advertising and Analytics</h2>
          <p>
            GlobalPlay.games may use analytics and advertising services to operate and fund the site. Optional analytics
            scripts are loaded only after analytics consent. If Google AdSense or other ad services are enabled, their
            cookies and data use are described in the <Link href="/privacy-policy">Privacy Policy</Link>.
          </p>
          <p>
            You must not click ads repeatedly, encourage others to click ads, use automated ad traffic, or otherwise
            create invalid traffic.
          </p>
        </section>

        <section className="terms-section">
          <h2>Availability and Disclaimers</h2>
          <div className="disclaimers">
            <div className="service-disclaimer">
              <h3>Service availability</h3>
              <ul>
                <li>Game embeds may stop working if a third-party provider changes or removes a game.</li>
                <li>Performance may vary by browser, device, network, and third-party CDN availability.</li>
                <li>Descriptions, ratings, and play counts are catalog signals and may not reflect real-time data.</li>
              </ul>
            </div>
            <div className="service-disclaimer">
              <h3>No warranties</h3>
              <p>
                GlobalPlay.games is provided on an "as is" and "as available" basis. To the maximum extent permitted by
                law, we disclaim warranties of uninterrupted operation, error-free content, and fitness for a particular
                purpose.
              </p>
            </div>
          </div>
        </section>

        <section className="terms-section">
          <h2>Changes to These Terms</h2>
          <p>
            We may update these Terms when the site, catalog, advertising setup, or legal requirements change. The
            updated version will be posted here with a revised date. Continued use of the site after an update means you
            accept the updated Terms.
          </p>
        </section>

        <section className="terms-section contact-section">
          <h2>Contact Information</h2>
          <div className="contact-info">
            <p>
              General support: <a href="mailto:support@globalplay.games">support@globalplay.games</a>
            </p>
            <p>
              Privacy requests: <a href="mailto:privacy@globalplay.games">privacy@globalplay.games</a>
            </p>
            <p>
              Copyright, trademark, and legal requests:{' '}
              <a href="mailto:legal@globalplay.games">legal@globalplay.games</a>
            </p>
          </div>
        </section>
      </div>

      <div className="terms-navigation">
        <Link href="/privacy-policy" className="privacy-link">
          ← Privacy Policy
        </Link>
        <Link href="/contact" className="back-home">
          Contact →
        </Link>
      </div>
    </div>
  );
}
