import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import TrackerButton from '../trackerButton/TrackerButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prevState => !prevState);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
    if (window.innerWidth > 768) {
      setIsOpen(false);
    }
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  const getLogoPath = () => {
    if (isMobile && scrolled) {
      return '/src/assets/images/logo.png';
    } else if (isMobile && !scrolled) {
      return '/src/assets/images/logo.png';
    } else if (!isMobile && scrolled) {
      return '/src/assets/images/logo.png';
    } else {
      return '/src/assets/images/logo-white.png';
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isOpen ? 'expanded' : ''}`}>
      <div className="navbar-logo">
        <img src={getLogoPath()} alt="LogoCovid" />
      </div>
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="hamburger-lines"></div>
        <div className="hamburger-lines"></div>
        <div className="hamburger-lines"></div>
      </div>
      <ul className={`navLinks ${isOpen ? 'active' : ''}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/prevention">Prevention</Link>
        </li>
        <li>
          <Link to="/quarantine">Quarantine</Link>
        </li>
        <li>
          <Link to="/pages">Pages</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/help">Help</Link>
        </li>
        <li>
          <TrackerButton className={scrolled ? 'scrolled' : ''} text="Tracker" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

