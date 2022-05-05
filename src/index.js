// Base Imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// Pages
import Home from './pages/home';
import Error from './pages/error';

// Styles
import './styles/index.css';

// Render Page
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);