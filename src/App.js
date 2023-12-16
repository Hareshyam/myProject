import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/fronted/home';
import ForgotPass from './components/fronted/forgotPassworf';
import ProductList from './components/fronted/productList/productList';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/forgotPassword" exact element={<ForgotPass />} />
        <Route path="/productList" exact element={<ProductList />} />
      </Routes>
    </div>
  );
}

export default App;
