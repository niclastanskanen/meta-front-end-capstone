import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './About';

describe('About', () => {
  test('renders about section with correct content', () => {
    render(<About />);
  
    const titleElement = screen.getByText('Little Lemon');
    const subHeadingElement = screen.getByText('Chicago');
    const paragraphElement = screen.getByText("Little Lemon Chicago is a family-owned Mediterranean restaurant located in the heart of the city. The restaurant is run by brothers Mario and Adrian, who have always had a passion for cooking and serving delicious food. Growing up in a Mediterranean household, the brothers were exposed to traditional recipes from an early age, and they decided to bring those recipes to the masses with a modern twist. At Little Lemon, you can expect to find a menu full of classic dishes with a creative twist that makes them stand out from the rest. Whether you're looking for a quick lunch or a leisurely dinner, Little Lemon Chicago is the perfect place to indulge in a delicious meal in a cozy and welcoming atmosphere.");
    const restaurantImageElement = screen.getByAltText('Restaurant Interior');
    const chefsImageElement = screen.getByAltText('Mario and Adrian');
  
    expect(titleElement).toBeInTheDocument();
    expect(subHeadingElement).toBeInTheDocument();
    expect(paragraphElement).toBeInTheDocument();
    expect(restaurantImageElement).toBeInTheDocument();
    expect(chefsImageElement).toBeInTheDocument();
  });
});
