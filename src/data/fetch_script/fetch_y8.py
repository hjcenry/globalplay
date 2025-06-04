#!/usr/bin/env python3
"""
Y8 Games 爬虫脚本
抓取 zh.y8.com 热门游戏数据，生成符合项目格式的游戏数据
"""

import requests
from bs4 import BeautifulSoup
import json
import time
import re
import os
from urllib.parse import urljoin, urlparse
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException, NoSuchElementException

class Y8GamesCrawler:
    def __init__(self):
        self.base_url = "https://www.y8.com"
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.9,zh;q=0.8',
            'Accept-Encoding': 'gzip, deflate, br',
            'Connection': 'keep-alive',
            'Upgrade-Insecure-Requests': '1'
        })
        self.games = []
        self.setup_selenium()
        
    def setup_selenium(self):
        """设置 Selenium WebDriver"""
        chrome_options = Options()
        chrome_options.add_argument('--headless')
        chrome_options.add_argument('--no-sandbox')
        chrome_options.add_argument('--disable-dev-shm-usage')
        chrome_options.add_argument('--disable-gpu')
        chrome_options.add_argument('--window-size=1920,1080')
        chrome_options.add_argument('--disable-web-security')
        chrome_options.add_argument('--disable-features=VizDisplayCompositor')
        chrome_options.add_argument('--disable-logging')
        chrome_options.add_argument('--silent')
        chrome_options.add_argument('--lang=en-US')  # 强制英文
        chrome_options.add_argument('--user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36')
        
        # 禁用图片加载以提高速度，并设置语言偏好
        prefs = {
            "profile.managed_default_content_settings.images": 2,
            "profile.default_content_setting_values.notifications": 2,
            "intl.accept_languages": "en-US,en"  # 强制英文语言偏好
        }
        chrome_options.add_experimental_option("prefs", prefs)
        
        try:
            self.driver = webdriver.Chrome(options=chrome_options)
            print("✅ Chrome WebDriver 初始化成功")
        except Exception as e:
            print(f"❌ Chrome WebDriver 初始化失败: {e}")
            print("💡 请确保 ChromeDriver 版本与 Chrome 浏览器版本兼容")
            raise

    def extract_game_cards(self, page_num):
        """从指定页面提取游戏卡片信息"""
        url = f"https://www.y8.com/popular/games?page={page_num}&hl=en"
        print(f"🔍 正在抓取第 {page_num} 页: {url}")
        
        try:
            self.driver.get(url)
            # 等待页面加载
            WebDriverWait(self.driver, 10).until(
                EC.presence_of_element_located((By.CSS_SELECTOR, "img.thumb.playable"))
            )
            time.sleep(2)  # 额外等待确保图片加载
            
            # 获取页面源码
            html = self.driver.page_source
            soup = BeautifulSoup(html, 'html.parser')
            
            # 查找游戏卡片
            game_cards = soup.find_all('img', class_='thumb playable')
            print(f"📋 在第 {page_num} 页找到 {len(game_cards)} 个游戏")
            
            page_games = []
            for card in game_cards:
                try:
                    # 提取游戏信息
                    game_title = card.get('alt', '').strip()
                    if not game_title:
                        continue
                        
                    # 获取图片链接
                    thumbnail = card.get('src') or card.get('data-src', '')
                    
                    # 从父元素获取游戏链接
                    parent_link = card.find_parent('a')
                    if not parent_link:
                        continue
                        
                    game_link = parent_link.get('href', '')
                    if game_link.startswith('/'):
                        game_link = urljoin(self.base_url, game_link)
                    
                    # 提取游戏 slug
                    slug = game_link.split('/')[-1] if game_link else ''
                    
                    if game_title and game_link and slug:
                        page_games.append({
                            'title': game_title,
                            'slug': slug,
                            'game_link': game_link,
                            'thumbnail': thumbnail
                        })
                        
                except Exception as e:
                    print(f"⚠️ 处理游戏卡片时出错: {e}")
                    continue
            
            return page_games
            
        except TimeoutException:
            print(f"❌ 第 {page_num} 页加载超时")
            return []
        except Exception as e:
            print(f"❌ 抓取第 {page_num} 页时出错: {e}")
            return []

    def extract_game_details(self, game_info):
        """从游戏详情页提取详细信息"""
        game_url = game_info['game_link']
        print(f"🎮 正在获取游戏详情: {game_info['title']}")
        
        try:
            self.driver.get(game_url)
            # 等待页面加载
            WebDriverWait(self.driver, 10).until(
                EC.presence_of_element_located((By.TAG_NAME, "body"))
            )
            time.sleep(2)
            
            html = self.driver.page_source
            soup = BeautifulSoup(html, 'html.parser')
            
            # 查找 iframe
            iframe = soup.find('iframe', {'id': 'item-direct-container'})
            if not iframe:
                iframe = soup.find('iframe', class_='item-direct-container')
            
            if not iframe:
                print(f"⚠️ 未找到游戏 iframe: {game_info['title']}")
                return None
                
            iframe_src = iframe.get('src') or iframe.get('data-src', '')
            if not iframe_src:
                print(f"⚠️ iframe 无有效 src: {game_info['title']}")
                return None
            
            # 提取游戏描述
            description = ""
            desc_selectors = [
                'h2.ltr.description',  # 正确的游戏描述选择器
                'div.item-description',
                'div.description',
                '.game-description',
                'meta[name="description"]'
            ]
            
            for selector in desc_selectors:
                if selector.startswith('meta'):
                    desc_elem = soup.find('meta', {'name': 'description'})
                    if desc_elem:
                        description = desc_elem.get('content', '').strip()
                        break
                else:
                    desc_elem = soup.select_one(selector)
                    if desc_elem:
                        description = desc_elem.get_text().strip()
                        break
            
            # 如果没有找到描述，使用默认描述
            if not description:
                description = f"Play {game_info['title']} - an exciting game from Y8!"
            
            # 提取评分 (如果有的话)
            rating = 4.0  # 默认评分
            rating_selectors = [
                '.rating-value',
                '.score',
                '.rating'
            ]
            
            for selector in rating_selectors:
                rating_elem = soup.select_one(selector)
                if rating_elem:
                    try:
                        rating_text = rating_elem.get_text().strip()
                        rating_match = re.search(r'(\d+\.?\d*)', rating_text)
                        if rating_match:
                            rating = float(rating_match.group(1))
                            if rating > 5:  # 如果是百分制，转换为5分制
                                rating = rating / 20
                            break
                    except:
                        continue
            
            # 提取游戏分类
            category = "action"  # 默认分类
            category_selectors = [
                '.category',
                '.genre',
                'meta[property="game:category"]'
            ]
            
            for selector in category_selectors:
                if selector.startswith('meta'):
                    cat_elem = soup.find('meta', {'property': 'game:category'})
                    if cat_elem:
                        category = cat_elem.get('content', '').lower()
                        break
                else:
                    cat_elem = soup.select_one(selector)
                    if cat_elem:
                        category = cat_elem.get_text().strip().lower()
                        break
            
            # 映射到我们的分类
            category_mapping = {
                'action': 'action',
                'puzzle': 'puzzle', 
                'strategy': 'strategy',
                'racing': 'racing',
                'adventure': 'adventure',
                'shooting': 'shooting',
                'sport': 'action',
                'arcade': 'action',
                'platform': 'action',
                'rpg': 'adventure'
            }
            
            for key in category_mapping:
                if key in category:
                    category = category_mapping[key]
                    break
            else:
                category = 'action'  # 默认分类
            
            # 生成简短描述
            if description and len(description) > 150:
                # 从完整描述中提取前150个字符，并在单词边界截断
                short_desc = description[:147] + "..."
                # 尝试在句子结束处截断
                if '. ' in short_desc:
                    sentences = short_desc.split('. ')
                    if len(sentences) > 1:
                        short_desc = sentences[0] + '.'
            else:
                short_desc = description if description else f"Play {game_info['title']} - an exciting {category} game from Y8!"
            
            # 生成游戏数据
            game_data = {
                'id': game_info['slug'],
                'slug': game_info['slug'],
                'title': game_info['title'],
                'description': description,
                'shortDescription': short_desc,
                'category': category,
                'thumbnail': f"/images/games/y8/{game_info['slug']}.jpg",
                'gameUrl': iframe_src,
                'rating': round(rating, 1),
                'playCount': self.generate_play_count(),
                'tags': [category, "y8", "popular"],
                'controls': 'Keyboard & Mouse',
                'featured': False,
                'trending': True,
                'isNew': False
            }
            
            return game_data
            
        except Exception as e:
            print(f"❌ 获取游戏详情失败 {game_info['title']}: {e}")
            return None

    def generate_play_count(self):
        """生成随机的游戏次数"""
        import random
        return random.randint(15000, 200000)

    def download_image(self, image_url, save_path):
        """下载游戏封面图片"""
        try:
            if not image_url:
                return False
                
            response = self.session.get(image_url, timeout=10)
            response.raise_for_status()
            
            # 确保目录存在
            os.makedirs(os.path.dirname(save_path), exist_ok=True)
            
            with open(save_path, 'wb') as f:
                f.write(response.content)
            
            print(f"✅ 图片下载成功: {os.path.basename(save_path)}")
            return True
            
        except Exception as e:
            print(f"❌ 图片下载失败 {image_url}: {e}")
            return False

    def crawl_all_pages(self, start_page=1, end_page=9):
        """爬取所有页面的游戏"""
        print(f"🚀 开始爬取 Y8 游戏网站 (第 {start_page}-{end_page} 页)")
        
        all_game_cards = []
        
        # 步骤1: 收集所有游戏卡片信息
        for page in range(start_page, end_page + 1):
            page_games = self.extract_game_cards(page)
            all_game_cards.extend(page_games)
            time.sleep(2)  # 避免请求过快
        
        print(f"📊 总共收集到 {len(all_game_cards)} 个游戏卡片")
        
        # 步骤2: 获取每个游戏的详细信息
        successful_games = []
        failed_games = []
        
        for i, game_info in enumerate(all_game_cards, 1):
            print(f"📝 进度: {i}/{len(all_game_cards)} - {game_info['title']}")
            
            game_data = self.extract_game_details(game_info)
            if game_data:
                # 下载图片
                if game_info['thumbnail']:
                    image_path = f"public/images/games/y8/{game_info['slug']}.jpg"
                    self.download_image(game_info['thumbnail'], image_path)
                
                successful_games.append(game_data)
                print(f"✅ 成功处理: {game_info['title']}")
            else:
                failed_games.append(game_info)
                print(f"❌ 处理失败: {game_info['title']}")
            
            time.sleep(1)  # 避免请求过快
        
        self.games = successful_games
        
        print(f"\n🎯 爬取完成!")
        print(f"✅ 成功: {len(successful_games)} 个游戏")
        print(f"❌ 失败: {len(failed_games)} 个游戏")
        
        if failed_games:
            print("\n❌ 失败的游戏:")
            for game in failed_games:
                print(f"  - {game['title']}")

    def save_to_json(self, filename="y8_games.json"):
        """保存数据为 JSON 文件"""
        try:
            with open(filename, 'w', encoding='utf-8') as f:
                json.dump(self.games, f, ensure_ascii=False, indent=2)
            print(f"✅ 数据已保存到 {filename}")
        except Exception as e:
            print(f"❌ 保存文件失败: {e}")

    def generate_typescript_data(self, filename="y8_games_data.ts"):
        """生成 TypeScript 格式的数据文件"""
        try:
            ts_content = """// Y8 Games data for GlobalPlay Games Website
// Auto-generated from Y8 crawler

export const y8Games = """
            
            ts_content += json.dumps(self.games, ensure_ascii=False, indent=2)
            ts_content += ";\n"
            
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(ts_content)
            
            print(f"✅ TypeScript 数据已保存到 {filename}")
            
        except Exception as e:
            print(f"❌ 生成 TypeScript 文件失败: {e}")

    def close(self):
        """关闭 WebDriver"""
        if hasattr(self, 'driver'):
            self.driver.quit()
            print("🔒 WebDriver 已关闭")

def main():
    crawler = Y8GamesCrawler()
    
    try:
        # 爬取所有页面 (1-9页)
        crawler.crawl_all_pages(start_page=1, end_page=9)
        
        # 保存数据
        crawler.save_to_json("y8_games.json")
        crawler.generate_typescript_data("y8_games_data.ts")
        
        print(f"\n🎉 任务完成! 共爬取 {len(crawler.games)} 个 Y8 游戏")
        
    except KeyboardInterrupt:
        print("\n⚠️ 用户中断操作")
    except Exception as e:
        print(f"\n❌ 出现错误: {e}")
    finally:
        crawler.close()

if __name__ == "__main__":
    main() 