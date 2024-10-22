import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Rent from "./pages/rent.js";
import RentTwo from './pages/rent2.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/book" element={<RentTwo />} />
        <Route path="/rent" element={<Rent />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
