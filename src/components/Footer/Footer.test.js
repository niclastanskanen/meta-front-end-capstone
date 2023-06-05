import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  test('renders footer with correct content', () => {
    render(<Footer />);
  
    const logoElement = screen.getByAltText('Little Lemon Logo');
    const navigationListElement = screen.getByLabelText('Navigation List');
    const contactInfoListElement = screen.getByLabelText('Contact Info List');
    const socialMediaListElement = screen.getByLabelText('Social Media List');
    const copyrightElement = screen.getByLabelText('2023 © Little Lemon');
  
    expect(logoElement).toBeInTheDocument();
    expect(navigationListElement).toBeInTheDocument();
    expect(contactInfoListElement).toBeInTheDocument();
    expect(socialMediaListElement).toBeInTheDocument();
    expect(copyrightElement).toBeInTheDocument();
  });
});
