import React from 'react'

const BookingForm = () => {
  return (
    <section aria-label="Booking Section" className="bookingSection">
      <h2>Book Your Reservation</h2>
      <form aria-label="Booking Reservation Form" className="bookingForm">
        <div>
          <div aria-label="First Name Container" className="container firstNameContainer">
            <label for="firstName">First Name<span aria-label="Required" className="required">*</span></label>
            <input name="firstName" aria-label="First Name Input" aria-required="true" id="firstName" autocomplete="off" />
          </div>
          <div aria-label="Last Name Container" className="container lastNameContainer">
            <label for="lastName">Last Name<span aria-label="Required" className="required">*</span></label>
            <input name="lastName" aria-label="Last Name Input" aria-required="true" id="lastName" autocomplete="off" />
          </div>
        </div>
          <div aria-label="Date Container" className="container dateContainer">
            <label for="date">Choose Date<span aria-label="Required" className="required">*</span></label>
            <input name="date" aria-label="Date Input" aria-required="true" id="date" type="date" />
          </div>
          <div aria-label="Time Container" className="container timeContainer">
            <label for="time">Choose Time<span aria-label="Required" className="required">*</span></label>
            <select name="time" aria-label="Select Time" aria-required="true" id="time">
              <option>17:00</option>
              <option>17:30</option>
              <option>18:30</option>
              <option>20:00</option>
              <option>20:30</option>
              <option>21:00</option>
              <option>22:00</option>
              <option>23:30</option>
            </select>
          </div>
            <div aria-label="Guest Container" className="container guestsContainer">
            <label for="guests">Number of Guests<span aria-label="Required" className="required">*</span></label>
            <input name="guests" aria-label="Guests Input" aria-required="true" id="guests" type="number" min="0" placeholder="1" />
          </div>
          <div aria-label="Occasion Container" className="container occasionContainer">
            <label for="occasion">Occasion</label>
            <select name="occasion" aria-label="Select Occasion" id="occasion">
              <option>None</option>
              <option>Birthday</option>
              <option>Engagement</option>
              <option>Anniversary</option>
            </select>
          </div>
            <button className="primaryBtn" text="Create Reservation" type="submit" style="border: 1px solid rgb(33, 33, 33);">
            Create Reservation
            </button>
      </form>
    </section>
  )
}

export default BookingForm