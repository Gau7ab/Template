'use client';
import { useEffect, useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    // Check saved preference
    const saved = localStorage.getItem('theme');
    if (saved === 'light') {
      setDarkMode(false);
      document.documentElement.setAttribute('data-theme', 'light');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="container">
        <a href="#" className="nav-logo">SHIKHAR<span>.</span></a>
        <ul className={`nav-links${mobileOpen ? ' active' : ''}`} id="navLinks">
          <li><a href="#about" onClick={handleLinkClick}>About</a></li>
          <li><a href="#career" onClick={handleLinkClick}>Journey</a></li>
          <li><a href="#services" onClick={handleLinkClick}>Expertise</a></li>
          <li><a href="#training" onClick={handleLinkClick}>Training</a></li>
          <li><a href="#testimonials" onClick={handleLinkClick}>Reviews</a></li>
          <li><a href="#contact" className="nav-cta" onClick={handleLinkClick}>Let&apos;s Connect</a></li>
        </ul>
        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            title={darkMode ? 'Light Mode' : 'Dark Mode'}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className={`mobile-toggle${mobileOpen ? ' active' : ''}`} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle Navigation">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
