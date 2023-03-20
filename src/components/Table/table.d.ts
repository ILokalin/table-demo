import React from 'react';

export interface ColumnProps {
  id?: string;
  name?: string;
  accessor?: (row: any) => React.ReactNode;
  searchable?: boolean;
  Cell?: React.ElementType | React.ReactNode;
}

export interface TableProps {
  columns?: ColumnProps[];
  data: any[];
}

export interface HeaderProps {
  columns?: ColumnProps[],
}
