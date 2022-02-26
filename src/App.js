import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import './App.scss';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
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
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </div>


  );
}

export default App;