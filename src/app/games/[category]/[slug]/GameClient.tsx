"use client";
import { useEffect, useRef, useState } from "react";

export default function GameClient({ game }: { game: any }) {
  const [iframeSrc, setIframeSrc] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (game?.gameUrl) {
      console.log('Loading game:', game.title, 'URL:', game.gameUrl);
      setIframeSrc(game.gameUrl + '?t=' + Date.now());
      setLoading(true);
      setError(null);
    }
  }, [game?.gameUrl]);

  // 监听 iframe 加载完成
  const handleLoad = () => {
    console.log('Game iframe loaded successfully');
    setTimeout(() => setLoading(false), 1500);
  };

  // 监听 iframe 错误
  const handleError = () => {
    console.error('Game iframe failed to load');
    setError('Failed to load game. Please try refreshing the page.');
    setLoading(false);
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
              onClick={() => {
                setError(null);
                setLoading(true);
                setIframeSrc(game.gameUrl + '?t=' + Date.now());
              }}
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