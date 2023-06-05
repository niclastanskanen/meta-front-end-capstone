import React from 'react';
import { render, screen } from '@testing-library/react';
import Reviews from './Reviews';

describe('Reviews', () => {
  test('renders reviews section with correct content', () => {
    render(<Reviews />);
  
    const glowingTestimoniesElement = screen.getByText('Glowing Testimonies of Delighted Customers');
    const reviewElements = screen.getAllByLabelText('Review');
  
    expect(glowingTestimoniesElement).toBeInTheDocument();
    expect(reviewElements.length).toBe(4);

  });
});
