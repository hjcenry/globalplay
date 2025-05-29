import { notFound } from 'next/navigation';
import Link from 'next/link';
import GameCard from '@/components/GameCard';
import { getGamesByCategory, categories } from '@/data/games';
import type { Metadata } from 'next';

interface CategoryPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    id: category.id,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = categories.find(cat => cat.id === params.id);
  
  if (!category) {
    return {
      title: 'Category Not Found - GlobalPlay Games',
    };
  }

  return {
    title: `${category.name} - Free Online Games | GlobalPlay.games`,
    description: `Play the best free ${category.name.toLowerCase()} online. Over ${category.count} games available to play instantly in your browser!`,
    keywords: `${category.name.toLowerCase()}, free online games, browser games, ${category.id} games`,
    openGraph: {
      title: `${category.name} - Free Online Games`,
      description: `Play the best free ${category.name.toLowerCase()} online. Over ${category.count} games available!`,
      url: `https://globalplay.games/categories/${category.id}`,
      type: 'website',
    },
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categories.find(cat => cat.id === params.id);
  
  if (!category) {
    notFound();
  }

  const games = getGamesByCategory(params.id);

  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="breadcrumb-nav">
          <Link href="/">Home</Link> &gt; 
          <Link href="/categories">Categories</Link> &gt; 
          <span>{category.name}</span>
        </div>
      </div>

      {/* Category Hero */}
      <section className="hero">
        <div className="hero-content">
          <h1>{category.icon} {category.name}</h1>
          <p>
            Discover amazing {category.name.toLowerCase()} with exciting gameplay and challenges. 
            Play {category.count.toLocaleString()} games for free, no download required!
          </p>
        </div>
      </section>

      {/* Games Grid */}
      <section className="featured-section">
        <div className="container">
          <h2 className="section-title">🎮 All {category.name}</h2>
          <div className="featured-carousel">
            {games.map((game) => (
              <GameCard key={game.id} game={game} showPlayIcon={true} />
            ))}
          </div>
          
          {games.length === 0 && (
            <div style={{ textAlign: 'center', padding: '3rem 0' }}>
              <h3>Coming Soon!</h3>
              <p>We're adding more {category.name.toLowerCase()} to our collection. Check back soon!</p>
              <Link href="/" className="cta-button" style={{ marginTop: '1rem', display: 'inline-block' }}>
                Browse All Games
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Other Categories */}
      <section className="categories-section">
        <div className="container">
          <h2 className="section-title">🎯 Explore Other Categories</h2>
          <div className="categories-grid">
            {categories.filter(cat => cat.id !== params.id).map((otherCategory) => (
              <Link
                key={otherCategory.id}
                href={`/categories/${otherCategory.id}`}
                className="category-card"
              >
                <div className="category-icon">{otherCategory.icon}</div>
                <div className="category-name">{otherCategory.name}</div>
                <div className="category-count">{otherCategory.count.toLocaleString()} games</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": category.name,
            "description": `Collection of free ${category.name.toLowerCase()} games`,
            "url": `https://globalplay.games/categories/${category.id}`,
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": games.length,
              "itemListElement": games.map((game, index) => ({
                "@type": "Game",
                "position": index + 1,
                "name": game.title,
                "url": `https://globalplay.games/games/${game.category}/${game.slug}`,
                "description": game.shortDescription
              }))
            }
          })
        }}
      />
    </>
  );
} 