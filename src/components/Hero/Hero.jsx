import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="bg-glow hero-glow-1"></div>
      <div className="bg-glow hero-glow-2"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">The Ultimate Authority in Personal Branding</div>
          <h1 className="hero-title">
            <span className="reveal-word reveal-word-1">We</span>{' '}
            <span className="reveal-word reveal-word-2">Build</span> <br/>
            <span className="reveal-word reveal-word-3 text-gold">Authority.</span>
          </h1>
          <p className="hero-subtitle">
            Butterscotch Media is an elite agency that turns your unique expertise into an undeniable personal brand. We build your digital authority so you can command attention, scale your business, and lead your industry.
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
              <span className="metric-label">Personal Brands</span>
            </div>
            <div className="metric-divider"></div>
            <div className="metric">
              <span className="metric-value">1-on-1</span>
              <span className="metric-label">Elite Advisory</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
