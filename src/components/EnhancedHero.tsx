'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getIndexableCategories, getIndexableGames } from '@/data/games';

export default function EnhancedHero() {
  const [mounted, setMounted] = useState(false);
  const reviewedGameCount = getIndexableGames().length;
  const reviewedCategoryCount = getIndexableCategories().length;

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
          Browse {reviewedGameCount} reviewed web games across {reviewedCategoryCount} focused genres.
          Find controls, category notes, related games, and clear third-party source disclosures before you launch.
        </p>
        <Link href="#featured" className="cta-button">
          🚀 Browse Featured Games
        </Link>
      </div>
    </section>
  );
} 
