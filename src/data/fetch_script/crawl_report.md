# CrazyGames 热门游戏抓取报告

## 抓取概述
- **目标网站**: https://www.crazygames.com/hot
- **抓取时间**: 2025年5月29日
- **抓取策略**: 使用Selenium获取动态渲染内容，检查详情页Embed标签
- **成功抓取**: 29个游戏

## 技术实现

### 抓取流程
1. **主页抓取**: 使用Selenium获取热门页面的所有游戏卡片
2. **Hot标签过滤**: 只抓取带有`<svg><use href="#hot-label"></use></svg>`的游戏
3. **Embed验证**: 进入每个游戏详情页，检查是否存在`<span>Embed</span>`标签
4. **iframe生成**: 对有Embed标签的游戏，生成`https://www.crazygames.com/embed/{slug}`链接
5. **图片下载**: 下载游戏缩略图到本地`public/images/games/crazygames/`目录
6. **数据导出**: 生成JSON和TypeScript格式的数据文件

### 数据质量控制
- ✅ 只收录确认有Embed标签的游戏（可嵌入）
- ✅ 过滤掉无法嵌入的canvas/WebGL游戏
- ✅ 验证iframe链接有效性（返回302重定向到实际游戏）
- ✅ 自动下载并本地化图片资源

## 抓取结果

### 游戏列表（29个）
1. Prison Escape - `prison-escape-lnj`
2. Golf Orbit - `golf-orbit`
3. Leap and Avoid 2 - `leap-and-avoid-2`
4. Hook King Runner - `hook-king-runner`
5. Mergest Kingdom - `mergest-kingdom`
6. Single Line: Drawing Puzzle - `single-line-drawing-puzzle`
7. TimeWarriors - `timewarriors`
8. Ghetto Fighter - `ghetto-fighter`
9. Idle Soccer Manager - `idle-football-manager`
10. Runic Curse - `runic-curse`
11. Mermaidcore Makeup - `mermaidcore-makeup`
12. Gold Digger FRVR - `gold-digger-frvr`
13. Tung Tung Sahur: Obby Challenge - `tung-tung-sahur-obby-challenge`
14. Merge & Dig! - `merge-dig`
15. Age Of War - `age-of-war`
16. Jet Rush - `jet-rush`
17. Sudoku.game - `sudoku-game`
18. Knock Em All - `knock-em-all`
19. Idle Farming Business - `idle-farming-business`
20. Death City Zombie Invasion - `death-city-zombie-invasion`
21. Parkour First-Person - `parkour-first-person`
22. Gulag - `gulag`
23. Idle Saga - `idle-saga`
24. Copter.io - `copter-io`
25. Street Racer 2 - `street-racer-2`
26. Towering Trials - `towering-trials`
27. Drift No Limit - `drift-no-limit`
28. Heroes of the Arena - `heroes-of-the-arena`
29. Scale of the Universe 2 - `scale-of-the-universe-2`

### 游戏分类统计
- **Hot Games**: 29个游戏

### 文件输出
- `games_crazygames.json` - JSON格式游戏数据
- `games_crazygames.ts` - TypeScript格式游戏数据
- `public/images/games/crazygames/` - 游戏缩略图（31个文件）

## 数据格式

### Game接口
```typescript
interface Game {
  id: number;
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  description: string;
  gameUrl: string;
  thumbnail: string;
  rating: number;
  playCount: number;
  tags: string[];
  controls: string;
}
```

### iframe URL格式
```
https://www.crazygames.com/embed/{slug}
```

## 验证测试
- ✅ iframe链接返回302重定向（正常）
- ✅ 示例游戏可正常加载：`mermaidcore-makeup`
- ✅ 图片资源下载完整
- ✅ 数据格式符合项目要求

## 后续步骤
1. 将数据集成到主项目的games.ts文件中
2. 更新路由配置支持新的游戏分类
3. 测试游戏在实际网站中的加载效果
4. 考虑定期更新抓取脚本获取最新热门游戏

## 技术栈
- Python 3.13
- Selenium 4.33.0
- BeautifulSoup4 4.13.4
- requests 2.32.3
- tqdm 4.67.1 