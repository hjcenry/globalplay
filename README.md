# GlobalPlay Games - 游戏集合网站

这是一个使用 Next.js 14 构建的现代化游戏集合网站，包含完整的 SEO 优化和响应式设计。

## 🚀 功能特性

- ✅ **现代化设计**: 基于原型图的精美 UI 设计
- ✅ **Next.js 14**: 使用最新的 App Router 和 TypeScript
- ✅ **SEO 优化**: 完整的 meta 标签、结构化数据和 sitemap
- ✅ **响应式布局**: 完美适配 PC 和移动端
- ✅ **游戏分类**: 支持按分类浏览游戏
- ✅ **搜索功能**: 智能搜索游戏标题、描述和标签
- ✅ **动态路由**: 每个游戏都有独立页面，使用 `/games/{category}/{slug}` URL 结构
- ✅ **面包屑导航**: 清晰的页面层级导航
- ✅ **加载优化**: 游戏 iframe 智能加载和错误处理

## 📁 项目结构

```
src/
├── app/                           # Next.js App Router 页面
│   ├── layout.tsx                # 根布局（包含头部和底部）
│   ├── page.tsx                  # 首页
│   ├── globals.css               # 全局样式
│   ├── games/[category]/[slug]/  # 单个游戏页面 (新URL结构)
│   ├── categories/[id]/          # 游戏分类页面
│   └── search/                   # 搜索结果页面
├── components/                   # 可复用组件
│   ├── Header.tsx               # 网站头部导航
│   ├── Footer.tsx               # 网站底部
│   └── GameCard.tsx             # 游戏卡片组件
└── data/
    └── games.ts                 # 游戏数据和工具函数
```

## 🎮 页面结构

### 首页 (/)
- Hero 区域：网站介绍和 CTA 按钮
- 精选游戏：展示热门游戏
- 游戏分类：按类型浏览游戏
- 趋势游戏：当前热门游戏

### 游戏页面 (/games/{category}/{slug})
- **新URL结构**: 使用分类和slug的语义化URL
- 游戏 iframe 嵌入（支持 Monster Survivors 等游戏）
- 游戏详细信息和统计数据
- 游戏说明和操作指南
- 相关游戏推荐
- 完整的 SEO 优化

**示例URL**:
- `/games/action/monster-survivors` - Monster Survivors 游戏
- `/games/strategy/kingdom-defense-war` - 王国保卫战
- `/games/puzzle/2048-evolution` - 2048进化版

### 分类页面 (/categories/{id})
- 按分类展示所有游戏
- 其他分类导航
- 响应式网格布局

### 搜索页面 (/search)
- 实时搜索结果
- 搜索统计信息
- 无结果时的友好提示

## 🛠️ 安装和运行

### 前置要求
- Node.js 18+ 
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 开发模式运行

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

```bash
npm run build
npm start
```

## 🎯 SEO 优化功能

- **动态 Meta 标签**: 每个页面都有唯一的 title、description 和 keywords
- **语义化URL**: 使用 `/games/{category}/{slug}` 结构，更利于SEO
- **Open Graph**: 完整的社交媒体分享优化
- **结构化数据**: 游戏和网站的 JSON-LD 结构化数据
- **Canonical URLs**: 防止重复内容问题
- **面包屑导航**: 帮助搜索引擎理解页面层级
- **语义化 HTML**: 正确使用 H1、H2 标签和语义元素

## 🎮 游戏集成

### Monster Survivors
网站已完美集成 Monster Survivors 游戏：
- URL: `/games/action/monster-survivors`
- 游戏地址: `https://cloud.onlinegames.io/games/2025/unity/monster-survivors/index-og.html`
- 智能加载机制
- 错误处理和备用方案
- 全屏支持

### 添加新游戏
在 `src/data/games.ts` 中添加新游戏：

```typescript
{
  id: 'unique-game-id',
  slug: 'game-url-slug',  // 用于URL的友好标识符
  title: 'Game Title',
  description: 'Detailed game description...',
  shortDescription: 'Short description for cards',
  category: 'action', // action, puzzle, strategy, racing, shooting, adventure
  thumbnail: '/images/game-thumbnail.jpg',
  gameUrl: 'https://example.com/game-url',
  rating: 4.8,
  playCount: 150000,
  tags: ['tag1', 'tag2'],
  controls: 'Keyboard & Mouse',
  featured: true,
  trending: true,
  isNew: false,
}
```

**URL生成规则**:
- 游戏URL: `/games/{category}/{slug}`
- 确保slug在同一分类中唯一
- 使用连字符分隔单词，如 `monster-survivors`

## 🎨 样式系统

- **纯 CSS**: 使用原生 CSS，无需额外的 CSS 框架
- **CSS Grid**: 现代化的网格布局系统
- **CSS Variables**: 方便的主题色彩管理
- **响应式设计**: 移动优先的设计理念
- **动画效果**: 流畅的悬停和过渡动画

## 📱 响应式设计

- **桌面端**: 1200px+ 最佳体验
- **平板端**: 768px-1199px 优化布局
- **移动端**: 320px-767px 完美适配

## 🔧 技术栈

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS (原生)
- **SEO**: Next.js built-in SEO optimization
- **Icons**: Emoji icons (无需额外字体文件)

## 📈 性能优化

- **静态生成**: 所有页面支持 SSG
- **图片优化**: Next.js Image 组件
- **代码分割**: 自动的路由级代码分割
- **懒加载**: 游戏 iframe 延迟加载
- **压缩优化**: 自动的 CSS 和 JS 压缩

## 🚀 部署建议

### Vercel (推荐)
```bash
npm run build
```
推送到 GitHub，连接 Vercel 自动部署。

### 其他平台
- Netlify
- AWS Amplify  
- 自有服务器

## 📞 技术支持

如有问题，请检查：
1. Node.js 版本是否 18+
2. 依赖是否正确安装
3. 端口 3000 是否被占用

## 🎯 未来功能规划

- [ ] 用户评分系统
- [ ] 游戏收藏功能
- [ ] 多语言支持
- [ ] 游戏统计分析
- [ ] 社交分享功能
- [ ] PWA 支持

---

**注意**: 确保所有游戏 URL 都是 HTTPS，以保证在现代浏览器中正常运行。 