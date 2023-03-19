import React from 'react';
import { Outlet } from 'react-router-dom';

const PrivateOutlet = () => {
  // TODO add authorization check here
  const auth = true;
  return auth ? <Outlet /> : <h1>Log in please</h1>;
};

export default PrivateOutlet;
