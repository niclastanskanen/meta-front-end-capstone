import React from 'react';

import About from '../components/About/About';
import Hero from '../components/Hero/Hero';
import Reviews from '../components/Reviews/Reviews';
import Specials from '../components/Specials/Specials';

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
