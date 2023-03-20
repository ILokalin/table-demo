import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ContainerWrapper from './components/misc/ContainerWrapper';
import PrivateOutlet from './components/misc/PrivateOutlet';
import NotFoundPage from './containers/NotFoundPage';
import ProductsPage from './containers/ProductsPage';
import styled from 'styled-components';

const StyledApp = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
  & main {
    flex-grow: 1;  
  }
  
  & footer {
    display: flex;
    justify-content: center;
  }
`

const App = () => (
  <StyledApp>
    <h3>Header here</h3>
    <main>
      <Routes>
        <Route element={<PrivateOutlet />}>
          <Route path="/products" element={<ContainerWrapper name="Products" Component={<ProductsPage />} />} />
        </Route>
        <Route
          path="/"
          element={<Navigate to="/products" replace />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
    <footer>
      <h3>2023</h3>
    </footer>
  </StyledApp>
);

export default App;
