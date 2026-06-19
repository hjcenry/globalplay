import Link from 'next/link';
import GameCard from '@/components/GameCard';
import { getIndexableCategories, getIndexableCategoryCount, getIndexableGames } from '@/data/games';
import { canonical } from '@/lib/seo';
import type { Metadata } from 'next';

const categoryNotes: Record<string, { summary: string; bestFor: string }> = {
  action: {
    summary: 'Fast reactions, movement, timing, and short rounds for players who want immediate challenge.',
    bestFor: 'Quick sessions, platforming, combat, and reflex practice.',
  },
  puzzle: {
    summary: 'Logic-first games built around pattern recognition, spatial reasoning, matching, and careful planning.',
    bestFor: 'Slower sessions, problem solving, and mouse or touch play.',
  },
  strategy: {
    summary: 'Games where planning, upgrades, resource choices, and long-term decisions matter more than speed.',
    bestFor: 'Players who like management, tactics, merge systems, and progression.',
  },
  racing: {
    summary: 'Driving, stunt, motorcycle, and speed games focused on route control and clean inputs.',
    bestFor: 'Keyboard play, time trials, vehicle control, and short replayable tracks.',
  },
  shooting: {
    summary: 'Aim-focused browser games with target practice, survival, defense, or arcade shooting loops.',
    bestFor: 'Mouse accuracy, reaction timing, and score-chasing.',
  },
  adventure: {
    summary: 'Exploration, platforming, quests, and character-driven games with a wider range of pacing.',
    bestFor: 'Longer sessions, world traversal, and story or level discovery.',
  },
};

export const metadata: Metadata = {
  title: 'Game Categories - GlobalPlay Games',
  description:
    'Browse reviewed GlobalPlay game categories with practical notes, featured examples, and direct links to action, puzzle, strategy, racing, and adventure games.',
  alternates: {
    canonical: canonical('/categories'),
  },
};

export default function CategoriesPage() {
  const games = getIndexableGames();
  const categories = getIndexableCategories();

  return (
    <>
      <div className="breadcrumb">
        <div className="breadcrumb-nav">
          <Link href="/">Home</Link> <span>›</span> <span>Categories</span>
        </div>
      </div>

      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <h1 className="page-title">Game Categories</h1>
            <p className="page-description">
              Browse {games.length} reviewed browser games by genre. Each category page includes playable titles,
              controls, related games, and descriptions to help you decide what to launch next.
            </p>
          </div>

          <div className="categories-grid">
            {categories.map((category) => {
              const note = categoryNotes[category.id];

              return (
                <Link key={category.id} href={`/categories/${category.id}`} className="category-card">
                  <div className="category-icon">{category.icon}</div>
                  <div className="category-name">{category.name}</div>
                  <div className="category-count">{getIndexableCategoryCount(category.id)} reviewed games</div>
                  <p className="category-summary">{note.summary}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="featured-section">
        <div className="container">
          <h2 className="section-title">How to Choose a Category</h2>
          <div className="features-grid">
            {categories.map((category) => {
              const note = categoryNotes[category.id];
              return (
                <div key={category.id} className="feature-card">
                  <div className="feature-icon">{category.icon}</div>
                  <h3 className="feature-title">{category.name}</h3>
                  <p className="feature-description">{note.bestFor}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="similar-games">
        <div className="container">
          <h2 className="section-title">Featured Starting Points</h2>
          <div className="games-grid">
            {games
              .filter((game) => game.featured)
              .slice(0, 6)
              .map((game) => (
                <GameCard key={game.id} game={game} showPlayIcon={true} showImage={true} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
