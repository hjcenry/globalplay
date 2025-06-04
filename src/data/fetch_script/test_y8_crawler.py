#!/usr/bin/env python3
"""
Y8 Games 爬虫测试脚本
只爬取少量数据来验证功能是否正常
"""

from fetch_y8 import Y8GamesCrawler

def main():
    """测试爬虫功能"""
    print("🧪 开始 Y8 爬虫功能测试...")
    
    crawler = Y8GamesCrawler()
    
    try:
        # 只爬取前2页进行测试
        print("📝 测试模式：只爬取前2页数据")
        crawler.crawl_all_pages(start_page=1, end_page=2)
        
        if len(crawler.games) > 0:
            print(f"✅ 测试成功！爬取到 {len(crawler.games)} 个游戏")
            
            # 显示前几个游戏的信息
            print("\n📋 爬取的游戏示例:")
            for i, game in enumerate(crawler.games[:3], 1):
                print(f"{i}. {game['title']} ({game['category']})")
                print(f"   URL: {game['gameUrl']}")
                print(f"   评分: {game['rating']}")
                print()
            
            # 保存测试数据
            crawler.save_to_json("y8_games_test.json")
            print("💾 测试数据已保存到 y8_games_test.json")
            
        else:
            print("❌ 测试失败：没有爬取到任何游戏数据")
            
    except KeyboardInterrupt:
        print("\n⚠️ 用户中断测试")
    except Exception as e:
        print(f"\n❌ 测试过程中出现错误: {e}")
    finally:
        crawler.close()

if __name__ == "__main__":
    main() 