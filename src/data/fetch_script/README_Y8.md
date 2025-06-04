# Y8 游戏网站爬虫使用说明

## 🎯 功能概述

这个爬虫脚本专门用于抓取 `zh.y8.com` 网站的热门游戏数据，包括：
- 游戏标题、封面图片、详情页链接
- 游戏 iframe 嵌入地址
- 游戏描述、评分、分类信息
- 自动下载并本地化存储游戏封面图片

## 📋 系统要求

### Python 依赖
```bash
pip install requests beautifulsoup4 selenium
```

### Chrome WebDriver
确保系统已安装 Chrome 浏览器和对应的 ChromeDriver：
- 下载地址: https://chromedriver.chromium.org/
- 或使用包管理器安装: `brew install chromedriver` (macOS)

## 🚀 使用步骤

### 1. 准备环境
```bash
# 进入脚本目录
cd src/data/fetch_script

# 安装依赖
pip install -r requirements.txt
```

### 2. 运行爬虫
```bash
# 爬取所有页面 (1-9页)
python fetch_y8.py

# 如果需要指定页面范围，可以修改脚本中的参数
# crawler.crawl_all_pages(start_page=1, end_page=5)
```

### 3. 数据转换
```bash
# 转换爬取的数据为项目格式
python convert_y8_data.py
```

## 📊 输出文件

### 爬虫输出
- `y8_games.json` - 原始 JSON 格式的游戏数据
- `public/images/games/y8/` - 下载的游戏封面图片

### 转换输出
- `y8_games_data.ts` - TypeScript 格式的游戏数据
- `Y8_INTEGRATION_GUIDE.md` - 数据集成说明

## 🔧 爬虫工作流程

### 阶段 1: 收集游戏卡片
1. 遍历 Y8 热门游戏页面 (第1-9页)
2. 提取每个游戏卡片的基本信息：
   - 游戏标题 (img alt 属性)
   - 封面图片 (img src 或 data-src)
   - 详情页链接 (父级 a 标签 href)
   - 游戏 slug (从链接提取)

### 阶段 2: 获取详细信息
1. 访问每个游戏的详情页
2. 查找并提取 iframe 嵌入地址：
   - 优先查找 `#item-direct-container` iframe
   - 提取 `src` 或 `data-src` 属性
3. 提取游戏描述、评分、分类等信息
4. 下载并保存游戏封面图片

### 阶段 3: 数据处理
1. 验证游戏数据完整性
2. 映射游戏分类到项目标准分类
3. 生成符合项目格式的游戏对象
4. 计算随机的播放次数等数据

## 🎮 数据字段说明

每个爬取的游戏包含以下字段：

```typescript
{
  id: string;              // 游戏唯一标识符 (与 slug 相同)
  slug: string;            // URL 友好的游戏标识符
  title: string;           // 游戏标题
  description: string;     // 游戏详细描述
  shortDescription: string; // 游戏简短描述
  category: string;        // 游戏分类 (action/puzzle/strategy等)
  thumbnail: string;       // 本地封面图片路径
  gameUrl: string;         // iframe 嵌入地址
  rating: number;          // 游戏评分 (1-5)
  playCount: number;       // 游戏播放次数
  tags: string[];          // 游戏标签
  controls: string;        // 控制方式
  featured: boolean;       // 是否为精选游戏
  trending: boolean;       // 是否为热门游戏
  isNew: boolean;          // 是否为新游戏
}
```

## 🔍 分类映射

爬虫会将 Y8 的游戏分类映射到项目标准分类：

| Y8 分类 | 项目分类 | 说明 |
|---------|----------|------|
| action | action | 动作游戏 |
| puzzle | puzzle | 益智游戏 |
| strategy | strategy | 策略游戏 |
| racing | racing | 赛车游戏 |
| adventure | adventure | 冒险游戏 |
| shooting | shooting | 射击游戏 |
| sport | action | 体育游戏 → 动作 |
| arcade | action | 街机游戏 → 动作 |
| platform | action | 平台游戏 → 动作 |
| rpg | adventure | 角色扮演 → 冒险 |

## ⚠️ 注意事项

### 1. 访问限制
- 脚本使用延迟避免过快请求
- 建议在非高峰时段运行
- 如遇到反爬限制，可调整延迟时间

### 2. 数据质量
- 并非所有游戏都有有效的 iframe 地址
- 部分游戏可能无法正常加载
- 脚本会自动跳过无效游戏

### 3. 图片下载
- 图片下载失败不会影响游戏数据
- 可手动补充缺失的图片
- 图片格式统一转换为 .jpg

## 🐛 故障排除

### ChromeDriver 问题
```bash
# 更新 ChromeDriver
brew upgrade chromedriver

# 检查 Chrome 版本兼容性
chrome --version
chromedriver --version
```

### 网络连接问题
```bash
# 测试网站连接
curl -I https://zh.y8.com/popular/games

# 检查代理设置 (如果使用代理)
```

### 权限问题
```bash
# 确保有写入权限
chmod +w public/images/games/
mkdir -p public/images/games/y8/
```

## 📈 性能优化

1. **并发处理**: 可考虑使用多线程处理详情页抓取
2. **缓存机制**: 避免重复下载已存在的图片
3. **断点续传**: 支持从中断点继续抓取
4. **数据去重**: 避免抓取重复的游戏

## 🔄 定期更新

建议定期运行爬虫以获取最新的热门游戏：
```bash
# 创建定时任务 (可选)
crontab -e

# 每周运行一次 (周日凌晨2点)
0 2 * * 0 /path/to/python /path/to/fetch_y8.py
```

## 📞 技术支持

如遇到问题，请检查：
1. 网络连接是否正常
2. Chrome 和 ChromeDriver 版本是否兼容
3. Python 依赖是否完整安装
4. Y8 网站结构是否有变化

爬虫设计具有一定的容错性，但网站结构变化可能需要调整选择器。 