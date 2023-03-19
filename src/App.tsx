import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateOutlet from './components/misc/PrivateOutlet';
import PageNotFound from './containers/PageNotFound';

const App = () => (
  <div className="App">
    <Routes>
      <Route element={<PrivateOutlet />}>
        <Route path="/sample1" element={<h1>Hello</h1>} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </div>
);

export default App;
