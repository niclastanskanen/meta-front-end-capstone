import React from 'react'

const BookingForm = () => {
  return (
    <section aria-label="Booking Section" class="bookingSection">
      <h2>Book Your Reservation</h2>
      <form aria-label="Booking Reservation Form" class="bookingForm">
        <div>
          <div aria-label="First Name Container" class="container firstNameContainer">
            <label for="firstName">First Name<span aria-label="Required" class="required">*</span></label>
            <input name="firstName" aria-label="First Name Input" aria-required="true" id="firstName" autocomplete="off" />
          </div>
          <div aria-label="Last Name Container" class="container lastNameContainer">
            <label for="lastName">Last Name<span aria-label="Required" class="required">*</span></label>
            <input name="lastName" aria-label="Last Name Input" aria-required="true" id="lastName" autocomplete="off" />
          </div>
        </div>
          <div aria-label="Date Container" class="container dateContainer">
            <label for="date">Choose Date<span aria-label="Required" class="required">*</span></label>
            <input name="date" aria-label="Date Input" aria-required="true" id="date" type="date" />
          </div>
          <div aria-label="Time Container" class="container timeContainer">
            <label for="time">Choose Time<span aria-label="Required" class="required">*</span></label>
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
            <div aria-label="Guest Container" class="container guestsContainer">
            <label for="guests">Number of Guests<span aria-label="Required" class="required">*</span></label>
            <input name="guests" aria-label="Guests Input" aria-required="true" id="guests" type="number" min="0" placeholder="1" />
          </div>
          <div aria-label="Occasion Container" class="container occasionContainer">
            <label for="occasion">Occasion</label>
            <select name="occasion" aria-label="Select Occasion" id="occasion">
              <option>None</option>
              <option>Birthday</option>
              <option>Engagement</option>
              <option>Anniversary</option>
            </select>
          </div>
            <button class="primaryBtn" text="Create Reservation" type="submit" style="border: 1px solid rgb(33, 33, 33);">
            Create Reservation
            </button>
      </form>
    </section>
  )
}

export default BookingForm