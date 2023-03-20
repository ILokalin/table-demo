import React from 'react';
import { render, screen } from '@testing-library/react';
import CellHeader from '../CellHeader';

describe('CellHeader', () => {
  test('renders the children', () => {
    render(<CellHeader>Test Header</CellHeader>);
    expect(screen.getByText('Test Header')).toBeInTheDocument();
  });

  test('renders a table header cell with the correct styles', () => {
    render(<CellHeader>Test Header</CellHeader>);
    const cell = screen.getByText('Test Header').closest('th');
    expect(cell).toHaveStyle(`
      padding: 10px 10px;
      font-weight: 700;
    `);
  });
});
