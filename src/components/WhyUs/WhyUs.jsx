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
              In a world of noise, being quiet is a business risk. You need to be undeniable. We don't just make videos; we build digital real estate and authority for founders.
            </p>
            <p className="why-us-text">
              Our philosophy is simple: Authenticity scales. We extract the unique insights from your mind and package them into premium content that commands attention and builds trust. No cookie-cutter scripts. No generic setups. Just pure personal brand authority.
            </p>
            
            <div className="process-steps">
              <div className="step">
                <div className="step-number">01</div>
                <div className="step-details">
                  <h4>Positioning & Strategy</h4>
                  <p>We define your target market, identify your unique brand pillars, and build a bespoke positioning strategy.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">02</div>
                <div className="step-details">
                  <h4>Production & Writing</h4>
                  <p>Our team drafts high-impact scripts and handles all video production directing to capture your natural delivery.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">03</div>
                <div className="step-details">
                  <h4>Distribution & Conversion</h4>
                  <p>We syndicate your content across all key platforms, turning inbound attention into high-ticket business leads.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="why-us-visuals">
            <div className="stat-card">
              <h3 className="text-gold">100%</h3>
              <p>Bespoke Branding</p>
            </div>
            <div className="stat-card">
              <h3 className="text-gold">0</h3>
              <p>Re-used Templates</p>
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
