import React from 'react';
import { StyledTableHeader } from '../styled';

const CellHeader: React.FC<React.HTMLAttributes<HTMLTableHeaderCellElement>> = ({ children }) => (
  <StyledTableHeader>
    {children}
  </StyledTableHeader>
);

export default CellHeader;
