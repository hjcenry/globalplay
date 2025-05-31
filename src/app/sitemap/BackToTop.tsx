'use client';

export default function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="back-to-top">
      <button onClick={scrollToTop}>
        ↑ Back to Top
      </button>
    </div>
  );
} 