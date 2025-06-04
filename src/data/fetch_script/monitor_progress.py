#!/usr/bin/env python3
"""
Y8爬虫实时进度监控脚本
实时显示爬虫运行状态和进度
"""

import os
import time
import subprocess
from datetime import datetime

def clear_screen():
    """清屏"""
    os.system('clear' if os.name == 'posix' else 'cls')

def check_crawler_running():
    """检查爬虫是否在运行"""
    try:
        result = subprocess.run(['ps', 'aux'], capture_output=True, text=True)
        return 'fetch_y8_with_progress.py' in result.stdout
    except:
        return False

def get_progress_stats(progress_file="progress.txt"):
    """从进度文件获取统计信息"""
    if not os.path.exists(progress_file):
        return None
    
    try:
        with open(progress_file, 'r', encoding='utf-8') as f:
            lines = f.readlines()
        
        if not lines:
            return None
        
        stats = {
            'total_lines': len(lines),
            'latest_line': lines[-1].strip() if lines else "",
            'start_time': None,
            'current_progress': None,
            'estimated_remaining': None,
            'successful_count': 0,
            'failed_count': 0,
            'current_page': 0,
            'total_games': 0
        }
        
        # 分析进度信息
        for line in lines:
            line = line.strip()
            
            if "开始爬取 Y8 游戏网站" in line:
                time_str = line.split(']')[0].replace('[', '')
                stats['start_time'] = time_str
            
            elif "进度:" in line and "/" in line:
                # 提取当前进度
                try:
                    progress_part = line.split("进度:")[1].split("(")[0].strip()
                    current, total = progress_part.split("/")
                    stats['current_progress'] = (int(current), int(total))
                except:
                    pass
            
            elif "预计剩余时间:" in line:
                stats['estimated_remaining'] = line.split("预计剩余时间:")[1].strip()
            
            elif "成功处理:" in line:
                stats['successful_count'] += 1
            
            elif "处理失败:" in line:
                stats['failed_count'] += 1
            
            elif "总共收集到" in line and "个游戏卡片" in line:
                try:
                    total_str = line.split("总共收集到")[1].split("个游戏卡片")[0].strip()
                    stats['total_games'] = int(total_str)
                except:
                    pass
            
            elif "在第" in line and "页找到" in line:
                try:
                    page_str = line.split("在第")[1].split("页找到")[0].strip()
                    stats['current_page'] = max(stats['current_page'], int(page_str))
                except:
                    pass
        
        return stats
        
    except Exception as e:
        return {'error': str(e)}

def display_progress():
    """显示进度信息"""
    while True:
        clear_screen()
        
        print("=" * 80)
        print("🚀 Y8 游戏爬虫实时监控")
        print("=" * 80)
        print(f"⏰ 当前时间: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        
        # 检查爬虫是否在运行
        is_running = check_crawler_running()
        print(f"🔄 爬虫状态: {'✅ 运行中' if is_running else '❌ 未运行'}")
        
        if not is_running:
            print("\n⚠️ 爬虫进程未检测到，可能已完成或出现错误")
            print("💡 可以运行: python3 fetch_y8_with_progress.py 重新启动")
        
        print("-" * 80)
        
        # 获取进度统计
        stats = get_progress_stats()
        
        if stats is None:
            print("📄 进度文件不存在，爬虫可能尚未开始")
        elif 'error' in stats:
            print(f"❌ 读取进度文件出错: {stats['error']}")
        else:
            # 显示详细进度信息
            if stats['start_time']:
                print(f"🕐 开始时间: {stats['start_time']}")
            
            if stats['current_page'] > 0:
                print(f"📄 当前页面: 第 {stats['current_page']} 页")
            
            if stats['total_games'] > 0:
                print(f"🎮 发现游戏: {stats['total_games']} 个")
            
            if stats['current_progress']:
                current, total = stats['current_progress']
                percentage = (current / total) * 100 if total > 0 else 0
                print(f"📊 详情抓取: {current}/{total} ({percentage:.1f}%)")
                
                # 进度条
                bar_length = 50
                filled_length = int(bar_length * current // total) if total > 0 else 0
                bar = '█' * filled_length + '-' * (bar_length - filled_length)
                print(f"📈 进度条: |{bar}| {percentage:.1f}%")
            
            if stats['estimated_remaining']:
                print(f"⏱️ 预计剩余: {stats['estimated_remaining']}")
            
            success_total = stats['successful_count'] + stats['failed_count']
            if success_total > 0:
                success_rate = (stats['successful_count'] / success_total) * 100
                print(f"✅ 成功: {stats['successful_count']} 个")
                print(f"❌ 失败: {stats['failed_count']} 个")
                print(f"📈 成功率: {success_rate:.1f}%")
        
        print("-" * 80)
        
        # 显示最新日志
        if stats and stats.get('latest_line'):
            print("📝 最新状态:")
            print(f"   {stats['latest_line']}")
        
        print("-" * 80)
        print("💡 按 Ctrl+C 退出监控")
        print("🔄 每5秒自动刷新...")
        
        try:
            time.sleep(5)
        except KeyboardInterrupt:
            print("\n\n👋 监控已停止")
            break

if __name__ == "__main__":
    display_progress() 