import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Process from './components/Process/Process';
import WhyUs from './components/WhyUs/WhyUs';
import Founder from './components/Founder/Founder';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import CustomCursor from './components/CustomCursor/CustomCursor';

function App() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.12, // triggers when 12% is visible
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target); // triggers once
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="app-wrapper">
      <CustomCursor />
      <Header />
      <main>
        <div className="reveal"><Hero /></div>
        <div className="reveal"><Services /></div>
        <div className="reveal"><Process /></div>
        <div className="reveal"><WhyUs /></div>
        <div className="reveal"><Founder /></div>
        <div className="reveal"><Blog /></div>
        <div className="reveal"><Contact /></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
