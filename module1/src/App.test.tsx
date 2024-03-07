import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ALL genres link', () => {
  render(<App />);
  const linkElement = screen.getByText(/ALL/i);
  expect(linkElement).toBeInTheDocument();
});
