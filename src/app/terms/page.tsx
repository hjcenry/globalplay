import Link from 'next/link';
import './terms.css';

export default function TermsPage() {
  return (
    <div className="terms-container">
      <div className="terms-header">
        <h1>Terms of Service</h1>
        <p className="terms-subtitle">
          Please read these terms carefully before using GlobalPlay. By using our service, you agree to these terms.
        </p>
        <div className="last-updated">
          Last updated: December 2024
        </div>
      </div>

      <div className="terms-content">
        <section className="terms-section">
          <h2>📋 Agreement Overview</h2>
          <p>
            Welcome to GlobalPlay! These Terms of Service (&quot;Terms&quot;) govern your use of our gaming platform 
            and services. By accessing or using GlobalPlay, you agree to be bound by these Terms and our Privacy Policy.
          </p>
          <div className="agreement-box">
            <h3>🤝 Key Points</h3>
            <ul>
              <li>You must be at least 13 years old to use our service</li>
              <li>Our service is provided free of charge</li>
              <li>You are responsible for your account security</li>
              <li>We reserve the right to modify these terms with notice</li>
            </ul>
          </div>
        </section>

        <section className="terms-section">
          <h2>👤 User Accounts and Eligibility</h2>
          
          <div className="eligibility-content">
            <h3>🔞 Age Requirements</h3>
            <p>
              GlobalPlay is intended for users who are at least 13 years of age. If you are under 18, 
              you must have your parent or guardian&apos;s permission to use our service.
            </p>
            
            <h3>📝 Account Registration</h3>
            <div className="account-rules">
              <div className="rule-item">
                <h4>✅ Account Creation</h4>
                <ul>
                  <li>Provide accurate and complete information</li>
                  <li>Choose a unique username that doesn&apos;t violate our guidelines</li>
                  <li>Use a valid email address for verification</li>
                  <li>Create a secure password</li>
                </ul>
              </div>
              <div className="rule-item">
                <h4>🔒 Account Security</h4>
                <ul>
                  <li>You are responsible for maintaining account confidentiality</li>
                  <li>Notify us immediately of any unauthorized access</li>
                  <li>Do not share your account credentials with others</li>
                  <li>Use two-factor authentication when available</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="terms-section">
          <h2>🎮 Service Description and Usage</h2>
          
          <div className="service-grid">
            <div className="service-card">
              <div className="service-icon">🎯</div>
              <h3>What We Provide</h3>
              <ul>
                <li>Access to thousands of free web games</li>
                <li>Game progress saving and synchronization</li>
                <li>Social features like leaderboards and achievements</li>
                <li>Personalized game recommendations</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">⚡</div>
              <h3>Service Availability</h3>
              <ul>
                <li>We strive for 99.9% uptime but cannot guarantee it</li>
                <li>Scheduled maintenance will be announced in advance</li>
                <li>Some games may be temporarily unavailable</li>
                <li>Service may vary by geographic location</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3>Technical Requirements</h3>
              <ul>
                <li>Modern web browser with JavaScript enabled</li>
                <li>Stable internet connection</li>
                <li>Cookies and local storage enabled</li>
                <li>Compatible device (desktop, tablet, or mobile)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="terms-section">
          <h2>📜 Acceptable Use Policy</h2>
          
          <div className="usage-policy">
            <div className="allowed-uses">
              <h3>✅ Permitted Uses</h3>
              <ul>
                <li>Playing games for personal entertainment</li>
                <li>Creating and sharing game reviews and comments</li>
                <li>Participating in community discussions</li>
                <li>Sharing achievements and scores</li>
                <li>Providing feedback to improve our service</li>
              </ul>
            </div>
            
            <div className="prohibited-uses">
              <h3>❌ Prohibited Activities</h3>
              <div className="prohibition-grid">
                <div className="prohibition-item">
                  <h4>🚫 Account Misuse</h4>
                  <ul>
                    <li>Creating multiple accounts to circumvent restrictions</li>
                    <li>Sharing accounts or selling account access</li>
                    <li>Impersonating other users or entities</li>
                    <li>Using automated tools or bots</li>
                  </ul>
                </div>
                <div className="prohibition-item">
                  <h4>🚫 Content Violations</h4>
                  <ul>
                    <li>Posting offensive, harmful, or illegal content</li>
                    <li>Harassment, bullying, or threatening behavior</li>
                    <li>Spam, advertising, or promotional content</li>
                    <li>Copyright or trademark infringement</li>
                  </ul>
                </div>
                <div className="prohibition-item">
                  <h4>🚫 Technical Abuse</h4>
                  <ul>
                    <li>Attempting to hack or exploit our systems</li>
                    <li>Distributing malware or viruses</li>
                    <li>Overloading our servers or networks</li>
                    <li>Reverse engineering our software</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="terms-section">
          <h2>🎨 User-Generated Content</h2>
          
          <div className="content-policy">
            <h3>📝 Content You Create</h3>
            <p>
              When you post reviews, comments, or other content on GlobalPlay, you grant us certain rights 
              while retaining ownership of your content.
            </p>
            
            <div className="content-rights">
              <div className="user-rights">
                <h4>👤 Your Rights</h4>
                <ul>
                  <li>You retain ownership of content you create</li>
                  <li>You can edit or delete your content at any time</li>
                  <li>You control the privacy settings of your content</li>
                  <li>You can request data export or account deletion</li>
                </ul>
              </div>
              <div className="platform-rights">
                <h4>🏢 Our Rights</h4>
                <ul>
                  <li>Display your content on our platform</li>
                  <li>Moderate content for community guidelines</li>
                  <li>Remove content that violates our policies</li>
                  <li>Use aggregated data for service improvement</li>
                </ul>
              </div>
            </div>
            
            <div className="content-guidelines">
              <h3>📋 Content Guidelines</h3>
              <div className="guideline-grid">
                <div className="guideline-item">
                  <h4>✅ Encouraged Content</h4>
                  <ul>
                    <li>Helpful game reviews and tips</li>
                    <li>Constructive feedback and suggestions</li>
                    <li>Positive community interactions</li>
                    <li>Creative and original content</li>
                  </ul>
                </div>
                <div className="guideline-item">
                  <h4>⚠️ Content Standards</h4>
                  <ul>
                    <li>Keep content family-friendly</li>
                    <li>Respect other users and developers</li>
                    <li>Avoid spoilers without proper warnings</li>
                    <li>Use appropriate language and tone</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="terms-section">
          <h2>⚖️ Intellectual Property Rights</h2>
          
          <div className="ip-content">
            <div className="our-ip">
              <h3>🏢 GlobalPlay&apos;s Intellectual Property</h3>
              <p>
                The GlobalPlay platform, including its design, features, and technology, is protected by 
                intellectual property laws. This includes:
              </p>
              <ul>
                <li>Platform design, layout, and user interface</li>
                <li>Software, algorithms, and technical systems</li>
                <li>Trademarks, logos, and brand elements</li>
                <li>Curated content and game collections</li>
              </ul>
            </div>
            
            <div className="game-ip">
              <h3>🎮 Game Developer Rights</h3>
              <p>
                Games on our platform are owned by their respective developers and publishers. We respect 
                their intellectual property rights and expect users to do the same.
              </p>
              <div className="ip-respect">
                <h4>🤝 How We Respect IP Rights</h4>
                <ul>
                  <li>Obtain proper licensing for all hosted games</li>
                  <li>Respond promptly to valid DMCA takedown requests</li>
                  <li>Provide clear attribution to game creators</li>
                  <li>Support developers through our platform features</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="terms-section">
          <h2>🛡️ Disclaimers and Limitations</h2>
          
          <div className="disclaimers">
            <div className="service-disclaimer">
              <h3>⚠️ Service Disclaimers</h3>
              <div className="disclaimer-box">
                <p>
                  <strong>AS IS BASIS:</strong> GlobalPlay is provided &quot;as is&quot; without warranties of any kind. 
                  We do not guarantee that our service will be uninterrupted, error-free, or completely secure.
                </p>
              </div>
              <ul>
                <li>We cannot guarantee the availability of specific games</li>
                <li>Game performance may vary based on your device and connection</li>
                <li>Third-party games are subject to their own terms and conditions</li>
                <li>We are not responsible for content or actions of game developers</li>
              </ul>
            </div>
            
            <div className="liability-limits">
              <h3>📊 Limitation of Liability</h3>
              <div className="liability-grid">
                <div className="liability-item">
                  <h4>💰 Financial Limits</h4>
                  <p>Our total liability to you for any claims shall not exceed the amount you paid us in the past 12 months (which is $0 for our free service).</p>
                </div>
                <div className="liability-item">
                  <h4>🚫 Excluded Damages</h4>
                  <p>We are not liable for indirect, incidental, special, or consequential damages, including lost profits or data.</p>
                </div>
                <div className="liability-item">
                  <h4>⏰ Time Limits</h4>
                  <p>Any claims against us must be brought within one year of the date the claim arose.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="terms-section">
          <h2>🔄 Termination and Suspension</h2>
          
          <div className="termination-policy">
            <div className="user-termination">
              <h3>👤 Your Right to Terminate</h3>
              <p>You may stop using our service at any time and delete your account through your account settings.</p>
              <ul>
                <li>Account deletion is immediate and irreversible</li>
                <li>Your data will be deleted according to our Privacy Policy</li>
                <li>You can export your data before deletion</li>
                <li>Some information may be retained for legal compliance</li>
              </ul>
            </div>
            
            <div className="platform-termination">
              <h3>🏢 Our Right to Terminate</h3>
              <p>We may suspend or terminate your account if you violate these Terms or for other legitimate reasons.</p>
              
              <div className="termination-reasons">
                <div className="reason-item">
                  <h4>⚠️ Suspension Reasons</h4>
                  <ul>
                    <li>Violation of community guidelines</li>
                    <li>Suspicious or fraudulent activity</li>
                    <li>Technical security concerns</li>
                    <li>Pending investigation of reported issues</li>
                  </ul>
                </div>
                <div className="reason-item">
                  <h4>🚫 Termination Reasons</h4>
                  <ul>
                    <li>Repeated violations of our Terms</li>
                    <li>Illegal activities or content</li>
                    <li>Harassment or abuse of other users</li>
                    <li>Attempts to compromise platform security</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="terms-section">
          <h2>📝 Changes to Terms</h2>
          
          <div className="changes-policy">
            <h3>🔄 How We Update These Terms</h3>
            <p>
              We may update these Terms from time to time to reflect changes in our service, 
              legal requirements, or business practices.
            </p>
            
            <div className="update-process">
              <div className="process-step">
                <h4>📢 Notification</h4>
                <p>We&apos;ll notify you of significant changes via email or platform notification at least 30 days before they take effect.</p>
              </div>
              <div className="process-step">
                <h4>📅 Effective Date</h4>
                <p>Changes become effective on the date specified in the updated Terms, not when you receive notification.</p>
              </div>
              <div className="process-step">
                <h4>✅ Acceptance</h4>
                <p>Continued use of our service after changes take effect constitutes acceptance of the new Terms.</p>
              </div>
              <div className="process-step">
                <h4>🚪 Disagreement</h4>
                <p>If you don&apos;t agree with changes, you may terminate your account before they take effect.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="terms-section">
          <h2>🌍 Governing Law and Disputes</h2>
          
          <div className="legal-framework">
            <div className="governing-law">
              <h3>⚖️ Applicable Law</h3>
              <p>
                These Terms are governed by the laws of the State of California, United States, 
                without regard to conflict of law principles.
              </p>
            </div>
            
            <div className="dispute-resolution">
              <h3>🤝 Dispute Resolution</h3>
              <div className="resolution-steps">
                <div className="step-item">
                  <h4>1️⃣ Direct Communication</h4>
                  <p>We encourage you to contact us first to resolve any disputes informally.</p>
                </div>
                <div className="step-item">
                  <h4>2️⃣ Mediation</h4>
                  <p>If direct communication fails, we may agree to mediation through a neutral third party.</p>
                </div>
                <div className="step-item">
                  <h4>3️⃣ Arbitration</h4>
                  <p>Disputes that cannot be resolved informally may be subject to binding arbitration.</p>
                </div>
                <div className="step-item">
                  <h4>4️⃣ Court Jurisdiction</h4>
                  <p>Any legal proceedings must be brought in the courts of California, United States.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="terms-section contact-section">
          <h2>📞 Contact Information</h2>
          
          <div className="contact-info">
            <p>
              If you have questions about these Terms of Service or need to report a violation, 
              please contact us using the information below:
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <h3>📧 Legal Team</h3>
                <p><a href="mailto:legal@globalplay.games">legal@globalplay.games</a></p>
              </div>
              <div className="contact-method">
                <h3>🛡️ Terms Violations</h3>
                <p><a href="mailto:violations@globalplay.games">violations@globalplay.games</a></p>
              </div>
              <div className="contact-method">
                <h3>📮 Mailing Address</h3>
                <p>
                  GlobalPlay Legal Department<br />
                  123 Gaming Street<br />
                  Tech City, TC 12345<br />
                  United States
                </p>
              </div>
              <div className="contact-method">
                <h3>⏰ Response Time</h3>
                <p>We aim to respond to legal inquiries within 5-10 business days.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="terms-navigation">
        <Link href="/privacy" className="privacy-link">
          ← Privacy Policy
        </Link>
        <Link href="/" className="back-home">
          Back to Home →
        </Link>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Terms of Service - GlobalPlay',
  description: 'Read GlobalPlay\'s Terms of Service to understand your rights and responsibilities when using our free online games platform.',
}; 