export default function FeaturesSection() {
  const features = [
    {
      icon: "🚀",
      title: "Instant Play",
      description: "No downloads required, click and play. All games are optimized to provide the best browser gaming experience."
    },
    {
      icon: "🎯",
      title: "Curated Content",
      description: "Every game is handpicked and tested to ensure we provide you with high-quality gaming experiences."
    },
    {
      icon: "📱",
      title: "Cross-Platform",
      description: "Support for desktop, tablet and mobile devices, enjoy your favorite games anywhere, anytime."
    },
    {
      icon: "🔒",
      title: "Safe & Secure",
      description: "All games are security tested, virus-free and malware-free to protect your device safety."
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