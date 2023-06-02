import React from 'react';
import About from './About/About';


import Hero from './Hero/Hero';
import Reviews from './Reviews/Reviews';
import Specials from './Specials/Specials';

const Main = () => {
  return (
    <main>
      <Hero />
      <Specials />
      <Reviews />
      <About />
    </main>
  );
};

export default Main;
