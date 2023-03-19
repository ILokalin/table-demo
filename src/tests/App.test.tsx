import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('App component', () => {
  it('renders the home page', () => {
    render(
      <MemoryRouter initialEntries={['/sample1']}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByText(/hello/i)).toBeInTheDocument();
  });

  it('renders the 404 page for invalid routes', () => {
    render(
      <MemoryRouter initialEntries={['/invalid']}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
  });
});
