import React from 'react';
import './WhyUs.css';

const WhyUs = () => {
  return (
    <section id="why-us" className="why-us section-padding">
      <div className="container">
        <div className="why-us-grid">
          <div className="why-us-content">
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>
              Why <span className="text-gold">Butterscotch?</span>
            </h2>
            <p className="why-us-lead">
              In a world of infinite scroll, being 'good' is no longer enough. You need to be un-scrollable. We don't just edit videos; we build digital real estate.
            </p>
            <p className="why-us-text">
              Our philosophy is simple: Authenticity scales. We extract the raw value from your expertise and package it into content that commands attention and builds trust at scale. No templates. No shortcuts. Just pure brand growth.
            </p>
            
            <div className="process-steps">
              <div className="step">
                <div className="step-number">01</div>
                <div className="step-details">
                  <h4>Discover & Strategize</h4>
                  <p>We deep dive into your brand voice, target audience, and monetization goals to build a bespoke content roadmap.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">02</div>
                <div className="step-details">
                  <h4>Create & Produce</h4>
                  <p>Our team handles scripting, high-end editing, and thumbnail design to ensure every piece of content performs.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">03</div>
                <div className="step-details">
                  <h4>Distribute & Scale</h4>
                  <p>We turn one piece of core content into a multi-platform strategy, maximizing your reach and inbound leads.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="why-us-visuals">
            <div className="stat-card">
              <h3 className="text-gold">100%</h3>
              <p>Bespoke Strategy</p>
            </div>
            <div className="stat-card">
              <h3 className="text-gold">0</h3>
              <p>Cookie-cutter Templates</p>
            </div>
            <div className="image-placeholder">
              <div className="placeholder-text">Butterscotch Method</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
