import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Game Categories</h3>
          <ul>
            <li><Link href="/categories/action">Action Games</Link></li>
            <li><Link href="/categories/puzzle">Puzzle Games</Link></li>
            <li><Link href="/categories/strategy">Strategy Games</Link></li>
            <li><Link href="/categories/racing">Racing Games</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Popular Tags</h3>
          <ul>
            <li><Link href="/">Multiplayer</Link></li>
            <li><Link href="/">HTML5 Games</Link></li>
            <li><Link href="/">Mobile Games</Link></li>
            <li><Link href="/">3D Games</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Help & Support</h3>
          <ul>
            <li><Link href="/help">Game Help</Link></li>
            <li><Link href="/">Contact Us</Link></li>
            <li><Link href="/">Feedback</Link></li>
            <li><Link href="/">Report Issue</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>About Us</h3>
          <ul>
            <li><Link href="/about">About GlobalPlay</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
            <li><Link href="/sitemap">Sitemap</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 GlobalPlay.games - Free Online Games Platform | Play thousands of games for free!</p>
      </div>
    </footer>
  );
} 