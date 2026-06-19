'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

const CLARITY_PROJECT_ID = 'rt5cu0qihv';
const CONSENT_KEY = 'globalplay_cookie_consent';

export default function MicrosoftClarity() {
  const [canLoadAnalytics, setCanLoadAnalytics] = useState(false);

  useEffect(() => {
    const syncConsent = () => {
      setCanLoadAnalytics(window.localStorage.getItem(CONSENT_KEY) === 'accepted');
    };

    syncConsent();
    window.addEventListener('globalplay-cookie-consent', syncConsent);
    return () => window.removeEventListener('globalplay-cookie-consent', syncConsent);
  }, []);

  // 只在生产环境中加载 Microsoft Clarity
  if (process.env.NODE_ENV !== 'production' || !canLoadAnalytics) {
    return null;
  }

  return (
    <>
      {/* Microsoft Clarity Analytics */}
      <Script
        id="microsoft-clarity"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
          `,
        }}
      />
    </>
  );
} 
