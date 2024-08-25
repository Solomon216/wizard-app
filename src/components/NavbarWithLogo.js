import React from 'react';
import './NavbarWithLogo.css';

const NavbarWithLogo = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          <img src="src\images\logo.png" alt="Logo" className="logo-img" />
        </a>
        <div className="navbar-links">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#testimonials" className="nav-link">Testimonials</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default NavbarWithLogo;
