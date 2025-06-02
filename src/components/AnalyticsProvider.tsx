'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { pageview } from '@/lib/gtag';
import { setCustomTag } from '@/lib/clarity';

export default function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [pageCount, setPageCount] = useState(0);
  const [sessionStart] = useState(Date.now());

  useEffect(() => {
    // 只在生产环境中追踪页面浏览
    if (process.env.NODE_ENV === 'production') {
      pageview(pathname);
    }

    // 更新页面计数
    setPageCount(prev => prev + 1);

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
  }, [pathname, pageCount, sessionStart]);

  return <>{children}</>;
} 