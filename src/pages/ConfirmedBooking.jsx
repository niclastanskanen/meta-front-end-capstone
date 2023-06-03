import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';

import logo_big from '../assets/logo_big.webp';

const ConfirmedBooking = () => {
  return (
    <div className='confirmedBooking'>
      <h2>Booking Confirmed!</h2>
      <img src={logo_big} alt='logo' className='confirmedLogo'/>
      <p>Your booking has been successfully confirmed.</p>
      <Link to='/'>
        Go back to first page
        <AiOutlineHome />
      </Link>
    </div>
  );
};

export default ConfirmedBooking;
