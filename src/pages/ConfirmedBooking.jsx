import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';

import logo_big from '../assets/logo_big.webp';

const ConfirmedBooking = () => {
  const location = useLocation();
  const formData = location.state?.formData || {};

  console.log("formData", formData);

  const name = `${formData.firstName} ${formData.lastName}`;
  const bookingInfo = `${formData.date} at ${formData.time} for ${formData.guests} guests`;

  console.log("name", name);

  return (
    <div className='confirmedBooking'>
      <h2>Booking Confirmed!</h2>
      <img src={logo_big} alt='logo' className='confirmedLogo'/>
      <p>Your booking has been successfully confirmed.</p>
      {bookingInfo.trim() !== '' && <p>You are booked for {bookingInfo}.</p>}
      {name.trim() !== '' && <p>Thank you, {name}!</p>}
      <Link to='/'>
        Go back to the first page
        <AiOutlineHome />
      </Link>
    </div>
  );
};

export default ConfirmedBooking;
