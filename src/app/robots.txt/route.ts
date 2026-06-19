export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://globalplay.games/sitemap.xml

# Keep non-page application endpoints out of search results.
Disallow: /api/

# Allow page and asset crawling needed for rendering and ad review.
Allow: /games/
Allow: /categories/
Allow: /trending
Allow: /new-games
Allow: /search
Allow: /_next/

User-agent: Mediapartners-Google
Allow: /
`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400',
    },
  });
} 
