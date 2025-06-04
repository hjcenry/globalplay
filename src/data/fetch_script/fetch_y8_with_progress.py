#!/usr/bin/env python3
"""
Y8 Games 爬虫脚本 - 带实时进度显示
抓取 www.y8.com 热门游戏数据，显示详细进度信息
"""

import requests
from bs4 import BeautifulSoup
import json
import time
import re
import os
from datetime import datetime
from urllib.parse import urljoin, urlparse
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException, NoSuchElementException

class Y8GamesCrawlerWithProgress:
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
        self.progress_file = "progress.txt"
        self.start_time = None
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
        chrome_options.add_argument('--lang=en-US')
        chrome_options.add_argument('--user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36')
        
        # 禁用图片加载以提高速度，并设置语言偏好
        prefs = {
            "profile.managed_default_content_settings.images": 2,
            "profile.default_content_setting_values.notifications": 2,
            "intl.accept_languages": "en-US,en"
        }
        chrome_options.add_experimental_option("prefs", prefs)
        
        try:
            self.driver = webdriver.Chrome(options=chrome_options)
            print("✅ Chrome WebDriver 初始化成功")
        except Exception as e:
            print(f"❌ Chrome WebDriver 初始化失败: {e}")
            raise

    def write_progress(self, message):
        """写入进度信息到文件"""
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        with open(self.progress_file, "a", encoding="utf-8") as f:
            f.write(f"[{timestamp}] {message}\n")
        print(f"[{timestamp}] {message}")

    def estimate_time_remaining(self, current_item, total_items, elapsed_time):
        """估算剩余时间"""
        if current_item == 0:
            return "计算中..."
        
        avg_time_per_item = elapsed_time / current_item
        remaining_items = total_items - current_item
        remaining_seconds = remaining_items * avg_time_per_item
        
        hours = int(remaining_seconds // 3600)
        minutes = int((remaining_seconds % 3600) // 60)
        seconds = int(remaining_seconds % 60)
        
        if hours > 0:
            return f"{hours}小时{minutes}分钟"
        elif minutes > 0:
            return f"{minutes}分钟{seconds}秒"
        else:
            return f"{seconds}秒"

    def extract_game_cards(self, page_num):
        """从指定页面提取游戏卡片信息"""
        url = f"https://www.y8.com/popular/games?page={page_num}&hl=en"
        self.write_progress(f"🔍 正在抓取第 {page_num} 页: {url}")
        
        try:
            self.driver.get(url)
            WebDriverWait(self.driver, 10).until(
                EC.presence_of_element_located((By.CSS_SELECTOR, "img.thumb.playable"))
            )
            time.sleep(2)
            
            html = self.driver.page_source
            soup = BeautifulSoup(html, 'html.parser')
            
            game_cards = soup.find_all('img', class_='thumb playable')
            self.write_progress(f"📋 在第 {page_num} 页找到 {len(game_cards)} 个游戏")
            
            page_games = []
            for card in game_cards:
                try:
                    game_title = card.get('alt', '').strip()
                    if not game_title:
                        continue
                        
                    thumbnail = card.get('src') or card.get('data-src', '')
                    parent_link = card.find_parent('a')
                    if not parent_link:
                        continue
                        
                    game_link = parent_link.get('href', '')
                    if game_link.startswith('/'):
                        game_link = urljoin(self.base_url, game_link)
                    
                    # 添加英文参数
                    if '?' in game_link:
                        game_link += '&hl=en'
                    else:
                        game_link += '?hl=en'
                    
                    slug = game_link.split('/')[-1].split('?')[0] if game_link else ''
                    
                    if game_title and game_link and slug:
                        page_games.append({
                            'title': game_title,
                            'slug': slug,
                            'game_link': game_link,
                            'thumbnail': thumbnail
                        })
                        
                except Exception as e:
                    self.write_progress(f"⚠️ 处理游戏卡片时出错: {e}")
                    continue
            
            return page_games
            
        except TimeoutException:
            self.write_progress(f"❌ 第 {page_num} 页加载超时")
            return []
        except Exception as e:
            self.write_progress(f"❌ 抓取第 {page_num} 页时出错: {e}")
            return []

    def extract_game_details(self, game_info):
        """从游戏详情页提取详细信息"""
        game_url = game_info['game_link']
        
        try:
            self.driver.get(game_url)
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
                return None
                
            iframe_src = iframe.get('src') or iframe.get('data-src', '')
            if not iframe_src:
                return None
            
            # 提取游戏描述 - 使用正确的选择器
            description = ""
            desc_selectors = [
                'h2.ltr.description',
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
            
            if not description:
                description = f"Play {game_info['title']} - an exciting game from Y8!"
            
            # 生成简短描述
            if description and len(description) > 150:
                short_desc = description[:147] + "..."
                if '. ' in short_desc:
                    sentences = short_desc.split('. ')
                    if len(sentences) > 1:
                        short_desc = sentences[0] + '.'
            else:
                short_desc = description
            
            # 提取评分
            rating = 4.0
            rating_selectors = ['.rating-value', '.score', '.rating']
            
            for selector in rating_selectors:
                rating_elem = soup.select_one(selector)
                if rating_elem:
                    try:
                        rating_text = rating_elem.get_text().strip()
                        rating_match = re.search(r'(\d+\.?\d*)', rating_text)
                        if rating_match:
                            rating = float(rating_match.group(1))
                            if rating > 5:
                                rating = rating / 20
                            break
                    except:
                        continue
            
            # 提取分类
            category = "action"
            category_selectors = ['.category', '.genre', 'meta[property="game:category"]']
            
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
            
            # 映射到标准分类
            category_mapping = {
                'action': 'action', 'puzzle': 'puzzle', 'strategy': 'strategy',
                'racing': 'racing', 'adventure': 'adventure', 'shooting': 'shooting',
                'sport': 'action', 'arcade': 'action', 'platform': 'action', 'rpg': 'adventure'
            }
            
            for key in category_mapping:
                if key in category:
                    category = category_mapping[key]
                    break
            else:
                category = 'action'
            
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
            self.write_progress(f"❌ 获取游戏详情失败 {game_info['title']}: {e}")
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
            
            os.makedirs(os.path.dirname(save_path), exist_ok=True)
            
            with open(save_path, 'wb') as f:
                f.write(response.content)
            
            return True
            
        except Exception as e:
            return False

    def crawl_all_pages(self, start_page=1, end_page=9):
        """爬取所有页面的游戏"""
        self.start_time = time.time()
        
        # 清空进度文件
        with open(self.progress_file, "w", encoding="utf-8") as f:
            f.write("")
        
        self.write_progress(f"🚀 开始爬取 Y8 游戏网站 (第 {start_page}-{end_page} 页)")
        
        all_game_cards = []
        
        # 步骤1: 收集所有游戏卡片信息
        for page in range(start_page, end_page + 1):
            page_games = self.extract_game_cards(page)
            all_game_cards.extend(page_games)
            time.sleep(2)
        
        total_games = len(all_game_cards)
        self.write_progress(f"📊 总共收集到 {total_games} 个游戏卡片")
        
        # 步骤2: 获取每个游戏的详细信息
        successful_games = []
        failed_games = []
        
        for i, game_info in enumerate(all_game_cards, 1):
            current_time = time.time()
            elapsed_time = current_time - self.start_time
            time_remaining = self.estimate_time_remaining(i-1, total_games, elapsed_time)
            
            self.write_progress(f"📝 进度: {i}/{total_games} ({i/total_games*100:.1f}%) - {game_info['title']}")
            self.write_progress(f"⏱️ 预计剩余时间: {time_remaining}")
            
            game_data = self.extract_game_details(game_info)
            if game_data:
                # 下载图片
                if game_info['thumbnail']:
                    image_path = f"public/images/games/y8/{game_info['slug']}.jpg"
                    self.download_image(game_info['thumbnail'], image_path)
                
                successful_games.append(game_data)
                self.write_progress(f"✅ 成功处理: {game_info['title']}")
            else:
                failed_games.append(game_info)
                self.write_progress(f"❌ 处理失败: {game_info['title']}")
            
            time.sleep(1)
        
        self.games = successful_games
        
        total_time = time.time() - self.start_time
        self.write_progress(f"\n🎯 爬取完成! 总耗时: {total_time/60:.1f} 分钟")
        self.write_progress(f"✅ 成功: {len(successful_games)} 个游戏")
        self.write_progress(f"❌ 失败: {len(failed_games)} 个游戏")
        self.write_progress(f"📈 成功率: {len(successful_games)/total_games*100:.1f}%")

    def save_to_json(self, filename="y8_games.json"):
        """保存数据为 JSON 文件"""
        try:
            with open(filename, 'w', encoding='utf-8') as f:
                json.dump(self.games, f, ensure_ascii=False, indent=2)
            self.write_progress(f"✅ 数据已保存到 {filename}")
        except Exception as e:
            self.write_progress(f"❌ 保存文件失败: {e}")

    def close(self):
        """关闭 WebDriver"""
        if hasattr(self, 'driver'):
            self.driver.quit()
            self.write_progress("🔒 WebDriver 已关闭")

def main():
    crawler = Y8GamesCrawlerWithProgress()
    
    try:
        crawler.crawl_all_pages(start_page=1, end_page=9)
        crawler.save_to_json("y8_games.json")
        crawler.write_progress(f"\n🎉 任务完成! 共爬取 {len(crawler.games)} 个 Y8 游戏")
        
    except KeyboardInterrupt:
        crawler.write_progress("\n⚠️ 用户中断操作")
    except Exception as e:
        crawler.write_progress(f"\n❌ 出现错误: {e}")
    finally:
        crawler.close()

if __name__ == "__main__":
    main() 