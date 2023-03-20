import styled from 'styled-components';

const TABLE_BORDER_COLOR = '#bbb';
const TABLE_HEADER_COLOR = '#666';
const TABLE_HEADER_BG = '#eee';
const TABLE_MIN_WIDTH = 1200;

export const StyledTable = styled.table`
  min-width: ${TABLE_MIN_WIDTH}px;
  border-spacing: 0;
  border-collapse: collapse;
`;

export const StyledTableHeader = styled.th`
  min-width: 100px;
  padding: 10px 10px;
  border: 1px solid ${TABLE_BORDER_COLOR};
  color: ${TABLE_HEADER_COLOR};
  font-weight: 700;
  box-sizing: border-box;
  background-color: ${TABLE_HEADER_BG};
`;
