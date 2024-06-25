import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import TrackerButton from '../trackerButton/TrackerButton';


const Navbar = () => {
  return (
    <nav className="navbar">
      
      <div className="navbar-logo">
         <img src="/src/assets/images/logo-white.png" alt="LogoCovid"/>
      </div>

      <ul className="navLinks">
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
        <li><TrackerButton/></li>
      </ul>
    </nav>
     
  );
};

export default Navbar;

/*import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import TrackerButton from '../trackerButton/TrackerButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/src/assets/images/logo-white.png" alt="LogoCovid" />
      </div>

      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
      </div>

      <ul className={`navLinks ${isOpen ? 'open' : ''}`}>
        <li>
          <Link to="/" onClick={toggleMenu}>Home</Link>
        </li>
        <li>
          <Link to="/prevention" onClick={toggleMenu}>Prevention</Link>
        </li>
        <li>
          <Link to="/quarantine" onClick={toggleMenu}>Quarantine</Link>
        </li>
        <li>
          <Link to="/pages" onClick={toggleMenu}>Pages</Link>
        </li>
        <li>
          <Link to="/about" onClick={toggleMenu}>About</Link>
        </li>
        <li>
          <Link to="/help" onClick={toggleMenu}>Help</Link>
        </li>
        <li><TrackerButton/></li>
      </ul>
    </nav>
  );
};

export default Navbar;*/
