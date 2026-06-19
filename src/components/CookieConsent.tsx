'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const CONSENT_KEY = 'globalplay_cookie_consent';

export default function CookieConsent() {
  const [choice, setChoice] = useState<string | null>(null);

  useEffect(() => {
    setChoice(window.localStorage.getItem(CONSENT_KEY));
  }, []);

  const saveChoice = (value: 'accepted' | 'rejected') => {
    window.localStorage.setItem(CONSENT_KEY, value);
    setChoice(value);
    window.dispatchEvent(new Event('globalplay-cookie-consent'));
  };

  if (choice) {
    return null;
  }

  return (
    <div className="cookie-consent" role="dialog" aria-live="polite" aria-label="Cookie notice">
      <div className="cookie-consent-copy">
        <strong>Cookie choices</strong>
        <p>
          GlobalPlay uses essential browser storage for site functions. Optional analytics cookies help us understand
          page performance and game launch issues. Advertising cookies are explained in our privacy policy and must be
          managed through a compliant consent flow before ads are served where required.
        </p>
        <Link href="/privacy-policy">Read the Privacy Policy</Link>
      </div>
      <div className="cookie-consent-actions">
        <button type="button" className="cookie-secondary" onClick={() => saveChoice('rejected')}>
          Reject optional
        </button>
        <button type="button" className="cookie-primary" onClick={() => saveChoice('accepted')}>
          Accept analytics
        </button>
      </div>
    </div>
  );
}
