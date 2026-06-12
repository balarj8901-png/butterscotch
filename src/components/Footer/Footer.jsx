import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="footer-logo text-logo">
            BUTTERSCOTCH<span className="logo-dot">.</span>
          </div>
          <p className="footer-tagline">Engineering digital authority and premium personal branding for Gujarat's elite founders and CEOs.</p>
          <div className="footer-contact-info">
            <p className="footer-contact-item">📱 +91 87340 65700</p>
            <p className="footer-contact-item">✉️ butterscotchmedia1@gmail.com</p>
            <p className="footer-contact-item">📍 Surat, Gujarat, India</p>
          </div>
        </div>
        
        <div className="footer-navigation">
          <div className="footer-nav-col">
            <h4>Protocol</h4>
            <a href="#services">Services</a>
            <a href="#process">Our Protocol</a>
            <a href="#why-us">Why Us</a>
          </div>
          <div className="footer-nav-col">
            <h4>Company</h4>
            <a href="#founder">The Founder</a>
            <a href="#blog">Insights</a>
            <a href="#contact">Begin Protocol</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Butterscotch Media. Crafted for high-integrity leaders. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
