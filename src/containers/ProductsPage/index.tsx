import React from 'react';
import Table from '../../components/Table';
import fixture from './dataFixture.json';
import { columns } from './columns';

const ProductsPage = () => {
  return <Table columns={columns} data={fixture.data} />
};

export default ProductsPage;
