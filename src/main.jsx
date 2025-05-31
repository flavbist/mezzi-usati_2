import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Consultazione from './pages/Consultazione';
import Gestione from './pages/Gestione';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Consultazione />} />
        <Route path="/gestione" element={<Gestione />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);