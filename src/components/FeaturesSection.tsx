export default function FeaturesSection() {
  const features = [
    {
      icon: "🚀",
      title: "Instant Play",
      description: "Open browser games directly from their game pages, with controls and category context listed before you play."
    },
    {
      icon: "🎯",
      title: "Organized Catalog",
      description: "Browse by genre, popularity signals, recent additions, and related titles without installing a launcher."
    },
    {
      icon: "📱",
      title: "Browser First",
      description: "Game pages are designed for modern desktop and mobile browsers, with fullscreen support where available."
    },
    {
      icon: "🔒",
      title: "Clear Disclosures",
      description: "Third-party game providers, analytics, advertising cookies, and trademark ownership are documented in plain language."
    }
  ];

  return (
    <section className="features-showcase">
      <div className="container">
        <h2 className="section-title">✨ Why Choose Us</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
