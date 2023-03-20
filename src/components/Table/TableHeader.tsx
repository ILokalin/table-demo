import React from 'react';
import { HeaderProps } from './table';
import CellHeader from './Cells/CellHeader';

const TableHeader: React.FC<HeaderProps> = ({ columns = [] }) => {
  return (
    <tr>
      {
        columns.map(column => <CellHeader key={column.name}>{column.name}</CellHeader>)
      }
    </tr>
  )
};

export default TableHeader;
