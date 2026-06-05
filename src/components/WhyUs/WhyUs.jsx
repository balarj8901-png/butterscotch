import React from 'react';
import './WhyUs.css';

const WhyUs = () => {
  return (
    <section id="why-us" className="why-us section-padding">
      <div className="container why-us-container">
        <div className="why-us-content">
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>
            Why <span className="text-gold">Butterscotch?</span>
          </h2>
          <p className="why-us-text">
            In a world of infinite scroll, being 'good' is no longer enough. You need to be un-scrollable. We don't just edit videos; we build digital real estate.
          </p>
          <p className="why-us-text">
            Our philosophy is simple: Authenticity scales. We extract the raw value from your expertise and package it into content that commands attention and builds trust at scale. No templates. No shortcuts. Just pure brand growth.
          </p>
        </div>
        <div className="why-us-image">
          <div className="image-placeholder">
            Butterscotch Media
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
