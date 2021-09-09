import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import ProductDetail from './views/ProductDetail';
import UpdateProduct from './views/UpdateProduct';

import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <ProductDetail path="/products/:id/details" />
        <UpdateProduct path="/products/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
