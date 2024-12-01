import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ isAuthenticated, onLogout, cart = [] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <h1 className="logo">ShopEase</h1>
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? '✖' : '☰'}
      </button>
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li onClick={closeMenu}>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            Home
          </NavLink>
        </li>
        {isAuthenticated ? (
          <>
            <li onClick={closeMenu}>
              <NavLink to="/products" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                Products
              </NavLink>
            </li>
            <li onClick={closeMenu}>
              <NavLink to="/profile" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                Profile
              </NavLink>
            </li>
            <li onClick={closeMenu}>
              <NavLink to="/cart" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                <i className="fas fa-shopping-cart"></i> Cart{cart.length > 0 && `(${cart.length})`}
              </NavLink>
            </li>
            <li onClick={closeMenu}>
              <button className="logout-button" onClick={onLogout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li onClick={closeMenu}>
              <NavLink to="/login" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                Login
              </NavLink>
            </li>
            <li onClick={closeMenu}>
              <NavLink to="/register" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                Register
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
