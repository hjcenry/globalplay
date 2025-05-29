/** @type {import('next').NextConfig} */
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
              : "frame-src 'self' https://cloud.onlinegames.io https://*.onlinegames.io https://www.crazygames.com https://*.crazygames.com; frame-ancestors 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.crazygames.com https://*.crazygames.com; style-src 'self' 'unsafe-inline';"
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