export const GA_TRACKING_ID = 'G-KPY9CG8WPE';

// 类型定义
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// 检查 gtag 是否可用
export const isGtagAvailable = (): boolean => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

// 页面浏览追踪
export const pageview = (url: string): void => {
  if (isGtagAvailable()) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// 事件追踪
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}): void => {
  if (isGtagAvailable()) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// 游戏相关的特定事件追踪
export const trackGameEvents = {
  // 游戏开始
  gameStart: (gameName: string, category: string) => {
    event({
      action: 'game_start',
      category: 'Games',
      label: `${category}/${gameName}`,
    });
  },

  // 游戏完成
  gameComplete: (gameName: string, category: string, score?: number) => {
    event({
      action: 'game_complete',
      category: 'Games',
      label: `${category}/${gameName}`,
      value: score,
    });
  },

  // 游戏分享
  gameShare: (gameName: string, platform: string) => {
    event({
      action: 'share',
      category: 'Games',
      label: `${gameName} - ${platform}`,
    });
  },

  // 搜索
  search: (searchTerm: string) => {
    event({
      action: 'search',
      category: 'Site Navigation',
      label: searchTerm,
    });
  },

  // 分类浏览
  categoryView: (categoryName: string) => {
    event({
      action: 'category_view',
      category: 'Site Navigation',
      label: categoryName,
    });
  },
}; 