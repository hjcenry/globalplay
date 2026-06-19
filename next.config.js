/** @type {import('next').NextConfig} */
const gameFrameSources = [
  "'self'",
  'https://cloud.onlinegames.io',
  'https://*.onlinegames.io',
  'https://www.crazygames.com',
  'https://*.crazygames.com',
  'https://googleads.g.doubleclick.net',
  'https://tpc.googlesyndication.com',
  'https://pagead2.googlesyndication.com',
];

const gameScriptSources = [
  "'self'",
  "'unsafe-inline'",
  "'unsafe-eval'",
  'https://www.crazygames.com',
  'https://*.crazygames.com',
  'https://www.googletagmanager.com',
  'https://www.google-analytics.com',
  'https://www.clarity.ms',
  'https://scripts.clarity.ms',
  'https://pagead2.googlesyndication.com',
  'https://fundingchoicesmessages.google.com',
];

const nextConfig = {
  images: {
    domains: ['cloud.onlinegames.io', 'globalplay.games', 'www.crazygames.com'],
  },
  async headers() {
    return [
      {
        source: '/games/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: process.env.NODE_ENV === 'development' 
              ? "frame-src *; frame-ancestors *; script-src * 'unsafe-inline' 'unsafe-eval'; style-src * 'unsafe-inline'; connect-src *; img-src * data: blob:;"
              : `frame-src ${gameFrameSources.join(' ')}; frame-ancestors 'self'; script-src ${gameScriptSources.join(' ')}; style-src 'self' 'unsafe-inline';`
          }
        ]
      },
      {
        source: '/((?!games).*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig 
