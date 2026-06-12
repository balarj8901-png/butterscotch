import React from 'react';
import './Contact.css';

const Contact = () => {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    const factor = 10;
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
    <section id="contact" className="contact section-padding">
      <div className="container contact-container">
        
        <div 
          className="contact-info-block"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>
            Build Your <span className="text-gold">Authority</span>
          </h2>
          <p className="contact-subtitle">
            Let's design a personal brand that establishes you as the industry leader. Drop us a line and we'll get back to you within 24 hours.
          </p>
          
          <div className="faq-mini">
            <h4>What happens next?</h4>
            <p>1. Reach out to us via Email or Phone.</p>
            <p>2. We schedule a 30-minute discovery call.</p>
            <p>3. We build your custom positioning roadmap.</p>
          </div>

          <div className="contact-details">
            <div className="detail-item">
              <span className="detail-icon">✉️</span>
              <div>
                <p className="detail-label">Email Us</p>
                <p className="detail-value">
                  <a href="mailto:butterscotchmedia1@gmail.com" className="contact-link">
                    butterscotchmedia1@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="detail-item">
              <span className="detail-icon">📱</span>
              <div>
                <p className="detail-label">Call Us</p>
                <p className="detail-value">
                  <a href="tel:+918734065700" className="contact-link">
                    +91 87340 65700
                  </a>
                </p>
              </div>
            </div>
            <div className="detail-item">
              <span className="detail-icon">📍</span>
              <div>
                <p className="detail-label">HQ</p>
                <p className="detail-value">
                  Sahjanand Business Hub, 323, Yoginagar Society, Surat, Gujarat 395011
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
