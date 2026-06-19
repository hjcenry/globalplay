'use client';

import { useEffect, useState } from 'react';
import { categories, games, getFeaturedGames, getNewGames } from '@/data/games';

interface StatItemProps {
  icon: string;
  number: string;
  label: string;
  delay: number;
}

function StatItem({ icon, number, label, delay }: StatItemProps) {
  const [count, setCount] = useState(0);
  const targetNumber = parseInt(number.replace(/[^0-9]/g, ''));

  useEffect(() => {
    const timer = setTimeout(() => {
      let current = 0;
      const increment = targetNumber / 50;
      const counter = setInterval(() => {
        current += increment;
        if (current >= targetNumber) {
          setCount(targetNumber);
          clearInterval(counter);
        } else {
          setCount(Math.floor(current));
        }
      }, 30);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [targetNumber, delay]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M+`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}K+`;
    }
    return num.toString();
  };

  return (
    <div className="stat-card">
      <div className="stat-icon">{icon}</div>
      <div className="stat-number">{formatNumber(count)}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function StatsSection() {
  const featuredCount = getFeaturedGames().length;
  const newCount = getNewGames().length;

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          <StatItem 
            icon="🎮" 
            number={games.length.toString()} 
            label="Available Games"
            delay={200}
          />
          <StatItem 
            icon="🎯" 
            number={categories.length.toString()} 
            label="Game Categories"
            delay={400}
          />
          <StatItem 
            icon="⭐" 
            number={featuredCount.toString()} 
            label="Featured Picks"
            delay={600}
          />
          <StatItem 
            icon="🆕" 
            number={newCount.toString()} 
            label="Recent Adds"
            delay={800}
          />
        </div>
      </div>
    </section>
  );
} 
