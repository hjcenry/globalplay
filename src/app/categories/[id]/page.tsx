import { notFound } from 'next/navigation';
import Link from 'next/link';
import GameCard from '@/components/GameCard';
import { getGamesByCategory, categories } from '@/data/games';
import type { Metadata } from 'next';
import { canonical } from '@/lib/seo';

interface CategoryPageProps {
  params: {
    id: string;
  };
}

const categoryDetails: Record<string, { intro: string; tips: string[] }> = {
  action: {
    intro:
      'Action games usually reward fast movement, timing, and repeated short attempts. Check controls first, then use related games to find similar pacing.',
    tips: ['Keyboard focus matters: click inside the game frame before using keys.', 'Short rounds are good for testing whether a title works well on your device.'],
  },
  puzzle: {
    intro:
      'Puzzle games are better for slower sessions where logic, matching, path planning, or spatial reasoning matters more than reaction speed.',
    tips: ['Mouse and touch controls are common in this category.', 'If a puzzle has no tutorial, start with the first few levels to learn its rules.'],
  },
  strategy: {
    intro:
      'Strategy games emphasize planning, upgrades, resource choices, and longer-term progress. They may take a few minutes before the core loop is clear.',
    tips: ['Read upgrade labels carefully before spending resources.', 'Pause when available so you can review the next move.'],
  },
  racing: {
    intro:
      'Racing games focus on steering, acceleration, timing, and track memorization. Small control changes often matter more than speed alone.',
    tips: ['Try keyboard controls before switching devices.', 'Restarting a track is often faster than recovering from a major crash.'],
  },
  shooting: {
    intro:
      'Shooting games are aim-focused browser games with target, defense, survival, or arcade loops. Play in fullscreen when precision matters.',
    tips: ['Mouse sensitivity varies by iframe provider and browser.', 'Avoid real-world weapon guidance; these listings are for arcade gameplay only.'],
  },
  adventure: {
    intro:
      'Adventure games cover exploration, platforming, quests, and longer levels. Controls and pacing vary more here than in most categories.',
    tips: ['Check whether the game uses keyboard, mouse, or both.', 'If a game saves progress locally, clearing browser storage may reset it.'],
  },
};

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
    alternates: {
      canonical: canonical(`/categories/${category.id}`),
    },
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
  const detail = categoryDetails[params.id];

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
            {detail?.intro || `Browse ${category.name.toLowerCase()} that can be launched directly in the browser.`}
          </p>
        </div>
      </section>

      {detail && (
        <section className="featured-section">
          <div className="container">
            <h2 className="section-title">Before You Play</h2>
            <div className="features-grid">
              {detail.tips.map((tip) => (
                <div key={tip} className="feature-card">
                  <div className="feature-icon">✓</div>
                  <h3 className="feature-title">Category Note</h3>
                  <p className="feature-description">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

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
              <h3>No games listed in this category yet</h3>
              <p>Browse all games or try another category while this section is updated.</p>
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
