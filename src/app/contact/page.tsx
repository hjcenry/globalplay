import Link from 'next/link';
import { canonical } from '@/lib/seo';
import type { Metadata } from 'next';
import '../privacy/privacy.css';

export const metadata: Metadata = {
  title: 'Contact GlobalPlay - Support, Privacy, Legal, and Advertising',
  description:
    'Contact GlobalPlay.games for support, privacy questions, legal and rights-holder requests, advertising, or broken game reports.',
  alternates: {
    canonical: canonical('/contact'),
  },
};

export default function ContactPage() {
  return (
    <div className="privacy-container">
      <div className="privacy-header">
        <h1>Contact GlobalPlay</h1>
        <p className="privacy-subtitle">
          Support, privacy, advertising, and rights-holder contact information for GlobalPlay.games.
        </p>
        <div className="last-updated">Last updated: June 19, 2026</div>
      </div>

      <div className="privacy-content">
        <section className="privacy-section">
          <h2>Contact Channels</h2>
          <div className="contact-methods">
            <div className="contact-method">
              <h3>General support</h3>
              <p><a href="mailto:support@globalplay.games">support@globalplay.games</a></p>
              <p>Use this for broken game pages, loading issues, catalog feedback, and general questions.</p>
            </div>
            <div className="contact-method">
              <h3>Privacy</h3>
              <p><a href="mailto:privacy@globalplay.games">privacy@globalplay.games</a></p>
              <p>Use this for privacy questions, cookie choices, analytics concerns, or data requests.</p>
            </div>
            <div className="contact-method">
              <h3>Legal and rights holder requests</h3>
              <p><a href="mailto:legal@globalplay.games">legal@globalplay.games</a></p>
              <p>Use this for copyright, trademark, brand confusion, takedown, or ownership concerns.</p>
            </div>
            <div className="contact-method">
              <h3>Advertising</h3>
              <p><a href="mailto:ads@globalplay.games">ads@globalplay.games</a></p>
              <p>Use this for advertising disclosures, ads.txt questions, and ad placement concerns.</p>
            </div>
          </div>
        </section>

        <section className="privacy-section" id="report">
          <h2>Report a Game or Page Issue</h2>
          <p>
            To help us review a report quickly, include the affected URL, your browser and device, what happened, and
            whether the issue appears before or after the embedded game loads.
          </p>
          <div className="highlight-box">
            <h3>Rights-holder reports</h3>
            <p>
              If your report concerns copyright, trademark, or brand ownership, include the exact URL, the work or mark
              involved, the requested action, and proof that you are authorized to act for the owner.
            </p>
          </div>
        </section>

        <section className="privacy-section">
          <h2>Useful Links</h2>
          <div className="rights-grid">
            <div className="right-item">
              <h3>Privacy Policy</h3>
              <p><Link href="/privacy-policy">Read our privacy, cookies, analytics, and AdSense disclosures.</Link></p>
            </div>
            <div className="right-item">
              <h3>Terms & Disclaimer</h3>
              <p><Link href="/terms">Read third-party game, trademark, and acceptable use terms.</Link></p>
            </div>
            <div className="right-item">
              <h3>Sitemap</h3>
              <p><Link href="/sitemap">Find all major site pages, categories, and game listings.</Link></p>
            </div>
          </div>
        </section>
      </div>

      <div className="privacy-navigation">
        <Link href="/" className="back-home">
          ← Back to Home
        </Link>
        <Link href="/about" className="terms-link">
          About GlobalPlay →
        </Link>
      </div>
    </div>
  );
}
