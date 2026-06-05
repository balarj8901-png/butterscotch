import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="logo" style={{ fontSize: '20px' }}>
            Butterscotch<span>Media</span>
          </div>
          <p>Turning attention into assets.</p>
        </div>
        <div className="footer-links">
          <a href="#services">Services</a>
          <a href="#why-us">Why Us</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Butterscotch Media. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
