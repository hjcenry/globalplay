import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Game Categories</h3>
          <ul>
            <li><Link href="/categories">All Categories</Link></li>
            <li><Link href="/categories/action">Action Games</Link></li>
            <li><Link href="/categories/puzzle">Puzzle Games</Link></li>
            <li><Link href="/categories/strategy">Strategy Games</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Browse</h3>
          <ul>
            <li><Link href="/all-games">All Games</Link></li>
            <li><Link href="/trending">Popular Games</Link></li>
            <li><Link href="/new-games">New Games</Link></li>
            <li><Link href="/guides">Guides</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Help & Support</h3>
          <ul>
            <li><Link href="/help">Game Help</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/contact#report">Report Issue</Link></li>
            <li><Link href="/terms#third-party-content">Brand Disclaimer</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>About & Legal</h3>
          <ul>
            <li><Link href="/about">About GlobalPlay</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms & Disclaimer</Link></li>
            <li><Link href="/sitemap">Sitemap</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {year} GlobalPlay.games. Independent browser game directory.
          Game names, logos, and trademarks belong to their respective owners; no endorsement is implied.
        </p>
      </div>
    </footer>
  );
} 
