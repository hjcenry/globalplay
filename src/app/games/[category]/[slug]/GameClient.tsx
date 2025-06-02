"use client";
import { useEffect, useRef, useState } from "react";
import { trackGameEvents, event } from "@/lib/gtag";
import { clarityGameEvents } from "@/lib/clarity";

export default function GameClient({ game }: { game: any }) {
  const [iframeSrc, setIframeSrc] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [gameStarted, setGameStarted] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (game?.gameUrl) {
      console.log('Loading game:', game.title, 'URL:', game.gameUrl);
      setIframeSrc(game.gameUrl + '?t=' + Date.now());
      setLoading(true);
      setError(null);
      
      // 追踪游戏开始事件 (Google Analytics)
      if (!gameStarted) {
        trackGameEvents.gameStart(game.title, game.category);
        setGameStarted(true);
      }

      // 设置 Clarity 标签
      clarityGameEvents.setCurrentGame(game.title, game.category, game.slug);
      
      // 检测设备类型并设置 Clarity 标签
      const isMobile = window.innerWidth <= 768;
      const screenSize = `${window.innerWidth}x${window.innerHeight}`;
      clarityGameEvents.setDeviceInfo(isMobile, screenSize);
    }
  }, [game?.gameUrl, game?.title, game?.category, game?.slug, gameStarted]);

  // 监听 iframe 加载完成
  const handleLoad = () => {
    console.log('Game iframe loaded successfully');
    
    // 追踪游戏加载完成事件 (Google Analytics)
    event({
      action: 'game_loaded',
      category: 'Games',
      label: `${game.category}/${game.title}`,
    });
    
    setTimeout(() => setLoading(false), 1500);
  };

  // 监听 iframe 错误
  const handleError = () => {
    console.error('Game iframe failed to load');
    
    // 追踪游戏加载错误事件 (Google Analytics)
    event({
      action: 'game_load_error',
      category: 'Games',
      label: `${game.category}/${game.title}`,
    });
    
    setError('Failed to load game. Please try refreshing the page.');
    setLoading(false);
  };

  // 重试按钮处理
  const handleRetry = () => {
    // 追踪重试事件 (Google Analytics)
    event({
      action: 'game_retry',
      category: 'Games',
      label: `${game.category}/${game.title}`,
    });
    
    setError(null);
    setLoading(true);
    setIframeSrc(game.gameUrl + '?t=' + Date.now());
  };

  return (
    <div className="game-wrapper">
      <iframe
        ref={iframeRef}
        className="game-frame"
        src={iframeSrc}
        data-game-url={game.gameUrl}
        title={`${game.title} Game`}
        allowFullScreen
        loading="lazy"
        onLoad={handleLoad}
        onError={handleError}
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-presentation allow-top-navigation allow-top-navigation-by-user-activation allow-downloads"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
      />
      {loading && !error && (
        <div className="game-loading" id="game-loading">
          <div className="loading-content">
            <div className="loading-spinner"></div>
            <h3>🎮 Loading {game.title}...</h3>
            <p>Please wait while we prepare your gaming experience</p>
          </div>
        </div>
      )}
      {error && (
        <div className="game-error">
          <div className="error-content">
            <h3>❌ Failed to Load Game</h3>
            <p>{error}</p>
            <button 
              onClick={handleRetry}
              className="retry-button"
            >
              🔄 Retry
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 