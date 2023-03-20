import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Outlet } from 'react-router-dom';
import PrivateOutlet from '../PrivateOutlet';

describe('PrivateOutlet', () => {
  test('renders the Outlet component if authenticated', () => {
    const { queryByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <PrivateOutlet />
        <Outlet />
      </MemoryRouter>
    );
    expect(queryByText('Log in please')).not.toBeInTheDocument();
  });
});
