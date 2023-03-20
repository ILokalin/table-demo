import React from 'react';
import { TableProps } from './table';
import TableHeader from './TableHeader';
import { StyledTable } from './styled';

const Table: React.FC<TableProps> = ({ columns, data }) => {

  return (
    <StyledTable>
      <TableHeader columns={columns} />
    </StyledTable>
  );
};

export default Table;
