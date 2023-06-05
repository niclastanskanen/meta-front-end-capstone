import React from 'react';
import { render, screen } from '@testing-library/react';
import Specials from './Specials';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: jest.fn().mockImplementation(({ children }) => children),
}));

describe('Specials', () => {
  test('renders specials section with correct content', () => {
    render(<Specials />);

    const specialsHeadingElement = screen.getByText("This Week's Specials!");
    const foodCardElements = screen.getAllByLabelText('Food Card');

    expect(specialsHeadingElement).toBeInTheDocument();
    expect(foodCardElements.length).toBe(3);
  });
});
