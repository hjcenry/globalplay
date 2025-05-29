import os
import re
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import json
from tqdm import tqdm

BASE_URL = "https://www.kongregate.com"
LIST_URL = f"{BASE_URL}/games?sort=rating"
IMG_DIR = "public/images/games/kongregate"
OUTPUT_JSON = "games_kongregate.json"
os.makedirs(IMG_DIR, exist_ok=True)

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

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
            r = requests.get(url, timeout=10, headers=HEADERS)
            with open(path, "wb") as f:
                f.write(r.content)
        except Exception as e:
            print(f"下载图片失败: {url} {e}")
            return ""
    return path.replace("public/", "/")

def get_game_iframe_url(detail_url):
    try:
        r = requests.get(detail_url, timeout=10, headers=HEADERS)
        soup = BeautifulSoup(r.text, "html.parser")
        # 跳过Flash游戏
        if '.swf' in r.text:
            return None
        # 检查iframe/canvas/unity
        iframe = soup.find('iframe')
        if iframe and iframe.has_attr('src'):
            return iframe['src']
        # 也可根据canvas/unity容器等进一步判断
        # canvas = soup.find('canvas')
        # if canvas:
        #     return detail_url
    except Exception as e:
        print(f"详情页解析失败: {detail_url} {e}")
    return None

def main():
    print("抓取 Kongregate 高分游戏（新版结构，排除Flash）...")
    games = []
    game_id = 1
    page = 1
    while True:
        url = f"{BASE_URL}/games?sort=rating&page={page}"
        r = requests.get(url, headers=HEADERS)
        soup = BeautifulSoup(r.text, "html.parser")
        cards = soup.select('k-game-card')
        print(f"本页抓到 {len(cards)} 个游戏卡片")
        if not cards:
            break
        found = False
        for card in tqdm(cards, desc=f"Kongregate Page {page}"):
            detail_url = card.get('href')
            if not detail_url:
                continue
            title_tag = card.select_one('[slot="title"]')
            title = title_tag.text.strip() if title_tag else ''
            img_tag = card.select_one('img')
            img = img_tag['src'] if img_tag and img_tag.has_attr('src') else ''
            rating_tag = card.select_one('k-card-status-action[type="rating"]')
            try:
                rating = float(rating_tag.text.strip()) if rating_tag else None
            except:
                rating = None
            # 只采集评分>=4.5
            if rating is None or rating < 4.5:
                continue
            # 采集标签
            tags = [k_tag.text.strip() for k_tag in card.select('k-tag')]
            # 进入详情页，跳过Flash
            game_url = get_game_iframe_url(detail_url)
            if not game_url:
                print(f"跳过Flash或无iframe: {detail_url}")
                continue
            thumbnail = download_img(img, slugify(title))
            games.append({
                "id": game_id,
                "title": title,
                "slug": slugify(title),
                "category": "kongregate",
                "shortDescription": title,
                "description": title,
                "gameUrl": game_url,
                "thumbnail": thumbnail,
                "rating": rating,
                "playCount": 0,
                "tags": tags,
                "controls": ""
            })
            game_id += 1
            found = True
        if not found:
            break
        page += 1
    # 输出json
    with open(OUTPUT_JSON, "w", encoding="utf-8") as f:
        json.dump(games, f, ensure_ascii=False, indent=2)
    print(f"已抓取 {len(games)} 个游戏，数据保存在 {OUTPUT_JSON}")

if __name__ == "__main__":
    main()
