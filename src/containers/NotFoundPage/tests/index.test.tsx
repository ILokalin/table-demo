import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFoundPage from '../index';

describe('NotFoundPage', () => {
  test('renders 404 and "Page not found"', () => {
    render(<NotFoundPage />);
    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('Page not found')).toBeInTheDocument();
  });

  test('renders "Go Back Home" button', () => {
    render(<NotFoundPage />);
    expect(screen.getByRole('button')).toHaveTextContent('Go Back Home');
  });
});
