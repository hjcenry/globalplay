#!/usr/bin/env python3
"""
Y8 游戏数据转换脚本
将爬取的 Y8 游戏数据转换为项目格式并合并到现有数据中
"""

import json
import re
from pathlib import Path

def load_json_data(filename):
    """加载 JSON 数据文件"""
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            return json.load(f)
    except FileNotFoundError:
        print(f"❌ 文件不存在: {filename}")
        return []
    except json.JSONDecodeError as e:
        print(f"❌ JSON 解析错误: {e}")
        return []

def parse_existing_games_ts(filepath):
    """解析现有的 games.ts 文件，提取现有游戏数据"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 使用正则表达式提取游戏数组
        match = re.search(r'export const games: Game\[\] = (\[.*?\]);', content, re.DOTALL)
        if match:
            games_str = match.group(1)
            # 简单的 JavaScript 对象转 JSON (这里做基本转换)
            # 实际使用中可能需要更复杂的解析
            return []  # 为简化，返回空数组，手动合并
        return []
    except Exception as e:
        print(f"❌ 解析 games.ts 失败: {e}")
        return []

def update_categories_count(y8_games):
    """计算各分类的游戏数量"""
    category_counts = {}
    for game in y8_games:
        category = game['category']
        category_counts[category] = category_counts.get(category, 0) + 1
    
    return category_counts

def generate_games_ts_content(y8_games, output_file="updated_games.ts"):
    """生成完整的 games.ts 文件内容"""
    
    # 计算分类统计
    category_counts = update_categories_count(y8_games)
    
    # 统计现有分类数量 (假设现有数据)
    existing_counts = {
        'action': 15,
        'puzzle': 3,
        'strategy': 6,
        'racing': 2,
        'shooting': 1,
        'adventure': 3
    }
    
    # 更新总数
    for category, count in category_counts.items():
        existing_counts[category] = existing_counts.get(category, 0) + count
    
    # 生成 TypeScript 内容
    ts_content = '''// Game data for GlobalPlay Games Website
// Updated with CrazyGames hot games and Y8 popular games collection

export interface Game {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  category: string;
  thumbnail: string;
  gameUrl: string;
  rating: number;
  playCount: number;
  tags: string[];
  controls: string;
  featured: boolean;
  trending: boolean;
  isNew: boolean;
}

export const categories = [
  { id: 'action', name: 'Action Games', icon: '⚔️', count: ''' + str(existing_counts.get('action', 0)) + ''' },
  { id: 'puzzle', name: 'Puzzle Games', icon: '🧩', count: ''' + str(existing_counts.get('puzzle', 0)) + ''' },
  { id: 'strategy', name: 'Strategy Games', icon: '🏰', count: ''' + str(existing_counts.get('strategy', 0)) + ''' },
  { id: 'racing', name: 'Racing Games', icon: '🏁', count: ''' + str(existing_counts.get('racing', 0)) + ''' },
  { id: 'shooting', name: 'Shooting Games', icon: '🎯', count: ''' + str(existing_counts.get('shooting', 0)) + ''' },
  { id: 'adventure', name: 'Adventure Games', icon: '🏃', count: ''' + str(existing_counts.get('adventure', 0)) + ''' },
];

// Y8 Games Collection
export const y8Games: Game[] = '''
    
    # 添加 Y8 游戏数据
    ts_content += json.dumps(y8_games, ensure_ascii=False, indent=2)
    
    ts_content += ''';

// Note: 请手动将 y8Games 合并到主要的 games 数组中
// 或者创建一个新的合并函数来组合所有游戏数据

// Utility functions
export const getFeaturedGames = (): Game[] => {
  return y8Games.filter(game => game.featured);
};

export const getTrendingGames = (): Game[] => {
  return y8Games.filter(game => game.trending);
};

export const getNewGames = (): Game[] => {
  return y8Games.filter(game => game.isNew);
};

export const getGamesByCategory = (categoryId: string): Game[] => {
  return y8Games.filter(game => game.category === categoryId);
};

export const getGameBySlug = (category: string, slug: string): Game | undefined => {
  return y8Games.find(game => game.category === category && game.slug === slug);
};

export const getGameById = (id: string): Game | undefined => {
  return y8Games.find(game => game.id === id);
};

export const searchGames = (query: string): Game[] => {
  const lowercaseQuery = query.toLowerCase();
  return y8Games.filter(
    game =>
      game.title.toLowerCase().includes(lowercaseQuery) ||
      game.description.toLowerCase().includes(lowercaseQuery) ||
      game.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};
'''
    
    # 保存文件
    try:
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(ts_content)
        print(f"✅ TypeScript 文件已生成: {output_file}")
        
        # 显示统计信息
        print(f"\n📊 Y8 游戏数据统计:")
        print(f"总游戏数: {len(y8_games)}")
        for category, count in category_counts.items():
            print(f"  {category}: {count} 个游戏")
            
    except Exception as e:
        print(f"❌ 生成 TypeScript 文件失败: {e}")

def create_integration_instructions(y8_games):
    """创建集成说明文档"""
    instructions = f"""# Y8 游戏数据集成说明

