#!/usr/bin/env python3
"""
Y8 爬虫环境测试脚本
验证所有依赖是否正确安装和配置
"""

import sys
import os

def test_imports():
    """测试必要的 Python 包导入"""
    print("🔍 测试 Python 包导入...")
    
    try:
        import requests
        print("✅ requests 包导入成功")
    except ImportError as e:
        print(f"❌ requests 包导入失败: {e}")
        return False
    
    try:
        from bs4 import BeautifulSoup
        print("✅ BeautifulSoup 包导入成功")
    except ImportError as e:
        print(f"❌ BeautifulSoup 包导入失败: {e}")
        return False
    
    try:
        from selenium import webdriver
        from selenium.webdriver.chrome.options import Options
        print("✅ Selenium 包导入成功")
    except ImportError as e:
        print(f"❌ Selenium 包导入失败: {e}")
        return False
    
    return True

def test_chrome_webdriver():
    """测试 Chrome WebDriver 是否可以正常启动"""
    print("\n🚀 测试 Chrome WebDriver...")
    
    try:
        from selenium import webdriver
        from selenium.webdriver.chrome.options import Options
        
        chrome_options = Options()
        chrome_options.add_argument('--headless')
        chrome_options.add_argument('--no-sandbox')
        chrome_options.add_argument('--disable-dev-shm-usage')
        chrome_options.add_argument('--disable-gpu')
        
        driver = webdriver.Chrome(options=chrome_options)
        print("✅ Chrome WebDriver 启动成功")
        
        # 测试访问一个简单页面
        driver.get("https://www.google.com")
        title = driver.title
        print(f"✅ 成功访问网页，标题: {title}")
        
        driver.quit()
        print("✅ Chrome WebDriver 关闭成功")
        return True
        
    except Exception as e:
        print(f"❌ Chrome WebDriver 测试失败: {e}")
        print("💡 可能的解决方案:")
        print("   1. 确保已安装 Chrome 浏览器")
        print("   2. 确保已安装 ChromeDriver: brew install chromedriver")
        print("   3. 移除安全限制: xattr -d com.apple.quarantine $(which chromedriver)")
        return False

def test_network_access():
    """测试网络访问是否正常"""
    print("\n🌐 测试网络访问...")
    
    try:
        import requests
        
        # 测试访问 Y8 网站
        response = requests.get("https://www.y8.com/popular/games", timeout=10)
        if response.status_code == 200:
            print("✅ Y8 网站访问成功")
            return True
        else:
            print(f"⚠️ Y8 网站访问异常，状态码: {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ 网络访问测试失败: {e}")
        print("💡 请检查网络连接或防火墙设置")
        return False

def test_directory_permissions():
    """测试目录写入权限"""
    print("\n📁 测试目录权限...")
    
    try:
        # 测试创建输出目录
        output_dir = "../../../public/images/games/y8"
        os.makedirs(output_dir, exist_ok=True)
        
        # 测试写入文件
        test_file = os.path.join(output_dir, "test.txt")
        with open(test_file, 'w') as f:
            f.write("测试文件")
        
        # 清理测试文件
        os.remove(test_file)
        
        print("✅ 目录权限测试通过")
        return True
        
    except Exception as e:
        print(f"❌ 目录权限测试失败: {e}")
        print("💡 请确保有写入权限到 public/images/games/y8/ 目录")
        return False

def main():
    """主测试函数"""
    print("🧪 Y8 爬虫环境测试开始...\n")
    
    tests = [
        ("Python 包导入", test_imports),
        ("Chrome WebDriver", test_chrome_webdriver),
        ("网络访问", test_network_access),
        ("目录权限", test_directory_permissions)
    ]
    
    passed = 0
    total = len(tests)
    
    for test_name, test_func in tests:
        print(f"📋 正在执行: {test_name}")
        if test_func():
            passed += 1
        print()
    
    print("="*50)
    print(f"🎯 测试完成: {passed}/{total} 通过")
    
    if passed == total:
        print("🎉 所有测试通过！环境配置正确，可以运行 Y8 爬虫")
        return True
    else:
        print("⚠️ 部分测试失败，请根据上述提示修复问题")
        return False

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1) 