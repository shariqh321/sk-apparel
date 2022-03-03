import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

import './App.scss';



const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);
const JacketPage = () => (
  <div>
    <h1>Jacket PAGE </h1>
  </div>
);
const SneakerPage = () => (
  <div>
    <h1>Sneaker PAGE </h1>
  </div>
);
const MensPage = () => (
  <div>
    <h1>Mens PAGE </h1>
  </div>
);
const WomensPage = () => (
  <div>
    <h1>Womens PAGE </h1>
  </div>
);
const ErrorPage = () => (
  <div>
    <h1>Error ! Page not found  </h1>
  </div>
);

function App() {
  return (

      <div>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/hats' element={<HatsPage />} />
          <Route path='/jackets' element={<JacketPage />} />
          <Route path='/sneakers' element={<SneakerPage />} />
          <Route path='/mens' element={<MensPage />} />
          <Route path='/womens' element={<WomensPage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </div>


  );
}

export default App;