'use client';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="container">
        <a href="#" className="nav-logo">SHIKHAR<span>.</span></a>
        <ul className={`nav-links${mobileOpen ? ' active' : ''}`} id="navLinks">
          <li><a href="#about" onClick={handleLinkClick}>About</a></li>
          <li><a href="#services" onClick={handleLinkClick}>Expertise</a></li>
          <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
          <li><a href="#testimonials" onClick={handleLinkClick}>Reviews</a></li>
          <li><a href="#contact" className="nav-cta" onClick={handleLinkClick}>Let&apos;s Connect</a></li>
        </ul>
        <button className={`mobile-toggle${mobileOpen ? ' active' : ''}`} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle Navigation">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  );
}
