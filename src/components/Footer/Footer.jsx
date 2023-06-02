import React from 'react';

import logo from '../../assets/logo_big.webp';
import './Footer.css'

const Footer = () => {
  return (
    <footer aria-label="Footer" className="">
      <div>
        <img src={logo} alt="Little Lemon Logo" className="" height={150} />
          <div>
            <div aria-label="Site Navigation">
              <h4>Navigation</h4>
              <ul aria-label="Navigation List">
                <li><a href="/home">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/booking">Reservations</a></li>
                <li><a href="/">Order Online</a></li>
                <li><a href="/">Login</a></li>
              </ul>
            </div>
            <div aria-label="Contact Info">
              <h4>Contact</h4>
              <ul aria-label="Contact Info List">
                <li><p>1536 W ADAMS ST</p></li>
                <li><p>CHICAGO IL 60607-2455</p></li>
                <li><a href='tel: +17731234567'>(773)123-4567</a></li>
                <li><a href="/">Email Us</a></li>
              </ul>
            </div>
            <div aria-label="Social Media Info">
              <h4>Socials</h4>
              <ul aria-label="Social Media List">
                <li><a href="/">Facebook</a></li>
                <li><a href="/">Twitter</a></li>
                <li><a href="/">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <p aria-label="2023 © Little Lemon">2023 © Little Lemon</p>
        </div>
    </footer>
  );
};

export default Footer;


