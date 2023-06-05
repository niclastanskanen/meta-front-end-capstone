import { useState, useReducer } from "react";
import BookingForm from "../components/BookingForm/BookingForm";
import { fetchAPI, submitAPI } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function BookingPage() {
  const [date, setDate] = useState(new Date());
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    date: '',
    time: '',
    guests: '',
    occasion: ''
  });

  function initializeTimes() {
    return fetchAPI(date);
  }

  function updateTimes() {
    const dateObj = new Date(date);
    return fetchAPI(dateObj);
  }

  const navigate = useNavigate();

  function submitForm() {
    const isSubmitted = submitAPI(formData);

    if (isSubmitted) {
      navigate("/confirmed", { state: { formData } });
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
        throw new Error();
    }
    return newState;
  }

  const [availableTimes, dispatch] = useReducer(reducer, initializeTimes());

  return (
    <BookingForm
      availableTimes={availableTimes}
      dispatch={dispatch}
      submitForm={submitForm}
      formData={formData}
      setFormData={setFormData}
    />
  );
}
