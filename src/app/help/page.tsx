import Link from 'next/link';
import './help.css';

export default function HelpPage() {
  return (
    <div className="help-container">
      <div className="help-header">
        <h1>Help Center - GlobalPlay</h1>
        <p className="help-subtitle">
          Practical help for browsing the catalog, launching embedded browser games, handling controls, and reporting
          broken pages.
        </p>
      </div>

      <div className="help-content">
        <section className="help-section">
          <h2>1. Start Playing</h2>
          <div className="checklist-table">
            <table>
              <thead>
                <tr>
                  <th>Step</th>
                  <th>What to do</th>
                  <th>Why it matters</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Open a category, popular list, new games page, or search result.</td>
                  <td>These pages group playable listings and help you compare similar games.</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Read the game page before launching.</td>
                  <td>Each listing shows controls, category, source context, and related games.</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Click inside the game frame after it loads.</td>
                  <td>Browsers often require iframe focus before keyboard controls work.</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Use fullscreen only when the embedded provider supports it.</td>
                  <td>Fullscreen availability can vary by game provider and browser.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="help-section">
          <h2>2. Finding Games</h2>
          <div className="subsection">
            <h3>Browse by category</h3>
            <p>
              Use <Link href="/categories">Game Categories</Link> to choose action, puzzle, strategy, racing,
              shooting, or adventure games. Category pages include notes about pacing and controls.
            </p>
          </div>
          <div className="subsection">
            <h3>Use search</h3>
            <p>
              Search works best with a game title, genre, or simple keyword. If you do not find a match, browse the
              closest category and use related games from individual game pages.
            </p>
          </div>
          <div className="subsection">
            <h3>Popular and recent lists</h3>
            <p>
              <Link href="/trending">Popular Games</Link> uses rating and play-count signals from the catalog data.
              <Link href="/new-games"> New Games</Link> shows titles marked as recent additions.
            </p>
          </div>
        </section>

        <section className="help-section">
          <h2>3. Controls and Devices</h2>
          <div className="controls-table">
            <table>
              <thead>
                <tr>
                  <th>Control type</th>
                  <th>What to check</th>
                  <th>Tip</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Keyboard</td>
                  <td>Look for arrow, WASD, space, enter, or game-specific prompts.</td>
                  <td>Click the iframe once before pressing keys.</td>
                </tr>
                <tr>
                  <td>Mouse</td>
                  <td>Use the cursor for aiming, drawing, dragging, or menu choices.</td>
                  <td>Disable browser zoom if precise clicking feels offset.</td>
                </tr>
                <tr>
                  <td>Touch</td>
                  <td>Some games expose on-screen controls on mobile.</td>
                  <td>Rotate to landscape when the frame is too narrow.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="help-section">
          <h2>4. Troubleshooting</h2>
          <div className="troubleshooting-table">
            <table>
              <thead>
                <tr>
                  <th>Problem</th>
                  <th>What to try</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Game does not load</td>
                  <td>Refresh the page, try another browser, or check whether an extension blocks third-party frames.</td>
                </tr>
                <tr>
                  <td>Keyboard does not respond</td>
                  <td>Click inside the game frame, then try the controls listed on the game page.</td>
                </tr>
                <tr>
                  <td>Fullscreen is unavailable</td>
                  <td>Use the game provider&apos;s in-frame fullscreen button if available, or enlarge the browser window.</td>
                </tr>
                <tr>
                  <td>Game was removed or changed</td>
                  <td>Report the URL so we can review the listing and update or remove it.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="help-section">
          <h2>5. Privacy, Cookies, and Ads</h2>
          <ul>
            <li>GlobalPlay does not require an account to browse or launch games.</li>
            <li>Optional analytics load only after you accept analytics cookies.</li>
            <li>Embedded third-party games may process technical data needed to deliver the game.</li>
            <li>Advertising cookies and AdSense disclosures are explained in the privacy policy.</li>
          </ul>
          <p>
            Read the <Link href="/privacy-policy">Privacy Policy</Link> and{' '}
            <Link href="/terms">Terms & Disclaimer</Link> for details.
          </p>
        </section>

        <section className="help-section">
          <h2>6. Reporting Problems</h2>
          <p>
            Use the contact page for broken games, incorrect descriptions, privacy questions, or rights-holder
            concerns. Include the page URL and a short description of what should be reviewed.
          </p>
          <p>
            <Link href="/contact" className="inline-link">Contact GlobalPlay</Link>
          </p>
        </section>
      </div>

      <div className="help-navigation">
        <Link href="/" className="back-home">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Help Center - GlobalPlay',
  description:
    'Help for using GlobalPlay.games, including browsing, controls, embedded game troubleshooting, privacy, cookies, ads, and reporting issues.',
};
