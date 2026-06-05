import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="bg-glow hero-glow-1"></div>
      <div className="bg-glow hero-glow-2"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">The New Standard in Creator Growth</div>
          <h1 className="hero-title">
            We Craft <br/>
            <span className="text-gold">Attention.</span>
          </h1>
          <p className="hero-subtitle">
            Butterscotch Media is a premium agency focused on accelerating personal brands. We turn your raw expertise into undeniable influence and scalable revenue.
          </p>
          <div className="hero-cta-group">
            <a href="#contact" className="btn-primary">Start Your Journey</a>
            <a href="#services" className="btn-secondary">View Our Services</a>
          </div>
          
          <div className="hero-metrics">
            <div className="metric">
              <span className="metric-value">100M+</span>
              <span className="metric-label">Views Generated</span>
            </div>
            <div className="metric-divider"></div>
            <div className="metric">
              <span className="metric-value">Top 1%</span>
              <span className="metric-label">Creator Strategies</span>
            </div>
            <div className="metric-divider"></div>
            <div className="metric">
              <span className="metric-value">24/7</span>
              <span className="metric-label">Dedicated Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
