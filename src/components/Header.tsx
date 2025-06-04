'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="header">
      <div className="nav-container">
        <Link href="/" className="logo">
          🎮 GlobalPlay
        </Link>
        <div className="search-bar">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              className="search-input"
              placeholder="Search games..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
        </div>
        <nav>
          <ul className="nav-menu">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/all-games">All Games</Link></li>
            <li><Link href="/#categories">Categories</Link></li>
            <li><Link href="/trending">Trending</Link></li>
            <li><Link href="/new-games">New Games</Link></li>
            <li><Link href="/guides">Guides</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
} 