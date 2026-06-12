import React from 'react';
import './Services.css';

const Services = () => {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    const factor = 10; // sensitivity degree
    const rx = -(y / box.height) * factor;
    const ry = (x / box.width) * factor;
    card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.015, 1.015, 1.015)`;
    card.style.transition = 'none';
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    card.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
  };

  return (
    <section id="services" className="services section-padding">
      <div className="container">
        <div className="services-header">
          <h2 className="section-title">Our <span className="text-gold">Package</span></h2>
          <p className="section-subtitle">We handle your complete personal branding strategy so you can focus on building your empire.</p>
        </div>
        
        <div className="single-service-container">
          <div 
            className="single-service-card"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            
            <div className="service-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
              </svg>
            </div>
            
            <h3 className="single-service-title">Signature Personal Brand Accelerator</h3>
            <p className="single-service-subtitle">A complete, turnkey system to build, scale, and monetize your digital authority.</p>
            
            <div className="service-section">
              <h4 className="service-section-title">OUR 6-STEP PROCESS</h4>
              <ul className="service-list">
                <li><span className="check-icon">✓</span> Brand Positioning & Messaging Setup</li>
                <li><span className="check-icon">✓</span> Content Pillar & Strategy Outline</li>
                <li><span className="check-icon">✓</span> Guided Video Recording & Directing</li>
                <li><span className="check-icon">✓</span> High-End Cinematic Post-Production</li>
                <li><span className="check-icon">✓</span> Multi-Platform Publishing & SEO</li>
                <li><span className="check-icon">✓</span> Audience Engagement & Monetization</li>
              </ul>
            </div>
            
            <div className="service-section">
              <h4 className="service-section-title">WHAT WE HANDLE</h4>
              <ul className="service-list bold-list">
                <li><span className="check-icon">✓</span> Brand Architecture</li>
                <li><span className="check-icon">✓</span> Scriptwriting & Hooks</li>
                <li><span className="check-icon">✓</span> Studio Setup & Direction</li>
                <li><span className="check-icon">✓</span> Premium Video Editing</li>
                <li><span className="check-icon">✓</span> Social Channel Management</li>
              </ul>
            </div>
            
            <div className="service-quote-box">
              A fully done-for-you personal branding suite. You just show up to record for 4 hours a month. We handle all the research, scripting, editing, distribution, and growth management.
            </div>
            
            <div className="service-actions">
              <button className="btn-service-secondary">See Results</button>
              <button className="btn-service-primary">View Packages</button>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
