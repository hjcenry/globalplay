import json
import random

def integrate_crazygames_to_games_ts():
    """将CrazyGames数据整合到现有的games.ts文件中"""
    
    # 读取CrazyGames数据
    with open('games_crazygames.json', 'r', encoding='utf-8') as f:
        crazygames_data = json.load(f)
    
    # 将CrazyGames游戏按类型重新分类
    def categorize_game(title, tags):
        """根据游戏标题和标签智能分类"""
        title_lower = title.lower()
        
        if any(word in title_lower for word in ['racing', 'racer', 'drift', 'car', 'speed']):
            return 'racing'
        elif any(word in title_lower for word in ['shooter', 'war', 'battle', 'fight', 'escape', 'survive', 'zombie', 'death']):
            return 'action'
        elif any(word in title_lower for word in ['puzzle', 'sudoku', 'match', 'draw', 'line']):
            return 'puzzle'
        elif any(word in title_lower for word in ['strategy', 'kingdom', 'defense', 'tower', 'war', 'heroes']):
            return 'strategy'
        elif any(word in title_lower for word in ['adventure', 'quest', 'explore', 'parkour', 'run']):
            return 'adventure'
        elif any(word in title_lower for word in ['shoot', 'copter', 'space']):
            return 'shooting'
        else:
            # 默认根据游戏特征分类
            if 'idle' in title_lower or 'manager' in title_lower:
                return 'strategy'
            elif 'makeup' in title_lower or 'dress' in title_lower:
                return 'puzzle'
            else:
                return 'action'  # 默认分类
    
    def enhance_description(title):
        """为游戏生成更丰富的描述"""
        descriptions = {
            'action': [
                f"{title} is an action-packed adventure where you face thrilling challenges and intense gameplay.",
                f"Experience heart-pounding action in {title} with fast-paced combat and exciting missions.",
                f"Join the ultimate action experience in {title} featuring dynamic gameplay and challenging levels."
            ],
            'puzzle': [
                f"{title} challenges your mind with clever puzzles and brain-teasing mechanics.",
                f"Exercise your brain with {title}, a captivating puzzle game that tests your logic and creativity.",
                f"Solve intricate puzzles and unlock new challenges in the engaging world of {title}."
            ],
            'racing': [
                f"Get ready for high-speed thrills in {title} with realistic racing physics and stunning tracks.",
                f"Experience the adrenaline rush of {title} as you race through challenging courses.",
                f"Master the art of racing in {title} with precise controls and exciting competition."
            ],
            'strategy': [
                f"{title} offers deep strategic gameplay where every decision matters.",
                f"Build, manage, and conquer in {title} with complex strategic mechanics.",
                f"Plan your moves carefully in {title}, a strategy game that rewards tactical thinking."
            ],
            'adventure': [
                f"Embark on an epic journey in {title} filled with exploration and discovery.",
                f"Adventure awaits in {title} with immersive worlds and exciting quests.",
                f"Explore vast landscapes and uncover secrets in the adventurous world of {title}."
            ],
            'shooting': [
                f"Take aim and fire in {title}, an intense shooting game with precise controls.",
                f"Test your marksmanship skills in {title} with challenging targets and fast action.",
                f"Engage in epic battles in {title} featuring advanced weapons and strategic combat."
            ]
        }
        return descriptions
    
    def get_random_stats():
        """生成随机的游戏统计数据"""
        return {
            'rating': round(random.uniform(4.2, 4.9), 1),
            'playCount': random.randint(25000, 150000)
        }
    
    def assign_features():
        """随机分配特色标签"""
        return {
            'featured': random.choice([True, False]),
            'trending': random.choice([True, True, False]),  # 更高概率为trending
            'isNew': random.choice([True, False, False])  # 较低概率为new
        }
    
    # 转换CrazyGames数据为项目格式
    converted_games = []
    
    for game in crazygames_data:
        category = categorize_game(game['title'], game['tags'])
        stats = get_random_stats()
        features = assign_features()
        descriptions = enhance_description(game['title'])
        
        # 选择合适的控制方式
        controls_map = {
            'action': 'Keyboard & Mouse',
            'racing': 'Keyboard',
            'puzzle': 'Mouse/Touch',
            'strategy': 'Mouse',
            'adventure': 'Keyboard',
            'shooting': 'Keyboard & Mouse'
        }
        
        converted_game = {
            'id': game['slug'],
            'slug': game['slug'],
            'title': game['title'],
            'description': random.choice(descriptions[category]),
            'shortDescription': f"Play {game['title']} - an exciting {category} game from CrazyGames!",
            'category': category,
            'thumbnail': game['thumbnail'],
            'gameUrl': game['gameUrl'],
            'rating': stats['rating'],
            'playCount': stats['playCount'],
            'tags': [category, 'crazygames', 'hot'] + (['popular'] if features['trending'] else []),
            'controls': controls_map[category],
            'featured': features['featured'],
            'trending': features['trending'],
            'isNew': features['isNew']
        }
        converted_games.append(converted_game)
    
    # 生成完整的games.ts内容
    ts_content = '''// Game data for GlobalPlay Games Website
// Updated with CrazyGames hot games collection

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
  { id: 'action', name: 'Action Games', icon: '⚔️', count: %d },
  { id: 'puzzle', name: 'Puzzle Games', icon: '🧩', count: %d },
  { id: 'strategy', name: 'Strategy Games', icon: '🏰', count: %d },
  { id: 'racing', name: 'Racing Games', icon: '🏁', count: %d },
  { id: 'shooting', name: 'Shooting Games', icon: '🎯', count: %d },
  { id: 'adventure', name: 'Adventure Games', icon: '🏃', count: %d },
];

export const games: Game[] = [
''' 
    
    # 统计各分类的游戏数量
    category_counts = {}
    for game in converted_games:
        cat = game['category']
        category_counts[cat] = category_counts.get(cat, 0) + 1
    
    # 原有游戏数据 (保留原有的示例游戏)
    original_games = [
        {
            'id': 'monster-survivors',
            'slug': 'monster-survivors',
            'title': 'Monster Survivors',
            'description': 'Monster Survivors is an intense survival action game where you face endless waves of terrifying monsters. Armed with various weapons and special abilities, your goal is to survive as long as possible while collecting resources and power-ups to enhance your combat effectiveness.',
            'shortDescription': 'Battle endless hordes of monsters and survive as long as you can in this epic survival adventure!',
            'category': 'action',
            'thumbnail': '/images/monster-survivors.jpg',
            'gameUrl': 'https://cloud.onlinegames.io/games/2025/unity/monster-survivors/index-og.html',
            'rating': 4.8,
            'playCount': 125847,
            'tags': ['survival', 'action', 'monsters', 'weapons'],
            'controls': 'Keyboard & Mouse',
            'featured': True,
            'trending': True,
            'isNew': False
        }
    ]
    
    # 合并原有游戏和新游戏
    all_games = original_games + converted_games
    
    # 重新统计所有游戏的分类数量
    total_category_counts = {'action': 0, 'puzzle': 0, 'strategy': 0, 'racing': 0, 'shooting': 0, 'adventure': 0}
    for game in all_games:
        cat = game['category']
        if cat in total_category_counts:
            total_category_counts[cat] += 1
    
    # 填充categories统计
    ts_content = ts_content % (
        total_category_counts['action'],
        total_category_counts['puzzle'], 
        total_category_counts['strategy'],
        total_category_counts['racing'],
        total_category_counts['shooting'],
        total_category_counts['adventure']
    )
    
    # 添加所有游戏数据
    for i, game in enumerate(all_games):
        comma = ',' if i < len(all_games) - 1 else ''
        
        # 转换Python布尔值为JavaScript
        featured = 'true' if game['featured'] else 'false'
        trending = 'true' if game['trending'] else 'false'
        isNew = 'true' if game['isNew'] else 'false'
        
        ts_content += f'''  {{
    id: '{game['id']}',
    slug: '{game['slug']}',
    title: '{game['title']}',
    description: '{game['description']}',
    shortDescription: '{game['shortDescription']}',
    category: '{game['category']}',
    thumbnail: '{game['thumbnail']}',
    gameUrl: '{game['gameUrl']}',
    rating: {game['rating']},
    playCount: {game['playCount']},
    tags: {json.dumps(game['tags'])},
    controls: '{game['controls']}',
    featured: {featured},
    trending: {trending},
    isNew: {isNew},
  }}{comma}
'''
    
    # 添加工具函数
    ts_content += '''];

export const getFeaturedGames = (): Game[] => {
  return games.filter(game => game.featured);
};

export const getTrendingGames = (): Game[] => {
  return games.filter(game => game.trending);
};

export const getNewGames = (): Game[] => {
  return games.filter(game => game.isNew);
};

export const getGamesByCategory = (categoryId: string): Game[] => {
  return games.filter(game => game.category === categoryId);
};

export const getGameBySlug = (category: string, slug: string): Game | undefined => {
  return games.find(game => game.category === category && game.slug === slug);
};

export const getGameById = (id: string): Game | undefined => {
  return games.find(game => game.id === id);
};

export const searchGames = (query: string): Game[] => {
  const searchTerm = query.toLowerCase();
  return games.filter(game => 
    game.title.toLowerCase().includes(searchTerm) ||
    game.description.toLowerCase().includes(searchTerm) ||
    game.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
};
'''
    
    # 写入新的games.ts文件
    output_path = '../games.ts'
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(ts_content)
    
    print(f"✅ 成功整合 {len(converted_games)} 个CrazyGames游戏到 {output_path}")
    print(f"📊 总游戏数量: {len(all_games)} 个")
    print(f"📈 分类统计:")
    for cat, count in total_category_counts.items():
        print(f"  {cat}: {count} 个游戏")
    
    # 统计特色游戏
    featured_count = sum(1 for game in all_games if game['featured'])
    trending_count = sum(1 for game in all_games if game['trending'])
    new_count = sum(1 for game in all_games if game['isNew'])
    
    print(f"🌟 特色游戏: {featured_count} 个")
    print(f"🔥 热门游戏: {trending_count} 个") 
    print(f"🆕 新游戏: {new_count} 个")

if __name__ == "__main__":
    integrate_crazygames_to_games_ts() 