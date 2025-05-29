import Link from 'next/link';
import GameCard from '@/components/GameCard';
import { searchGames } from '@/data/games';
import type { Metadata } from 'next';

interface SearchPageProps {
  searchParams: {
    q?: string;
  };
}

export async function generateMetadata({ searchParams }: SearchPageProps): Promise<Metadata> {
  const query = searchParams.q || '';
  
  return {
    title: query ? `Search Results for "${query}" - GlobalPlay Games` : 'Search Games - GlobalPlay Games',
    description: query ? `Find games matching "${query}". Browse our collection of free online games.` : 'Search our collection of free online games.',
    robots: 'noindex, follow',
  };
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.q || '';
  const results = query ? searchGames(query) : [];

  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="breadcrumb-nav">
          <Link href="/">Home</Link> &gt; 
          <span>Search{query && ` for "${query}"`}</span>
        </div>
      </div>

      {/* Search Results */}
      <section className="featured-section">
        <div className="container">
          <h1 className="section-title">
            {query ? `Search Results for "${query}"` : 'Search Games'}
          </h1>
          
          {query && (
            <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#666' }}>
              Found {results.length} game{results.length !== 1 ? 's' : ''} matching your search
            </p>
          )}
          
          {results.length > 0 ? (
            <div className="featured-carousel">
              {results.map((game) => (
                <GameCard key={game.id} game={game} showPlayIcon={true} />
              ))}
            </div>
          ) : query ? (
            <div style={{ textAlign: 'center', padding: '3rem 0' }}>
              <h3>No games found</h3>
              <p>Sorry, we couldn't find any games matching "{query}".</p>
              <p>Try searching with different keywords or browse our categories:</p>
              <Link href="/categories" className="cta-button" style={{ marginTop: '1rem', display: 'inline-block' }}>
                Browse Categories
              </Link>
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '3rem 0' }}>
              <h3>Start Your Search</h3>
              <p>Use the search bar above to find your favorite games!</p>
              <Link href="/" className="cta-button" style={{ marginTop: '1rem', display: 'inline-block' }}>
                Browse All Games
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
} 