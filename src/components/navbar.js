import React from 'react';
import './Navbar.css'; // Assuming you will create a CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#hero" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#services" className="nav-link">Services</a>
        <a href="#testimonials" className="nav-link">Testimonials</a>
        <a href="#contact" className="nav-link">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
