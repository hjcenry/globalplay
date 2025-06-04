# Y8 游戏数据集成说明

## 📊 数据概览
- 总游戏数: 79
- 数据来源: zh.y8.com 热门游戏 (第1-9页)
- 生成时间: ["action"]

## 🔧 集成步骤

### 1. 图片资源
确保以下目录存在并包含对应的游戏封面图片:
```
public/images/games/y8/
```

### 2. 数据合并
有两种方式集成 Y8 游戏数据:

#### 方式一: 直接替换 (推荐)
```typescript
// 在 src/data/games.ts 中
import { y8Games } from './y8_games_data';

// 合并所有游戏数据
export const games: Game[] = [
  ...existingGames,  // 现有游戏
  ...y8Games         // Y8 游戏
];
```

#### 方式二: 分别管理
```typescript
// 保持 Y8 游戏独立
export { y8Games } from './y8_games_data';

// 在需要时合并
export const getAllGames = (): Game[] => [
  ...games,
  ...y8Games
];
```

### 3. 分类统计更新
更新 categories 数组中的 count 字段:

```typescript
export const categories = [
  { id: 'action', name: 'Action Games', icon: '⚔️', count: 79 },
  { id: 'puzzle', name: 'Puzzle Games', icon: '🧩', count: 0 },
  { id: 'strategy', name: 'Strategy Games', icon: '🏰', count: 0 },
  { id: 'racing', name: 'Racing Games', icon: '🏁', count: 0 },
  { id: 'shooting', name: 'Shooting Games', icon: '🎯', count: 0 },
  { id: 'adventure', name: 'Adventure Games', icon: '🏃', count: 0 },
];
```

## 🎮 游戏特点
- 所有游戏都有有效的 iframe 嵌入地址
- 支持各种设备和浏览器
- 图片已本地化存储
- 包含评分和播放次数数据
- 带有分类和标签信息

## ✅ 验证检查
1. 检查所有游戏的 iframe 地址是否有效
2. 确认图片文件是否正确下载
3. 验证游戏分类映射是否正确
4. 测试游戏在网站中的加载情况

## 🚀 部署建议
1. 先在开发环境测试所有游戏
2. 检查图片加载性能
3. 验证 iframe 安全性设置
4. 确保所有游戏链接可访问
