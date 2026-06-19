import Link from 'next/link';
import './privacy.css';

export default function PrivacyPage() {
  return (
    <div className="privacy-container">
      <div className="privacy-header">
        <h1>Privacy Policy</h1>
        <p className="privacy-subtitle">
          How GlobalPlay.games handles privacy, analytics, embedded games, and advertising disclosures.
        </p>
        <div className="last-updated">Last updated: June 19, 2026</div>
      </div>

      <div className="privacy-content">
        <section className="privacy-section">
          <h2>Overview</h2>
          <p>
            GlobalPlay.games is an independent browser game directory. You can browse categories, search games,
            read game details, and launch games that may be embedded from third-party game providers.
          </p>
          <div className="highlight-box">
            <h3>What this policy covers</h3>
            <ul>
              <li>Information collected by this website, including server logs and optional analytics.</li>
              <li>Browser storage and cookies used for site operation, analytics, and advertising.</li>
              <li>Third-party game embeds that may process data under their own privacy practices.</li>
              <li>Choices available to users, including analytics consent and advertising opt-out links.</li>
            </ul>
          </div>
        </section>

        <section className="privacy-section">
          <h2>Information We Collect</h2>

          <div className="info-category">
            <h3>Information you choose to send</h3>
            <div className="info-grid">
              <div className="info-item">
                <h4>Contact messages</h4>
                <p>
                  If you email us, we receive the email address and information included in your message so we can
                  respond to support, privacy, legal, or game issue reports.
                </p>
              </div>
              <div className="info-item">
                <h4>Search terms</h4>
                <p>
                  Search queries are used to show matching games. We do not require an account to search or browse.
                </p>
              </div>
            </div>
          </div>

          <div className="info-category">
            <h3>Information collected automatically</h3>
            <div className="info-grid">
              <div className="info-item">
                <h4>Device and log data</h4>
                <p>
                  Hosting and security systems may process IP address, browser type, device type, referring URL,
                  pages requested, timestamps, and error logs.
                </p>
              </div>
              <div className="info-item">
                <h4>Optional analytics</h4>
                <p>
                  If you accept optional analytics, Google Analytics and Microsoft Clarity may help us understand
                  page performance, navigation patterns, and game launch errors.
                </p>
              </div>
              <div className="info-item">
                <h4>Embedded games</h4>
                <p>
                  When a game is loaded in an iframe, the game provider or hosting CDN may receive technical data
                  needed to deliver the game.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="privacy-section">
          <h2>Cookies, Storage, and Advertising</h2>
          <div className="cookies-content">
            <p>
              We use browser storage and similar technologies for site operation. Optional analytics cookies are only
              loaded after you accept them in the cookie notice.
            </p>
            <div className="cookie-types">
              <div className="cookie-type">
                <h3>Essential storage</h3>
                <p>
                  Required for basic site behavior, such as remembering your cookie choice and supporting browser
                  functionality needed by game pages.
                </p>
                <span className="cookie-status required">Required</span>
              </div>
              <div className="cookie-type">
                <h3>Analytics cookies</h3>
                <p>
                  Used only with your consent to measure page visits, performance, and technical issues through
                  analytics providers such as Google Analytics and Microsoft Clarity.
                </p>
                <span className="cookie-status optional">Optional</span>
              </div>
              <div className="cookie-type">
                <h3>Advertising cookies</h3>
                <p>
                  If Google AdSense or other ad partners are enabled, Google and third-party ad vendors may use
                  cookies, web beacons, IP addresses, and browser identifiers to serve, measure, and protect ads.
                </p>
                <span className="cookie-status optional">Consent based</span>
              </div>
            </div>
            <div className="cookie-control">
              <p>
                You can change browser cookie settings at any time. You can also manage personalized ads through{' '}
                <a href="https://adssettings.google.com/" rel="noopener noreferrer">
                  Google Ads Settings
                </a>{' '}
                and learn about broader industry opt-outs at{' '}
                <a href="https://www.aboutads.info/choices/" rel="noopener noreferrer">
                  aboutads.info
                </a>.
              </p>
            </div>
          </div>
        </section>

        <section className="privacy-section">
          <h2>Google AdSense and Third-Party Vendors</h2>
          <p>
            We intend to use Google AdSense to help fund the site. When ads are served, Google and its advertising
            partners may use cookies or similar technologies based on your visits to this and other websites. These
            technologies help provide ads, limit repeated ads, measure ad performance, and detect fraud or abuse.
          </p>
          <p>
            Third-party ad vendors and ad networks may also serve ads on this site if enabled in our ad settings.
            You can review Google&apos;s information about ad technology providers at{' '}
            <a href="https://support.google.com/admanager/answer/9012903" rel="noopener noreferrer">
              Google ad technology providers
            </a>.
          </p>
          <p>
            For users in the European Economic Area, the United Kingdom, and Switzerland, advertising cookies and
            related personal data processing must be managed through a Google-certified consent management platform
            where required before personalized or non-personalized ads are served.
          </p>
        </section>

        <section className="privacy-section">
          <h2>How We Use Information</h2>
          <div className="usage-grid">
            <div className="usage-card">
              <div className="usage-icon">🎮</div>
              <h3>Run the site</h3>
              <ul>
                <li>Display game pages, categories, search results, and help content.</li>
                <li>Load embedded games from their source providers.</li>
                <li>Remember your cookie choice.</li>
              </ul>
            </div>
            <div className="usage-card">
              <div className="usage-icon">🔧</div>
              <h3>Improve reliability</h3>
              <ul>
                <li>Diagnose broken pages, slow loads, and iframe launch errors.</li>
                <li>Understand which categories and game pages need better documentation.</li>
                <li>Protect the site from spam, abuse, and automated misuse.</li>
              </ul>
            </div>
            <div className="usage-card">
              <div className="usage-icon">📧</div>
              <h3>Respond to messages</h3>
              <ul>
                <li>Reply to support, privacy, legal, and game issue reports.</li>
                <li>Review copyright, trademark, or takedown requests.</li>
                <li>Keep records needed to resolve a request.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="privacy-section">
          <h2>Information Sharing</h2>
          <div className="sharing-policy">
            <div className="sharing-limited">
              <h3>Limited sharing</h3>
              <ul>
                <li>
                  <strong>Hosting and security providers:</strong> process technical logs needed to operate the site.
                </li>
                <li>
                  <strong>Analytics providers:</strong> process optional analytics data only after analytics consent.
                </li>
                <li>
                  <strong>Embedded game providers:</strong> may receive technical data when their game iframe loads.
                </li>
                <li>
                  <strong>Advertising partners:</strong> may process advertising data when ads are enabled and consent
                  requirements are met.
                </li>
                <li>
                  <strong>Legal and safety:</strong> information may be shared if required by law or necessary to
                  protect the site, users, or rights holders.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="privacy-section">
          <h2>Your Choices</h2>
          <div className="rights-grid">
            <div className="right-item">
              <h3>Cookie choice</h3>
              <p>Use the cookie notice to accept or reject optional analytics cookies.</p>
            </div>
            <div className="right-item">
              <h3>Browser controls</h3>
              <p>Block or delete cookies through your browser settings. Some game embeds may work differently.</p>
            </div>
            <div className="right-item">
              <h3>Advertising controls</h3>
              <p>Use Google Ads Settings or industry opt-out pages to manage personalized advertising choices.</p>
            </div>
            <div className="right-item">
              <h3>Contact requests</h3>
              <p>Ask us to review, correct, or delete information you sent directly by email.</p>
            </div>
          </div>
        </section>

        <section className="privacy-section">
          <h2>Children&apos;s Privacy</h2>
          <p>
            GlobalPlay.games is not directed to children under 13, and we do not knowingly collect personal
            information from children under 13. If you believe a child has sent us personal information, contact us
            and we will review the request.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Changes to This Policy</h2>
          <p>
            We may update this policy as the site changes, including when advertising, analytics, consent tools, or
            embedded game providers change. The latest version will be posted on this page with a revised date.
          </p>
        </section>

        <section className="privacy-section contact-section">
          <h2>Contact</h2>
          <div className="contact-info">
            <p>
              For privacy questions, email{' '}
              <a href="mailto:privacy@globalplay.games">privacy@globalplay.games</a>. For general support or game
              issue reports, use the <Link href="/contact">Contact page</Link>.
            </p>
          </div>
        </section>
      </div>

      <div className="privacy-navigation">
        <Link href="/" className="back-home">
          ← Back to Home
        </Link>
        <Link href="/terms" className="terms-link">
          Terms & Disclaimer →
        </Link>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Privacy Policy - GlobalPlay',
  description:
    'Privacy policy for GlobalPlay.games, including analytics, cookies, embedded games, Google AdSense disclosures, and user choices.',
};
