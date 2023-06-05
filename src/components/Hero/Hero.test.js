import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Hero from './Hero';

describe('Hero', () => {
  test('renders hero section with correct content', () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );
  
    const spotlightElement = screen.getByLabelText('Spotlight');
    const titleElement = screen.getByText('Little Lemon');
    const subHeadingElement = screen.getByText('Chicago');
    const descriptionElement = screen.getByText('We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.');
    const reserveButtonElement = screen.getByText('Reserve a Table');
  
    expect(spotlightElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(subHeadingElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(reserveButtonElement).toBeInTheDocument();
  });
});
