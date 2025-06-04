#!/usr/bin/env python3
"""
测试游戏描述抓取修复
验证新的描述选择器是否正确工作
"""

from fetch_y8 import Y8GamesCrawler

def test_single_game_description():
    """测试单个游戏的描述抓取"""
    print("🧪 测试游戏描述抓取修复...")
    
    crawler = Y8GamesCrawler()
    
    try:
        # 测试已知有描述的游戏
        test_game = {
            'title': 'Legend of Panda',
            'slug': 'legend_of_panda',
            'game_link': 'https://www.y8.com/games/legend_of_panda',
            'thumbnail': 'https://img.y8.com/cloud/v2-y8-thumbs-small/80623_small.jpg'
        }
        
        print(f"🎮 测试游戏: {test_game['title']}")
        print(f"🔗 游戏链接: {test_game['game_link']}")
        
        game_data = crawler.extract_game_details(test_game)
        
        if game_data:
            print("✅ 游戏数据抓取成功!")
            print(f"📝 游戏标题: {game_data['title']}")
            print(f"📖 完整描述: {game_data['description']}")
            print(f"📄 简短描述: {game_data['shortDescription']}")
            print(f"🏷️  分类: {game_data['category']}")
            print(f"⭐ 评分: {game_data['rating']}")
            print(f"🔗 游戏URL: {game_data['gameUrl']}")
            
            # 验证描述是否正确
            if "Legend of Panda is a 2D arcade game" in game_data['description']:
                print("✅ 描述抓取正确!")
            elif game_data['description']:
                print(f"⚠️ 描述已抓取但可能不是预期内容: {game_data['description'][:100]}...")
            else:
                print("❌ 描述为空")
                
        else:
            print("❌ 游戏数据抓取失败")
            
    except Exception as e:
        print(f"❌ 测试过程中出现错误: {e}")
    finally:
        crawler.close()

def test_multiple_games():
    """测试多个游戏的描述抓取"""
    print("\n🧪 测试多个游戏的描述抓取...")
    
    crawler = Y8GamesCrawler()
    
    try:
        # 抓取第一页的前5个游戏进行测试
        page_games = crawler.extract_game_cards(1)
        
        if page_games:
            print(f"📋 从第1页获取到 {len(page_games)} 个游戏，测试前5个...")
            
            test_count = min(5, len(page_games))
            success_count = 0
            
            for i in range(test_count):
                game_info = page_games[i]
                print(f"\n📝 测试游戏 {i+1}: {game_info['title']}")
                
                game_data = crawler.extract_game_details(game_info)
                if game_data and game_data['description']:
                    print(f"✅ 描述: {game_data['description'][:100]}...")
                    success_count += 1
                else:
                    print("❌ 描述抓取失败")
            
            print(f"\n📊 测试结果: {success_count}/{test_count} 成功")
            
        else:
            print("❌ 无法获取游戏列表")
            
    except Exception as e:
        print(f"❌ 测试过程中出现错误: {e}")
    finally:
        crawler.close()

def main():
    """主测试函数"""
    print("🚀 开始测试游戏描述抓取修复...\n")
    
    # 测试单个已知游戏
    test_single_game_description()
    
    # 测试多个游戏
    test_multiple_games()
    
    print("\n🎯 描述抓取测试完成!")

if __name__ == "__main__":
    main() 