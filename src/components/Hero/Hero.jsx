import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="bg-glow hero-glow-1"></div>
      <div className="bg-glow hero-glow-2"></div>
      <div className="container hero-content">
        <h1 className="hero-title">
          We Craft <br/>
          <span className="text-gold">Attention.</span>
        </h1>
        <p className="hero-subtitle">
          Butterscotch Media is a premier agency focused on accelerating personal brands and creator growth. We turn expertise into influence.
        </p>
        <div className="hero-cta">
          <a href="#contact" className="btn-primary">Start Your Journey</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
