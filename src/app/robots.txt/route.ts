export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://globalplay.games/sitemap.xml

# 禁止爬取一些不必要的目录
Disallow: /api/
Disallow: /_next/
Disallow: /.next/

# 允许爬取游戏和分类页面
Allow: /games/
Allow: /categories/
Allow: /trending
Allow: /new-games
Allow: /search

# 爬取延迟 (可选)
Crawl-delay: 1
`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400',
    },
  });
} 