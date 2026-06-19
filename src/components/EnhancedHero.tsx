'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { categories, games } from '@/data/games';

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
        <h1>🎯 Free Browser Games, Organized for Quick Play</h1>
        <p>
          Browse {games.length} playable web games across {categories.length} focused genres.
          Find controls, category notes, related games, and clear third-party source disclosures before you launch.
        </p>
        <Link href="#featured" className="cta-button">
          🚀 Browse Featured Games
        </Link>
      </div>
    </section>
  );
} 
