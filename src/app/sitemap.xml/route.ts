import { getIndexableCategories, games } from '@/data/games';
import { isIndexableGame } from '@/lib/gamePolicy';
import { SITE_URL } from '@/lib/seo';

export async function GET() {
  const baseUrl = SITE_URL;
  
  // 静态页面
  const staticPages = [
    '',
    '/all-games',
    '/categories',
    '/trending',
    '/new-games',
    '/help',
    '/guides',
    '/about',
    '/contact',
    '/sitemap',
    '/privacy-policy',
    '/terms',
  ];

  // 分类页面
  const categoryPages = getIndexableCategories().map(category => `/categories/${category.id}`);

  // 游戏页面
  const gamePages = games
    .filter(isIndexableGame)
    .map(game => `/games/${game.category}/${game.slug}`);

  // 合并所有页面
  const allPages = [...staticPages, ...categoryPages, ...gamePages];

  // 生成XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page === '' ? 'daily' : page.includes('/games/') ? 'weekly' : 'monthly'}</changefreq>
    <priority>${page === '' ? '1.0' : page.includes('/games/') ? '0.8' : '0.6'}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400', // 缓存24小时
    },
  });
} 
