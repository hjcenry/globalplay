import Link from 'next/link';
import './about.css';

export default function AboutPage() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About GlobalPlay</h1>
        <p className="about-subtitle">
          Connecting gamers worldwide through the power of free, instant-play web games
        </p>
      </div>

      <div className="about-content">
        <section className="about-section hero-section">
          <div className="hero-content">
            <h2>🎮 Our Story</h2>
            <p>
              GlobalPlay was born from a simple belief: great games should be accessible to everyone, everywhere, instantly. 
              In a world where gaming often requires expensive hardware, lengthy downloads, or subscription fees, we saw an opportunity 
              to democratize gaming through the web browser.
            </p>
            <p>
              Founded in 2024, we've built a platform that brings together thousands of high-quality web games from talented 
              developers around the globe. Whether you're looking for a quick 5-minute break or an immersive gaming session, 
              GlobalPlay delivers instant entertainment without barriers.
            </p>
          </div>
        </section>

        <section className="about-section mission-section">
          <h2>🚀 Our Mission</h2>
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-icon">🌍</div>
              <h3>Global Accessibility</h3>
              <p>Make gaming accessible to anyone with an internet connection, regardless of device, location, or economic status.</p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">⚡</div>
              <h3>Instant Play</h3>
              <p>Eliminate barriers between players and games. No downloads, no installations, no waiting—just click and play.</p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">🎯</div>
              <h3>Quality Curation</h3>
              <p>Discover amazing games through our carefully curated collection, featuring both indie gems and popular titles.</p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">🤝</div>
              <h3>Developer Support</h3>
              <p>Empower game developers by providing a platform to showcase their creations to a global audience.</p>
            </div>
          </div>
        </section>

        <section className="about-section values-section">
          <h2>💎 Our Values</h2>
          <div className="values-list">
            <div className="value-item">
              <h3>🔓 Open & Free</h3>
              <p>We believe gaming should be free and open to all. No paywalls, no premium tiers—just pure gaming joy.</p>
            </div>
            <div className="value-item">
              <h3>🛡️ Safe & Secure</h3>
              <p>Every game is thoroughly tested and verified. We maintain a safe environment for players of all ages.</p>
            </div>
            <div className="value-item">
              <h3>🌟 Innovation First</h3>
              <p>We constantly push the boundaries of web gaming technology to deliver the best possible experience.</p>
            </div>
            <div className="value-item">
              <h3>🎨 Diversity & Inclusion</h3>
              <p>We celebrate games from all cultures and creators, fostering a diverse and inclusive gaming community.</p>
            </div>
          </div>
        </section>

        <section className="about-section stats-section">
          <h2>📊 By the Numbers</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">10,000+</div>
              <div className="stat-label">Games Available</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">1M+</div>
              <div className="stat-label">Monthly Players</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Game Categories</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Uptime</div>
            </div>
          </div>
        </section>

        <section className="about-section team-section">
          <h2>👥 Meet Our Team</h2>
          <p className="team-intro">
            GlobalPlay is powered by a passionate team of gamers, developers, and dreamers from around the world.
          </p>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">🎮</div>
              <h3>Alex Chen</h3>
              <p className="member-role">Founder & CEO</p>
              <p className="member-bio">Former game developer with 10+ years in the industry. Passionate about making gaming accessible to everyone.</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">💻</div>
              <h3>Sarah Johnson</h3>
              <p className="member-role">CTO</p>
              <p className="member-bio">Full-stack engineer specializing in web technologies and game platform architecture.</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">🎨</div>
              <h3>Marcus Rodriguez</h3>
              <p className="member-role">Head of Design</p>
              <p className="member-bio">UX/UI designer focused on creating intuitive and beautiful gaming experiences.</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">🌟</div>
              <h3>Emma Thompson</h3>
              <p className="member-role">Community Manager</p>
              <p className="member-bio">Building and nurturing our global gaming community, one player at a time.</p>
            </div>
          </div>
        </section>

        <section className="about-section technology-section">
          <h2>⚙️ Our Technology</h2>
          <div className="tech-content">
            <p>
              GlobalPlay is built on cutting-edge web technologies to deliver the fastest, most reliable gaming experience possible:
            </p>
            <div className="tech-features">
              <div className="tech-feature">
                <h3>🚀 Lightning-Fast CDN</h3>
                <p>Global content delivery network ensures games load instantly, no matter where you are.</p>
              </div>
              <div className="tech-feature">
                <h3>🔧 Modern Web Standards</h3>
                <p>Built with HTML5, WebGL, and WebAssembly for maximum compatibility and performance.</p>
              </div>
              <div className="tech-feature">
                <h3>📱 Cross-Platform</h3>
                <p>Seamless experience across desktop, tablet, and mobile devices.</p>
              </div>
              <div className="tech-feature">
                <h3>🛡️ Advanced Security</h3>
                <p>Enterprise-grade security measures protect both players and developers.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section partners-section">
          <h2>🤝 Our Partners</h2>
          <p>
            We work with amazing game developers, studios, and technology partners to bring you the best gaming experience:
          </p>
          <div className="partners-grid">
            <div className="partner-category">
              <h3>🎮 Game Studios</h3>
              <ul>
                <li>Indie developers worldwide</li>
                <li>Educational game creators</li>
                <li>HTML5 game specialists</li>
                <li>Unity WebGL developers</li>
              </ul>
            </div>
            <div className="partner-category">
              <h3>🔧 Technology Partners</h3>
              <ul>
                <li>Cloud infrastructure providers</li>
                <li>CDN networks</li>
                <li>Analytics platforms</li>
                <li>Security services</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="about-section future-section">
          <h2>🔮 The Future</h2>
          <div className="future-content">
            <p>
              We're just getting started! Here's what's coming next for GlobalPlay:
            </p>
            <div className="future-features">
              <div className="future-item">
                <span className="future-icon">🎯</span>
                <div>
                  <h3>AI-Powered Recommendations</h3>
                  <p>Personalized game suggestions based on your playing history and preferences.</p>
                </div>
              </div>
              <div className="future-item">
                <span className="future-icon">🏆</span>
                <div>
                  <h3>Global Tournaments</h3>
                  <p>Competitive gaming events and leaderboards across all our games.</p>
                </div>
              </div>
              <div className="future-item">
                <span className="future-icon">🎮</span>
                <div>
                  <h3>VR/AR Integration</h3>
                  <p>Bringing immersive gaming experiences to the web browser.</p>
                </div>
              </div>
              <div className="future-item">
                <span className="future-icon">🌐</span>
                <div>
                  <h3>Blockchain Gaming</h3>
                  <p>Exploring NFT integration and play-to-earn mechanics.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section contact-section">
          <h2>📞 Get in Touch</h2>
          <div className="contact-content">
            <p>
              Want to learn more about GlobalPlay? Have a game you'd like to feature? 
              We'd love to hear from you!
            </p>
            <div className="contact-methods">
              <div className="contact-method">
                <h3>📧 General Inquiries</h3>
                <p><a href="mailto:hello@globalplay.games">hello@globalplay.games</a></p>
              </div>
              <div className="contact-method">
                <h3>🎮 Game Developers</h3>
                <p><a href="mailto:developers@globalplay.games">developers@globalplay.games</a></p>
              </div>
              <div className="contact-method">
                <h3>📰 Press & Media</h3>
                <p><a href="mailto:press@globalplay.games">press@globalplay.games</a></p>
              </div>
              <div className="contact-method">
                <h3>🤝 Partnerships</h3>
                <p><a href="mailto:partnerships@globalplay.games">partnerships@globalplay.games</a></p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="about-navigation">
        <Link href="/" className="back-home">
          ← Back to Home
        </Link>
        <Link href="/help" className="help-link">
          Need Help? →
        </Link>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'About GlobalPlay - Free Online Games Platform',
  description: 'Learn about GlobalPlay\'s mission to make gaming accessible to everyone through free, instant-play web games. Discover our story, values, and vision for the future of gaming.',
}; 