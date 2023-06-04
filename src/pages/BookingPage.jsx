import { useState, useReducer } from "react"
import BookingForm from "../components/BookingForm/BookingForm"
import { fetchAPI, submitAPI } from "../api/api"
import { useNavigate } from "react-router-dom";

export default function BookingPage() {

  // eslint-disable-next-line no-unused-vars
  const [date, setDate] = useState(new Date())

  function initializeTimes() {
    return fetchAPI(date)
  }

  function updateTimes() {
    const dateObj = new Date(date)
    return fetchAPI(dateObj)
  }

  const navigate = useNavigate();

  function submitForm(formData) {
    const isSubmitted = submitAPI(formData);

    if (isSubmitted) {
      navigate("/confirmed");
    }
  }

  function reducer(state, action) {
    let newState;
    switch (action.type) {
      case 'UPDATE_TIMES':
        const newDate = new Date(action.payload);
        newState = updateTimes(newDate);
        break;

      default:
        throw new Error()
    }
    return newState
  }

  const [availableTimes, dispatch] = useReducer(reducer, initializeTimes())

  return (
    <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
  )
}
