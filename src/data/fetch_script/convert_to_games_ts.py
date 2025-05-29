import json
import os

def convert_json_to_ts():
    """将 JSON 数据转换为 TypeScript games.ts 格式"""
    
    # 读取CrazyGames数据
    with open('games_crazygames.json', 'r', encoding='utf-8') as f:
        crazygames_data = json.load(f)
    
    # 生成 TypeScript 内容
    ts_content = '''// Auto-generated file from CrazyGames crawler
// 此文件是通过爬虫自动生成的，请勿手动编辑

export interface Game {
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

export const games: Game[] = [
'''
    
    # 转换每个游戏数据
    for i, game in enumerate(crazygames_data):
        comma = ',' if i < len(crazygames_data) - 1 else ''
        ts_content += f'''  {{
    id: {game['id']},
    title: "{game['title']}",
    slug: "{game['slug']}",
    category: "{game['category']}",
    shortDescription: "{game['shortDescription']}",
    description: "{game['description']}",
    gameUrl: "{game['gameUrl']}",
    thumbnail: "{game['thumbnail']}",
    rating: {game['rating']},
    playCount: {game['playCount']},
    tags: {json.dumps(game['tags'])},
    controls: "{game['controls']}"
  }}{comma}
'''
    
    ts_content += '''];

// 按分类分组的游戏数据
export const gamesByCategory = games.reduce((acc, game) => {
  if (!acc[game.category]) {
    acc[game.category] = [];
  }
  acc[game.category].push(game);
  return acc;
}, {} as Record<string, Game[]>);

// 获取所有分类
export const categories = Array.from(new Set(games.map(game => game.category)));

// 根据ID获取游戏
export const getGameById = (id: number): Game | undefined => {
  return games.find(game => game.id === id);
};

// 根据slug获取游戏
export const getGameBySlug = (slug: string): Game | undefined => {
  return games.find(game => game.slug === slug);
};

// 根据分类和slug获取游戏
export const getGameByCategoryAndSlug = (category: string, slug: string): Game | undefined => {
  return games.find(game => game.category === category && game.slug === slug);
};
'''
    
    # 写入当前目录的文件
    output_path = 'games_crazygames.ts'
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(ts_content)
    
    print(f"已生成 {len(crazygames_data)} 个游戏数据到 {output_path}")
    print(f"分类统计:")
    categories = {}
    for game in crazygames_data:
        cat = game['category']
        categories[cat] = categories.get(cat, 0) + 1
    for cat, count in categories.items():
        print(f"  {cat}: {count} 个游戏")

if __name__ == "__main__":
    convert_json_to_ts() 