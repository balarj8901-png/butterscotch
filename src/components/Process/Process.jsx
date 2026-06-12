import React from 'react';
import './Process.css';

const processSteps = [
  {
    num: '01',
    title: 'Brand Architecture & Positioning',
    desc: 'We map out your industry, audience, and competitors. Then, we build a distinct positioning strategy that makes your personal brand the undeniable authority.',
    icon: '🏛️'
  },
  {
    num: '02',
    title: 'Authority Content Blueprint',
    desc: 'No random viral dances. We script and design high-leverage content that educates, influences, and builds profound trust with your ideal audience.',
    icon: '📐'
  },
  {
    num: '03',
    title: 'Guided Studio Production',
    desc: 'You don\'t need to be a natural on camera. We direct, guide, and produce your content shoots, ensuring premium aesthetic and delivery.',
    icon: '🎥'
  },
  {
    num: '04',
    title: 'Premium Retention Editing',
    desc: 'Our editing isn\'t just about flashy cuts; it\'s about human psychology. We edit for watch-time, emotional resonance, and clarity.',
    icon: '✂️'
  },
  {
    num: '05',
    title: 'Algorithmic Distribution',
    desc: 'We don\'t just post; we deploy. Every piece of content is SEO-optimized and distributed across platforms to maximize inbound reach.',
    icon: '📡'
  },
  {
    num: '06',
    title: 'Authority Monetization',
    desc: 'Views mean nothing without business results. We build pipelines that turn your personal brand authority into direct sales and high-value inbound leads.',
    icon: '🔥'
  }
];

const Process = () => {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    const factor = 12; // tilt sensitivity
    const rx = -(y / box.height) * factor;
    const ry = (x / box.width) * factor;
    card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.02, 1.02, 1.02)`;
    card.style.transition = 'none';
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    card.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
  };

  return (
    <section id="process" className="process section-padding">
      <div className="container">
        <div className="process-header">
          <h2 className="section-title">The <span className="text-gold">Butterscotch</span> Protocol</h2>
          <p className="section-subtitle">A predictable, 6-step framework to engineer unshakeable personal brand authority and business leverage.</p>
        </div>

        <div className="process-grid">
          {processSteps.map((step, index) => (
            <div 
              key={index} 
              className="process-card"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="process-number">{step.num}</div>
              <div className="process-icon">{step.icon}</div>
              <div className="process-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
