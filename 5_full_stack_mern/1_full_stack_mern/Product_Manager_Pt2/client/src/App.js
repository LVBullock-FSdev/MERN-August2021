import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import ProductDetail from './views/ProductDetail';
// import ProductList from './components/ProductList';

import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/products"/>
        {/* <ProductList path="/products"/> */}
        <ProductDetail path="/products/:id" />
      </Router>
    </div>
  );
}

export default App;
