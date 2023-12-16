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
        <Route path="/" exact element={<Home headerType="1"/>} />
        <Route path="/forgotPassword" exact element={<ForgotPass headerType="1"/>} />
        <Route path="/productList" exact element={<ProductList headerType="2"/>} />
      </Routes>
    </div>
  );
}

export default App;
