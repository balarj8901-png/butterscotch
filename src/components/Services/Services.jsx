import React from 'react';
import './Services.css';

const servicesData = [
  {
    title: 'Content Strategy',
    desc: 'Data-driven roadmaps to position you as an authority in your niche. We do the heavy lifting of research and planning.',
    features: ['Niche Positioning', 'Competitor Analysis', 'Content Calendar Creation'],
    icon: '🧭'
  },
  
  
    desc: 'High-retention, premium quality short-form and long-form video editing designed for modern attention spans.',
    features: ['Dynamic Editing', 'Scriptwriting Assistance', 'Thumbnail Design'],
    icon: '🎬'
  },
  {
    title: 'Brand Monetization',
    desc: 'Converting fleeting attention into measurable revenue through optimized digital products and conversion funnels.',
    features: ['Funnel Architecture', 'Product Strategy', 'Lead Generation'],
    icon: '💎'
  },
  {
    title: 'Content Distribution',
    desc: 'Omnichannel presence without the burnout. We repurpose and distribute your core message across all platforms.',
    features: ['Platform Optimization', 'Analytics Tracking', 'Community Management'],
    icon: '🚀'
  }
];

const Services = () => {
  return (
    <section id="services" className="services section-padding">
      <div className="container">
        <div className="services-header">
          <h2 className="section-title">Our <span className="text-gold">Services</span></h2>
          <p className="section-subtitle">We handle the entire creative pipeline so you can focus on what you do best: being the expert.</p>
        </div>
        
        <div className="services-grid">
          {servicesData.map((s, i) => (
            <div key={i} className="service-card">
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <ul className="service-features">
                {s.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="text-gold">✓</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
