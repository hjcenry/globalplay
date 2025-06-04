#!/usr/bin/env python3
"""
测试英文Y8游戏描述抓取
"""

from fetch_y8 import Y8GamesCrawler

def test_english_descriptions():
    """测试英文游戏描述抓取"""
    print("🧪 测试英文Y8游戏描述抓取...")
    
    crawler = Y8GamesCrawler()
    
    try:
        # 测试几个已知的游戏
        test_games = [
            {
                'title': 'Legend of Panda',
                'slug': 'legend_of_panda',
                'game_link': 'https://www.y8.com/games/legend_of_panda?hl=en',
                'thumbnail': 'test.jpg'
            },
            {
                'title': 'Slope',
                'slug': 'slope',
                'game_link': 'https://www.y8.com/games/slope?hl=en',
                'thumbnail': 'test.jpg'
            }
        ]
        
        for game_info in test_games:
            print(f"\n🎮 测试游戏: {game_info['title']}")
            print(f"🔗 游戏链接: {game_info['game_link']}")
            
            game_data = crawler.extract_game_details(game_info)
            
            if game_data and game_data['description']:
                print(f"📖 描述: {game_data['description']}")
                
                # 检查是否是英文描述
                if any(word in game_data['description'].lower() for word in ['is a', 'game', 'play', 'the goal']):
                    print("✅ 成功获取英文描述!")
                elif any(word in game_data['description'] for word in ['是一款', '游戏', '您', '玩家']):
                    print("⚠️ 仍然是中文描述")
                else:
                    print("❓ 描述语言未确定")
            else:
                print("❌ 未获取到描述")
        
    except Exception as e:
        print(f"❌ 测试过程中出现错误: {e}")
    finally:
        crawler.close()

if __name__ == "__main__":
    test_english_descriptions() 