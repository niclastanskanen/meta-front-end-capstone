import { useState } from 'react'

import './BookingForm.css'

const BookingForm = ({ availableTimes, dispatch, submitForm, formData, setFormData }) => {
  const handleDateChange = async (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
    dispatch({ type: 'UPDATE_TIMES', payload: value });
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data', formData);
    submitForm(formData);
  }

  const currentDate = new Date().toISOString().split('T')[0];
  const options = availableTimes.map(time => <option key={time}>{time}</option>);

  return (
    <section aria-label="Booking Section" className="bookingSection">
      <h2>Book Your Reservation</h2>
      <form aria-label="Booking Reservation Form" className="bookingForm" onSubmit={handleSubmit}>
        <div>
          <div aria-label="First Name Container" className="container firstNameContainer">
            <label htmlFor="firstName">First Name<span aria-label="Required" className="required">*</span></label>
            <input
              name="firstName"
              aria-label="First Name Input"
              aria-required="true"
              id="firstName"
              autoComplete="off"
              onChange={handleInputChange}
              value={formData.firstName}
              required
            />
          </div>
          <div aria-label="Last Name Container" className="container lastNameContainer">
            <label htmlFor="lastName">Last Name<span aria-label="Required" className="required">*</span></label>
            <input
              name="lastName"
              aria-label="Last Name Input"
              aria-required="true"
              id="lastName"
              autoComplete="off"
              onChange={handleInputChange}
              value={formData.lastName}
              required
            />
          </div>
        </div>
        <div aria-label="Date Container" className="container dateContainer">
          <label htmlFor="date">Choose Date<span aria-label="Required" className="required">*</span></label>
          <input name="date" aria-label="Date Input" aria-required="true" id="date" type="date" value={formData.date} onChange={handleDateChange} min={currentDate} required />
        </div>
        <div aria-label="Time Container" className="container timeContainer">
          <label htmlFor="time">Choose Time<span aria-label="Required" className="required">*</span></label>
          <select name="time" aria-label="Select Time" aria-required="true" id="time" onChange={handleInputChange} value={formData.time} required>
            {options}
          </select>
        </div>
        <div aria-label="Guest Container" className="container guestsContainer">
          <label htmlFor="guests">Number of Guests<span aria-label="Required" className="required">*</span></label>
          <input name="guests" aria-label="Guests Input" aria-required="true" id="guests" type="number" min="1" max="10" placeholder="1" onChange={handleInputChange} required />
        </div>
        <div aria-label="Occasion Container" className="container occasionContainer">
          <label htmlFor="occasion">Occasion</label>
          <select name="occasion" aria-label="Select Occasion" id="occasion" onChange={handleInputChange} required>
            <option>None</option>
            <option>Birthday</option>
            <option>Engagement</option>
            <option>Anniversary</option>
          </select>
        </div>
        <button className="primaryBtn" text="Create Reservation" type="submit">
          Create Reservation
        </button>
      </form>
    </section>
  );
}

export default BookingForm;
