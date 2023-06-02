import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import BookingPage from './pages/BookingPage';
import ConfirmedBooking from './pages/ConfirmedBooking';
import Header from './components/Header';
import Footer from './components/Footer/Footer';

import './App.css';
import './variables.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="confirmed" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
