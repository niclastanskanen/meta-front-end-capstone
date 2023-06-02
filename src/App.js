import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import BookingPage from './pages/BookingPage';
import Header from './components/Header';
import './App.css';
import './variables.css';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
