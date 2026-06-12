import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container container">
        <div className="logo text-logo">
          BUTTERSCOTCH<span className="logo-dot">.</span>
        </div>
        
        {/* Mobile menu toggle button */}
        <button 
          className={`menu-toggle ${menuOpen ? 'active' : ''}`} 
          onClick={toggleMenu} 
          aria-label="Toggle Navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#process" onClick={() => setMenuOpen(false)}>Protocol</a>
          <a href="#why-us" onClick={() => setMenuOpen(false)}>Why Us</a>
          <a href="#founder" onClick={() => setMenuOpen(false)}>Founder</a>
          <a href="#blog" onClick={() => setMenuOpen(false)}>Insights</a>
          <a href="#contact" className="contact-btn" onClick={() => setMenuOpen(false)}>Begin Protocol</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
