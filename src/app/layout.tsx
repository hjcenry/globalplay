import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import MicrosoftClarity from '@/components/MicrosoftClarity';
import AnalyticsProvider from '@/components/AnalyticsProvider';
import CookieConsent from '@/components/CookieConsent';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://globalplay.games'),
  title: 'GlobalPlay Games - Free Browser Game Directory',
  description:
    'Browse free browser games across action, puzzle, strategy, racing, shooting, and adventure categories. No required download.',
  keywords: 'free browser games, online games, HTML5 games, action games, puzzle games, strategy games',
  authors: [{ name: 'GlobalPlay Games' }],
  robots: 'index, follow',
  openGraph: {
    title: 'GlobalPlay Games - Free Browser Game Directory',
    description: 'Browse free browser games by category. No required download.',
    url: 'https://globalplay.games',
    type: 'website',
    images: [
      {
        url: 'https://globalplay.games/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GlobalPlay Games Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GlobalPlay Games - Free Browser Games',
    description: 'Browse free browser games by category. No required download.',
    images: [
      {
        url: 'https://globalplay.games/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GlobalPlay Games Platform',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AnalyticsProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <CookieConsent />
        </AnalyticsProvider>
        <GoogleAnalytics />
        <MicrosoftClarity />
      </body>
    </html>
  );
} 
