import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles.css';
import '../styles/header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">TechPrint Ethiopia</div>
      <nav>
        <button
          className={`hamburger ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setIsOpen(false)}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resources"
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setIsOpen(false)}
            >
              Resources
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'active contact-btn' : 'contact-btn'
              }
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;