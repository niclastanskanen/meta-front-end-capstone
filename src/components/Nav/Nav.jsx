import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/Logo.svg';
import './Nav.css';

const Nav = () => {
  return (
    <nav className='nav'>
    <Link to="/">
      <img src={logo} alt="Little Lemon Logo" className='logo' />
      </Link>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/booking">Reservations</a></li>
        <li><a href="/order">Order Online</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
