import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container container">
        <div className="logo">
          Butterscotch<span>Media</span>
        </div>
        <nav className="nav-menu">
          <a href="#services">Services</a>
          <a href="#why-us">Why Us</a>
          <a href="#contact" className="contact-btn">Let's Talk</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