## 📊 数据概览
- 总游戏数: {len(y8_games)}
- 数据来源: zh.y8.com 热门游戏 (第1-9页)
- 生成时间: {json.dumps(list(set([game['category'] for game in y8_games])))}

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
import {{ y8Games }} from './y8_games_data';

// 合并所有游戏数据
export const games: Game[] = [
  ...existingGames,  // 现有游戏
  ...y8Games         // Y8 游戏
];
```

#### 方式二: 分别管理
```typescript
// 保持 Y8 游戏独立
export {{ y8Games }} from './y8_games_data';

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
  {{ id: 'action', name: 'Action Games', icon: '⚔️', count: {len([g for g in y8_games if g['category'] == 'action'])} }},
  {{ id: 'puzzle', name: 'Puzzle Games', icon: '🧩', count: {len([g for g in y8_games if g['category'] == 'puzzle'])} }},
  {{ id: 'strategy', name: 'Strategy Games', icon: '🏰', count: {len([g for g in y8_games if g['category'] == 'strategy'])} }},
  {{ id: 'racing', name: 'Racing Games', icon: '🏁', count: {len([g for g in y8_games if g['category'] == 'racing'])} }},
  {{ id: 'shooting', name: 'Shooting Games', icon: '🎯', count: {len([g for g in y8_games if g['category'] == 'shooting'])} }},
  {{ id: 'adventure', name: 'Adventure Games', icon: '🏃', count: {len([g for g in y8_games if g['category'] == 'adventure'])} }},
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
"""
    
    try:
        with open("Y8_INTEGRATION_GUIDE.md", 'w', encoding='utf-8') as f:
            f.write(instructions)
        print("✅ 集成说明文档已生成: Y8_INTEGRATION_GUIDE.md")
    except Exception as e:
        print(f"❌ 生成说明文档失败: {e}")

def main():
    """主函数"""
    print("🚀 开始 Y8 游戏数据转换...")
    
    # 加载 Y8 爬取的数据
    y8_games = load_json_data("y8_games.json")
    
    if not y8_games:
        print("❌ 没有找到 Y8 游戏数据，请先运行爬虫脚本")
        return
    
    print(f"📊 加载了 {len(y8_games)} 个 Y8 游戏")
    
    # 数据验证和清理
    valid_games = []
    for game in y8_games:
        # 验证必要字段
        required_fields = ['id', 'slug', 'title', 'gameUrl', 'category']
        if all(field in game and game[field] for field in required_fields):
            valid_games.append(game)
        else:
            print(f"⚠️ 跳过无效游戏: {game.get('title', 'Unknown')}")
    
    print(f"✅ 验证通过的游戏: {len(valid_games)}")
    
    # 生成 TypeScript 数据文件
    generate_games_ts_content(valid_games, "y8_games_data.ts")
    
    # 创建集成说明
    create_integration_instructions(valid_games)
    
    print(f"\n🎉 Y8 数据转换完成!")
    print(f"📁 生成文件:")
    print(f"  - y8_games_data.ts (TypeScript 数据)")
    print(f"  - Y8_INTEGRATION_GUIDE.md (集成说明)")

if __name__ == "__main__":
    main() 