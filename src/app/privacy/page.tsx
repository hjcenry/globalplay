import Link from 'next/link';
import './privacy.css';

export default function PrivacyPage() {
  return (
    <div className="privacy-container">
      <div className="privacy-header">
        <h1>Privacy Policy</h1>
        <p className="privacy-subtitle">
          Your privacy is important to us. This policy explains how we collect, use, and protect your information.
        </p>
        <div className="last-updated">
          Last updated: December 2024
        </div>
      </div>

      <div className="privacy-content">
        <section className="privacy-section">
          <h2>📋 Overview</h2>
          <p>
            At GlobalPlay, we are committed to protecting your privacy and ensuring transparency about how we handle your data. 
            This Privacy Policy explains what information we collect, how we use it, and your rights regarding your personal data.
          </p>
          <div className="highlight-box">
            <h3>🔒 Our Privacy Commitment</h3>
            <ul>
              <li>We never sell your personal data to third parties</li>
              <li>We collect only the minimum data necessary to provide our services</li>
              <li>You have full control over your data and can delete it at any time</li>
              <li>We use industry-standard security measures to protect your information</li>
            </ul>
          </div>
        </section>

        <section className="privacy-section">
          <h2>📊 Information We Collect</h2>
          
          <div className="info-category">
            <h3>🔍 Information You Provide Directly</h3>
            <div className="info-grid">
              <div className="info-item">
                <h4>Account Information</h4>
                <p>When you create an account, we collect your email address, username, and password (encrypted).</p>
              </div>
              <div className="info-item">
                <h4>Profile Data</h4>
                <p>Optional profile information such as display name, avatar, and gaming preferences.</p>
              </div>
              <div className="info-item">
                <h4>Communications</h4>
                <p>Messages you send to our support team, feedback, and survey responses.</p>
              </div>
              <div className="info-item">
                <h4>User-Generated Content</h4>
                <p>Game reviews, comments, and any content you choose to share publicly.</p>
              </div>
            </div>
          </div>

          <div className="info-category">
            <h3>📈 Information We Collect Automatically</h3>
            <div className="info-grid">
              <div className="info-item">
                <h4>Gaming Activity</h4>
                <p>Games played, play time, scores, achievements, and progress data.</p>
              </div>
              <div className="info-item">
                <h4>Device Information</h4>
                <p>Browser type, operating system, screen resolution, and device capabilities.</p>
              </div>
              <div className="info-item">
                <h4>Usage Analytics</h4>
                <p>How you interact with our platform, pages visited, and feature usage.</p>
              </div>
              <div className="info-item">
                <h4>Technical Data</h4>
                <p>IP address, session data, and performance metrics for service improvement.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="privacy-section">
          <h2>🎯 How We Use Your Information</h2>
          <div className="usage-grid">
            <div className="usage-card">
              <div className="usage-icon">🎮</div>
              <h3>Service Delivery</h3>
              <ul>
                <li>Provide access to games and platform features</li>
                <li>Save your game progress and preferences</li>
                <li>Enable social features like leaderboards</li>
                <li>Personalize your gaming experience</li>
              </ul>
            </div>
            <div className="usage-card">
              <div className="usage-icon">🔧</div>
              <h3>Platform Improvement</h3>
              <ul>
                <li>Analyze usage patterns to improve our service</li>
                <li>Fix bugs and optimize performance</li>
                <li>Develop new features based on user behavior</li>
                <li>Ensure platform security and stability</li>
              </ul>
            </div>
            <div className="usage-card">
              <div className="usage-icon">📢</div>
              <h3>Communication</h3>
              <ul>
                <li>Send important service updates</li>
                <li>Respond to your support requests</li>
                <li>Notify you about new games (if opted in)</li>
                <li>Share platform news and announcements</li>
              </ul>
            </div>
            <div className="usage-card">
              <div className="usage-icon">⚖️</div>
              <h3>Legal Compliance</h3>
              <ul>
                <li>Comply with applicable laws and regulations</li>
                <li>Protect against fraud and abuse</li>
                <li>Enforce our Terms of Service</li>
                <li>Respond to legal requests when required</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="privacy-section">
          <h2>🍪 Cookies and Tracking</h2>
          <div className="cookies-content">
            <p>
              We use cookies and similar technologies to enhance your experience on GlobalPlay. 
              Here&apos;s what you need to know:
            </p>
            <div className="cookie-types">
              <div className="cookie-type">
                <h3>🔧 Essential Cookies</h3>
                <p>Required for basic platform functionality, such as keeping you logged in and remembering your preferences.</p>
                <span className="cookie-status required">Required</span>
              </div>
              <div className="cookie-type">
                <h3>📊 Analytics Cookies</h3>
                <p>Help us understand how you use our platform so we can improve it. These are anonymized and aggregated.</p>
                <span className="cookie-status optional">Optional</span>
              </div>
              <div className="cookie-type">
                <h3>🎯 Preference Cookies</h3>
                <p>Remember your settings and preferences to provide a personalized experience.</p>
                <span className="cookie-status optional">Optional</span>
              </div>
            </div>
            <div className="cookie-control">
              <p>
                You can control cookie settings in your browser or through our cookie preferences center. 
                Note that disabling certain cookies may affect platform functionality.
              </p>
            </div>
          </div>
        </section>

        <section className="privacy-section">
          <h2>🤝 Information Sharing</h2>
          <div className="sharing-policy">
            <div className="sharing-never">
              <h3>❌ We Never Share</h3>
              <ul>
                <li>Your personal data with advertisers</li>
                <li>Your gaming activity for marketing purposes</li>
                <li>Your private messages or communications</li>
                <li>Your data for profit or commercial gain</li>
              </ul>
            </div>
            <div className="sharing-limited">
              <h3>⚠️ Limited Sharing</h3>
              <p>We may share information only in these specific circumstances:</p>
              <ul>
                <li><strong>Service Providers:</strong> Trusted partners who help us operate the platform (hosting, analytics)</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our users&apos; safety</li>
                <li><strong>Business Transfers:</strong> In the unlikely event of a merger or acquisition</li>
                <li><strong>Public Information:</strong> Data you choose to make public (usernames, scores, reviews)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="privacy-section">
          <h2>🔐 Data Security</h2>
          <div className="security-measures">
            <div className="security-grid">
              <div className="security-item">
                <h3>🔒 Encryption</h3>
                <p>All data transmission is encrypted using industry-standard SSL/TLS protocols.</p>
              </div>
              <div className="security-item">
                <h3>🛡️ Access Controls</h3>
                <p>Strict access controls ensure only authorized personnel can access user data.</p>
              </div>
              <div className="security-item">
                <h3>🔍 Regular Audits</h3>
                <p>We conduct regular security audits and vulnerability assessments.</p>
              </div>
              <div className="security-item">
                <h3>💾 Secure Storage</h3>
                <p>Data is stored in secure, geographically distributed data centers.</p>
              </div>
            </div>
            <div className="security-note">
              <p>
                <strong>Important:</strong> While we implement robust security measures, no system is 100% secure. 
                We encourage you to use strong, unique passwords and enable two-factor authentication when available.
              </p>
            </div>
          </div>
        </section>

        <section className="privacy-section">
          <h2>👤 Your Rights and Choices</h2>
          <div className="rights-grid">
            <div className="right-item">
              <h3>📋 Access Your Data</h3>
              <p>Request a copy of all personal data we have about you.</p>
            </div>
            <div className="right-item">
              <h3>✏️ Correct Your Data</h3>
              <p>Update or correct any inaccurate personal information.</p>
            </div>
            <div className="right-item">
              <h3>🗑️ Delete Your Data</h3>
              <p>Request deletion of your account and associated data.</p>
            </div>
            <div className="right-item">
              <h3>📤 Data Portability</h3>
              <p>Export your data in a machine-readable format.</p>
            </div>
            <div className="right-item">
              <h3>🚫 Opt-Out</h3>
              <p>Unsubscribe from marketing communications at any time.</p>
            </div>
            <div className="right-item">
              <h3>⚠️ Object to Processing</h3>
              <p>Object to certain types of data processing where applicable.</p>
            </div>
          </div>
          <div className="rights-contact">
            <p>
              To exercise any of these rights, please contact us at{' '}
              <a href="mailto:privacy@globalplay.games">privacy@globalplay.games</a>{' '}
              or use the data management tools in your account settings.
            </p>
          </div>
        </section>

        <section className="privacy-section">
          <h2>👶 Children&apos;s Privacy</h2>
          <div className="children-policy">
            <div className="age-restriction">
              <h3>🔞 Age Requirements</h3>
              <p>
                GlobalPlay is designed for users aged 13 and older. We do not knowingly collect personal 
                information from children under 13 years of age.
              </p>
            </div>
            <div className="parental-controls">
              <h3>👨‍👩‍👧‍👦 Parental Controls</h3>
              <ul>
                <li>Parents can request deletion of their child&apos;s account</li>
                <li>We provide content filtering options for age-appropriate gaming</li>
                <li>Communication features can be disabled for younger users</li>
                <li>Parents can contact us to review their child&apos;s data</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="privacy-section">
          <h2>🌍 International Data Transfers</h2>
          <div className="international-content">
            <p>
              GlobalPlay operates globally, and your data may be processed in countries other than your own. 
              We ensure appropriate safeguards are in place for international data transfers:
            </p>
            <div className="transfer-safeguards">
              <div className="safeguard-item">
                <h3>📜 Legal Frameworks</h3>
                <p>We comply with applicable data protection laws including GDPR, CCPA, and other regional regulations.</p>
              </div>
              <div className="safeguard-item">
                <h3>🤝 Standard Contractual Clauses</h3>
                <p>We use EU-approved Standard Contractual Clauses for data transfers outside the EEA.</p>
              </div>
              <div className="safeguard-item">
                <h3>🏢 Adequacy Decisions</h3>
                <p>We prioritize data processing in countries with adequate data protection standards.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="privacy-section">
          <h2>📝 Changes to This Policy</h2>
          <div className="changes-policy">
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices, 
              technology, or legal requirements. When we make changes:
            </p>
            <ul>
              <li>We&apos;ll update the &quot;Last Updated&quot; date at the top of this policy</li>
              <li>For significant changes, we&apos;ll notify you via email or platform notification</li>
              <li>We&apos;ll maintain previous versions for your reference</li>
              <li>Continued use of our service constitutes acceptance of the updated policy</li>
            </ul>
          </div>
        </section>

        <section className="privacy-section contact-section">
          <h2>📞 Contact Us</h2>
          <div className="contact-info">
            <p>
              If you have any questions about this Privacy Policy or our data practices, 
              please don&apos;t hesitate to contact us:
            </p>
            <div className="contact-methods">
              <div className="contact-method">
                <h3>📧 Privacy Team</h3>
                <p><a href="mailto:privacy@globalplay.games">privacy@globalplay.games</a></p>
              </div>
              <div className="contact-method">
                <h3>📮 Mailing Address</h3>
                <p>
                  GlobalPlay Privacy Team<br />
                  123 Gaming Street<br />
                  Tech City, TC 12345<br />
                  United States
                </p>
              </div>
              <div className="contact-method">
                <h3>⏰ Response Time</h3>
                <p>We aim to respond to all privacy inquiries within 30 days.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="privacy-navigation">
        <Link href="/" className="back-home">
          ← Back to Home
        </Link>
        <Link href="/terms" className="terms-link">
          Terms of Service →
        </Link>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Privacy Policy - GlobalPlay',
  description: 'Learn how GlobalPlay protects your privacy and handles your personal data. Our comprehensive privacy policy explains data collection, usage, and your rights.',
}; 