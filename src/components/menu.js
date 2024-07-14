import React from 'react';
import '../styles/menu.css';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className="main-menu">
      <nav className="navbar">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about-us" className="nav-link">About Us</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
    </div>
  );
}

export default Menu;