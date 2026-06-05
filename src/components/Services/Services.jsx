import React from 'react';
import './Services.css';

const servicesData = [
  {
    title: 'Content Strategy',
    desc: 'Data-driven roadmaps to position you as an authority in your niche.',
    icon: '📊'
  },
  {
    title: 'Video Production',
    desc: 'High-retention, premium quality short-form and long-form video editing.',
    icon: '🎬'
  },
  {
    title: 'Brand Monetization',
    desc: 'Converting attention into measurable revenue through digital products and funnels.',
    icon: '💰'
  }
];

const Services = () => {
  return (
    <section id="services" className="services section-padding">
      <div className="container">
        <h2 className="section-title">Our <span className="text-gold">Services</span></h2>
        <div className="services-grid">
          {servicesData.map((s, i) => (
            <div key={i} className="service-card">
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
