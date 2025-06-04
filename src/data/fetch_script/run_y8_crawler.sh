#!/bin/bash

# Y8 游戏爬虫执行脚本
echo "🚀 开始 Y8 游戏网站数据抓取..."

# 检查 Python 环境
if ! command -v python3 &> /dev/null; then
    echo "❌ Python3 未安装，请先安装 Python3"
    exit 1
fi

# 检查 Chrome 浏览器 (适配 macOS)
chrome_found=false

# 检查常见的 Chrome 安装路径
if command -v google-chrome &> /dev/null; then
    chrome_found=true
elif command -v chromium-browser &> /dev/null; then
    chrome_found=true
elif command -v chrome &> /dev/null; then
    chrome_found=true
elif [ -f "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" ]; then
    chrome_found=true
    echo "✅ 找到 Google Chrome: /Applications/Google Chrome.app"
elif [ -f "/Applications/Chromium.app/Contents/MacOS/Chromium" ]; then
    chrome_found=true
    echo "✅ 找到 Chromium: /Applications/Chromium.app"
fi

if [ "$chrome_found" = false ]; then
    echo "❌ Chrome 浏览器未安装，请先安装 Google Chrome"
    echo "💡 下载地址: https://www.google.com/chrome/"
    exit 1
fi

# 检查 ChromeDriver
if ! command -v chromedriver &> /dev/null; then
    echo "❌ ChromeDriver 未安装，正在尝试安装..."
    if command -v brew &> /dev/null; then
        echo "📦 使用 Homebrew 安装 ChromeDriver..."
        brew install chromedriver
        
        # 如果仍然无法运行，可能需要解除安全限制
        if ! chromedriver --version &> /dev/null; then
            echo "⚠️  ChromeDriver 可能被 macOS 安全机制阻止"
            echo "💡 请在系统偏好设置 > 安全性与隐私 > 通用 中允许 ChromeDriver 运行"
            echo "💡 或者运行: xattr -d com.apple.quarantine $(which chromedriver)"
        fi
    else
        echo "❌ 请先安装 Homebrew 或手动安装 ChromeDriver"
        echo "💡 Homebrew 安装: /bin/bash -c \"\$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\""
        exit 1
    fi
else
    echo "✅ ChromeDriver 已安装"
fi

# 检查依赖
echo "📦 检查 Python 依赖..."
pip3 install -r requirements.txt

# 创建必要的目录
echo "📁 创建输出目录..."
mkdir -p ../../../public/images/games/y8

# 执行爬虫
echo "🕷️ 开始爬取 Y8 游戏数据..."
python3 fetch_y8.py

# 检查爬虫是否成功
if [ -f "y8_games.json" ]; then
    echo "✅ 游戏数据爬取完成!"
    
    # 转换数据格式
    echo "🔄 转换数据格式..."
    python3 convert_y8_data.py
    
    if [ -f "y8_games_data.ts" ]; then
        echo "✅ 数据转换完成!"
        echo "📁 生成的文件:"
        echo "  - y8_games.json (原始数据)"
        echo "  - y8_games_data.ts (TypeScript 格式)"
        echo "  - Y8_INTEGRATION_GUIDE.md (集成说明)"
        echo ""
        echo "🎉 Y8 游戏数据抓取完成!"
        echo "📖 请查看 Y8_INTEGRATION_GUIDE.md 了解如何集成数据"
    else
        echo "❌ 数据转换失败"
        exit 1
    fi
else
    echo "❌ 游戏数据爬取失败"
    exit 1
fi 