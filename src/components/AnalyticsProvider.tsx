'use client';

import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { pageview } from '@/lib/gtag';
import { setCustomTag } from '@/lib/clarity';

export default function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [pageCount, setPageCount] = useState(0);
  const [sessionStart] = useState(Date.now());
  const lastPathnameRef = useRef<string>('');

  // 监听路径变化并更新页面计数
  useEffect(() => {
    // 只在路径真正改变时更新计数（避免重复计数）
    if (pathname !== lastPathnameRef.current) {
      lastPathnameRef.current = pathname;
      setPageCount(prev => prev + 1);
    }
  }, [pathname]);

  // 处理页面浏览追踪和 Clarity 标签设置
  useEffect(() => {
    // 只在生产环境中追踪页面浏览
    if (process.env.NODE_ENV === 'production') {
      pageview(pathname);
    }

    // 设置 Clarity 页面信息
    if (typeof window !== 'undefined') {
      // 设置当前页面类型
      let pageType = 'other';
      if (pathname === '/') pageType = 'home';
      else if (pathname.startsWith('/games/')) pageType = 'game';
      else if (pathname.startsWith('/categories/')) pageType = 'category';
      else if (pathname === '/sitemap') pageType = 'sitemap';
      else if (pathname === '/search') pageType = 'search';

      setCustomTag('page_type', pageType);
      setCustomTag('current_path', pathname);
    }
  }, [pathname]);

  // 单独处理会话信息和用户行为标签（基于 pageCount 变化）
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // 设置会话信息
      const sessionDuration = Math.floor((Date.now() - sessionStart) / 1000);
      setCustomTag('session_duration', sessionDuration.toString());
      setCustomTag('pages_viewed', pageCount.toString());

      // 设置用户行为类型
      let userBehaviorType: 'casual' | 'engaged' | 'power_user' = 'casual';
      if (pageCount > 10) userBehaviorType = 'power_user';
      else if (pageCount > 3) userBehaviorType = 'engaged';
      
      setCustomTag('user_behavior_type', userBehaviorType);
    }
  }, [pageCount, sessionStart]);

  return <>{children}</>;
} 