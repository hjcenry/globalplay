import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'GlobalPlay Games - Free Online Games Platform',
  description: 'Play thousands of free online games including action, puzzle, strategy, racing and more. No download required!',
  keywords: 'free online games, browser games, HTML5 games, action games, puzzle games, strategy games',
  authors: [{ name: 'GlobalPlay Games' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'GlobalPlay Games - Free Online Games Platform',
    description: 'Play thousands of free online games. No download required!',
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
    title: 'GlobalPlay Games - Free Online Games',
    description: 'Play thousands of free online games. No download required!',
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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
} 