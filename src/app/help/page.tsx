import Link from 'next/link';
import './help.css';

export default function HelpPage() {
  return (
    <div className="help-container">
      <div className="help-header">
        <h1>Help Center — GlobalPlay</h1>
        <p className="help-subtitle">
          Welcome to <strong>GlobalPlay</strong>, one place for discovering, playing and sharing thousands of free web games.
          If you've ever used Steam to browse a catalog, Miniclip to jump straight into a quick round, or Twitch to follow your favorite creators, you'll feel right at home. This page collects the most common questions and tips so you can get from "just landed" to "just one more level!" in minutes.
        </p>
      </div>

      <div className="help-content">
        <section className="help-section">
          <h2>1. Quick-Start Checklist ✔️</h2>
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
                  <td><strong>Open a game.</strong> Click any thumbnail on the home page or in a category list.</td>
                  <td>We use instant-load iframes, so most titles start in 1-2 seconds—no installer needed.</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td><strong>Allow cookies / local storage</strong> when prompted.</td>
                  <td>Your progress, highscores and control settings are saved on your device—similar to Roblox's "auto-save" or Candy Crush's level memory.</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td><strong>Go full screen</strong> (⤢ icon).</td>
                  <td>Maximizes performance and hides distractions.</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td><strong>Create an optional account</strong>.</td>
                  <td>Sync your favorites across devices, earn badges and appear on leaderboards.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="help-section">
          <h2>2. Finding Games 🔍</h2>
          
          <div className="subsection">
            <h3>Browse</h3>
            <ul>
              <li><strong>Trending</strong> – what's hot this week, ranked by plays and likes (Twitch-style "Just Chatting" list, but for games).</li>
              <li><strong>Genres</strong> – action, puzzle, idle, multiplayer, retro, etc.</li>
              <li><strong>Tags</strong> – "platformer," "turn-based," "roguelike," "2-player couch," and more.</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>Search</h3>
            <p>Type the game title, tag, or developer into the search bar. Results update in real time—no page reloads (inspired by Steam's instant filtering).</p>
          </div>

          <div className="subsection">
            <h3>Collections</h3>
            <p>Curated packs such as "Five-Minute Breaks," "Keyboard-Only," or "Built With Godot." Follow a collection to receive email or push alerts when a new title drops.</p>
          </div>
        </section>

        <section className="help-section">
          <h2>3. Playing & Controls 🎮</h2>
          <div className="controls-table">
            <table>
              <thead>
                <tr>
                  <th>Device</th>
                  <th>Default controls</th>
                  <th>Tips</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Desktop keyboard</td>
                  <td>Arrow/WASD + Space/Enter</td>
                  <td>Tap <strong>?</strong> in-game for a full key map.</td>
                </tr>
                <tr>
                  <td>Mouse / trackpad</td>
                  <td>Point-and-click</td>
                  <td>Hold <strong>[F]</strong> for full-screen in most games.</td>
                </tr>
                <tr>
                  <td>Mobile touch</td>
                  <td>On-screen overlay</td>
                  <td>Rotate to landscape for smoother play.</td>
                </tr>
                <tr>
                  <td>Gamepad</td>
                  <td>Most USB & Bluetooth pads auto-map</td>
                  <td>Remap in <strong>Settings → Controller</strong>.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="performance-note">
            <p><strong>Performance Note:</strong> We stream the game assets from the original publisher's CDN whenever possible (like Epic's launcher). If a game lags, toggle "Low-Spec Mode" in the ⚙️ menu to drop visuals but keep 60 fps.</p>
          </div>
        </section>

        <section className="help-section">
          <h2>4. Saving Progress & Cloud Sync ☁️</h2>
          <ul>
            <li><strong>Guest mode:</strong> Your progress is saved in the browser's localStorage—clear cookies = clear save.</li>
            <li><strong>Account mode (free):</strong> Connect an email or Google/Facebook. We hash your data client-side and sync only encrypted snapshots.</li>
            <li><strong>Coming soon:</strong> Cross-device resume, similar to Roblox's "recently played."</li>
          </ul>
        </section>

        <section className="help-section">
          <h2>5. Social & Community 🤝</h2>
          <div className="social-table">
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>How it works</th>
                  <th>Privacy controls</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Leaderboards</td>
                  <td>Daily / weekly / all-time highscores per game.</td>
                  <td>Opt-out in <strong>Profile → Privacy</strong>.</td>
                </tr>
                <tr>
                  <td>Reactions</td>
                  <td>"🔥," "😂," "💡," and text comments.</td>
                  <td>Hidden from guests by default; filter strong language automatically.</td>
                </tr>
                <tr>
                  <td>Clips</td>
                  <td>Press <strong>[C]</strong> (desktop) or "Clip" (mobile) to capture the last 15 s and share a link—think Twitch clip, but no livestream needed.</td>
                  <td>Clips are public, but you can delete any you own.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="help-section">
          <h2>6. Parental Controls 👨‍👩‍👧‍👦</h2>
          <ul>
            <li><strong>Age gates</strong> on M-rated or user-flagged violent titles.</li>
            <li><strong>Play-time limiter:</strong> Turn on daily or weekly caps per account.</li>
            <li><strong>Content filter:</strong> Hide chat and user-generated comments site-wide.</li>
          </ul>
          <p>Parents can lock settings behind a 4-digit PIN (patterned after Roblox's parental PIN).</p>
        </section>

        <section className="help-section">
          <h2>7. Safety & Reporting 🛡️</h2>
          <ul>
            <li>Every game is virus-scanned on upload and sandbox-tested.</li>
            <li>Ads, if any, are limited to static banner placements; no pop-ups, no auto audio.</li>
            <li>See something bad? Click the 🚩 flag under any game, comment or clip. Moderators review within 24 h (like Steam's community flag queue).</li>
          </ul>
        </section>

        <section className="help-section">
          <h2>8. Troubleshooting 🛠️</h2>
          <div className="troubleshooting-table">
            <table>
              <thead>
                <tr>
                  <th>Problem</th>
                  <th>Quick fix</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Game doesn't load</td>
                  <td>Disable ad-block for this page or try a different browser.</td>
                </tr>
                <tr>
                  <td>Keyboard not recognized</td>
                  <td>Click once inside the game iframe; browsers sometimes capture focus.</td>
                </tr>
                <tr>
                  <td>Progress lost</td>
                  <td>Make sure third-party cookies aren't blocked, or sign in for cloud sync.</td>
                </tr>
                <tr>
                  <td>Lag spikes</td>
                  <td>Turn off other browser tabs, enable "Low-Spec Mode," or reduce resolution in-game.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>More help? See <strong>Settings → Diagnose</strong> to run an automatic test and generate a shareable log.</p>
        </section>

        <section className="help-section">
          <h2>9. Frequently Asked Questions (FAQ) ❓</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h4>Q: Are all games really free?</h4>
              <p>A: Yes. Some titles may offer optional cosmetic purchases handled by the original developer; GlobalPlay never charges you directly.</p>
            </div>
            <div className="faq-item">
              <h4>Q: Can I upload my own game?</h4>
              <p>A: Absolutely—check the <strong>Developer Portal</strong> link in the footer. We support HTML5, WebGL, Construct, Unity Web export and Godot.</p>
            </div>
            <div className="faq-item">
              <h4>Q: Do I need to install anything?</h4>
              <p>A: No downloads, no plugins. Everything runs in the browser, just like Miniclip's one-click model.</p>
            </div>
            <div className="faq-item">
              <h4>Q: Is there a desktop app?</h4>
              <p>A: A lightweight PWA (Progressive Web App) is in beta—install it from your browser's "Add to Home Screen" prompt for offline caching and desktop shortcuts.</p>
            </div>
          </div>
        </section>

        <section className="help-section">
          <h2>10. Contact & Feedback 💬</h2>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:support@globalplay.games">support@globalplay.games</a></li>
            <li><strong>Discord:</strong> join our community &lt;discord.gg/globalplay&gt;</li>
            <li><strong>X / Twitter:</strong> @GlobalPlay</li>
            <li><strong>Office hours (UTC):</strong> 09:00 – 18:00 Monday – Friday (excluding holidays)</li>
          </ul>
          <p>We read every suggestion—many of GlobalPlay's features (badges, clips, dark mode) came from player feedback!</p>
        </section>

        <section className="help-section final-section">
          <h2>🚀 See you in-game!</h2>
          <p>Enjoy exploring, competing and creating. If you spot a bug, hit <strong>Feedback</strong> in the sidebar; if you beat the global highscore, brag on social and tag us—your clip might get featured on the front page!</p>
          <p className="happy-gaming">Happy gaming! 🕹️</p>
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
  description: 'Get help with GlobalPlay - your free online games platform. Find answers to common questions, troubleshooting tips, and learn how to get the most out of your gaming experience.',
}; 