'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function EnhancedHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="hero">
      {/* 粒子背景效果 */}
      {mounted && (
        <div className="hero-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
      )}
      
      <div className="hero-content">
        <h1>🎯 World's Leading Free Gaming Platform</h1>
        <p>
          Join 2.5M+ players worldwide! 1200+ premium games, instant play, zero downloads.
          Experience the ultimate gaming destination with new content added daily.
        </p>
        <Link href="#featured" className="cta-button">
          🚀 Join Millions of Players
        </Link>
      </div>
    </section>
  );
} 