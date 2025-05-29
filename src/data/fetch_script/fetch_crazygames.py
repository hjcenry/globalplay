import os
import re
import json
import time
from tqdm import tqdm
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from bs4 import BeautifulSoup
from urllib.parse import urlparse, urljoin
import requests

BASE_URL = "https://www.crazygames.com"
HOT_URL = f"{BASE_URL}/hot"
IMG_DIR = "public/images/games/crazygames"
OUTPUT_JSON = "games_crazygames.json"
os.makedirs(IMG_DIR, exist_ok=True)

def slugify(text):
    return re.sub(r'[^a-z0-9]+', '-', text.lower()).strip('-')

def download_img(url, slug):
    ext = os.path.splitext(urlparse(url).path)[-1]
    if not ext or len(ext) > 5:
        ext = ".png"
    filename = f"{slug}{ext}"
    path = os.path.join(IMG_DIR, filename)
    if not os.path.exists(path):
        try:
            r = requests.get(url, timeout=10)
            with open(path, "wb") as f:
                f.write(r.content)
        except Exception as e:
            print(f"下载图片失败: {url} {e}")
            return ""
    return path.replace("public/", "/")

def check_embed_available(driver, detail_url):
    """检查详情页是否有Embed标签，如有则返回iframe地址"""
    try:
        driver.get(detail_url)
        time.sleep(2)
        html = driver.page_source
        soup = BeautifulSoup(html, "html.parser")
        # 检查是否存在 <span>Embed</span>
        embed_span = soup.find('span', string='Embed')
        if embed_span:
            # 从详情页URL提取slug，生成iframe地址
            slug = detail_url.rstrip('/').split('/')[-1]
            iframe_url = f"{BASE_URL}/embed/{slug}"
            return iframe_url
    except Exception as e:
        print(f"详情页检查失败: {detail_url} {e}")
    return None

def main():
    print("Selenium 抓取 CrazyGames 热门游戏（带hot标签且有Embed）...")
    games = []
    game_id = 1

    options = Options()
    options.add_argument('--headless')
    options.add_argument('--disable-gpu')
    options.add_argument('--no-sandbox')
    driver = webdriver.Chrome(options=options)

    print(f"抓取热门页面: {HOT_URL}")
    driver.get(HOT_URL)
    time.sleep(3)  # 等待页面渲染
    html = driver.page_source
    soup = BeautifulSoup(html, 'html.parser')
    
    # 抓取所有游戏卡片
    cards = soup.select('a.game-thumb-test-class')
    print(f"本页抓到 {len(cards)} 个游戏卡片")
    
    for card in tqdm(cards, desc="CrazyGames Hot Games"):
        # 判断是否有 hot 标签（svg use href="#hot-label"）
        svg = card.find('svg')
        if not svg or not svg.find('use', {'href': '#hot-label'}):
            continue
            
        img_tag = card.select_one('img.GameThumb_gameThumbImage__FSasr')
        title = img_tag['alt'] if img_tag and img_tag.has_attr('alt') else ''
        img = img_tag['src'] if img_tag and img_tag.has_attr('src') else ''
        detail_url = card['href']
        if not detail_url.startswith('http'):
            detail_url = urljoin(BASE_URL, detail_url)
        slug = detail_url.rstrip('/').split('/')[-1]
        
        # 检查详情页是否有Embed标签
        game_url = check_embed_available(driver, detail_url)
        if not game_url:
            print(f"跳过无Embed标签: {detail_url}")
            continue
            
        thumbnail = download_img(img, slug)
        games.append({
            "id": game_id,
            "title": title,
            "slug": slug,
            "category": "hot",
            "shortDescription": title,
            "description": title,
            "gameUrl": game_url,
            "thumbnail": thumbnail,
            "rating": 0,
            "playCount": 0,
            "tags": ["hot"],
            "controls": ""
        })
        game_id += 1

    driver.quit()
    # 输出json
    with open(OUTPUT_JSON, "w", encoding="utf-8") as f:
        json.dump(games, f, ensure_ascii=False, indent=2)
    print(f"已抓取 {len(games)} 个游戏，数据保存在 {OUTPUT_JSON}")

if __name__ == "__main__":
    main()
