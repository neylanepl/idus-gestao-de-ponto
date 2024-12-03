import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import Login from './pages/login/login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Login/>} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
