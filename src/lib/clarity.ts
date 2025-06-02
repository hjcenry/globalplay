export const CLARITY_PROJECT_ID = 'rt5cu0qihv';

// 类型定义
declare global {
  interface Window {
    clarity: (...args: any[]) => void;
  }
}

// 检查 Clarity 是否可用
export const isClarityAvailable = (): boolean => {
  return typeof window !== 'undefined' && typeof window.clarity === 'function';
};

// 设置用户标识
export const identifyUser = (userId: string, sessionId?: string, pageId?: string): void => {
  if (isClarityAvailable()) {
    window.clarity('identify', userId, sessionId, pageId);
  }
};

// 设置自定义标签
export const setCustomTag = (key: string, value: string): void => {
  if (isClarityAvailable()) {
    window.clarity('set', key, value);
  }
};

// 同意追踪
export const consentGranted = (): void => {
  if (isClarityAvailable()) {
    window.clarity('consent');
  }
};

// 游戏相关的 Clarity 标签设置
export const clarityGameEvents = {
  // 设置当前游戏信息
  setCurrentGame: (gameName: string, category: string, gameId: string) => {
    setCustomTag('current_game', gameName);
    setCustomTag('game_category', category);
    setCustomTag('game_id', gameId);
  },

  // 设置用户游戏偏好
  setGamePreference: (favoriteCategory: string, gamesPlayed: number) => {
    setCustomTag('favorite_category', favoriteCategory);
    setCustomTag('games_played_count', gamesPlayed.toString());
  },

  // 设置用户行为标签
  setUserBehavior: (behaviorType: 'casual' | 'engaged' | 'power_user') => {
    setCustomTag('user_behavior_type', behaviorType);
  },

  // 设置设备信息
  setDeviceInfo: (isMobile: boolean, screenSize: string) => {
    setCustomTag('device_type', isMobile ? 'mobile' : 'desktop');
    setCustomTag('screen_size', screenSize);
  },

  // 设置用户会话信息
  setSessionInfo: (sessionDuration: number, pagesViewed: number) => {
    setCustomTag('session_duration', sessionDuration.toString());
    setCustomTag('pages_viewed', pagesViewed.toString());
  },
}; 