'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

const GA_TRACKING_ID = 'G-6TCWKWHL6Q';
const CONSENT_KEY = 'globalplay_cookie_consent';

export default function GoogleAnalytics() {
  const [canLoadAnalytics, setCanLoadAnalytics] = useState(false);

  useEffect(() => {
    const syncConsent = () => {
      setCanLoadAnalytics(window.localStorage.getItem(CONSENT_KEY) === 'accepted');
    };

    syncConsent();
    window.addEventListener('globalplay-cookie-consent', syncConsent);
    return () => window.removeEventListener('globalplay-cookie-consent', syncConsent);
  }, []);

  // 只在生产环境中加载 Google Analytics
  if (process.env.NODE_ENV !== 'production' || !canLoadAnalytics) {
    return null;
  }

  return (
    <>
      {/* Google Analytics gtag script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `,
        }}
      />
    </>
  );
}
