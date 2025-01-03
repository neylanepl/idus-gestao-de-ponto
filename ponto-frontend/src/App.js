import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import Login from './pages/login/login';
import Ponto from './pages/ponto/ponto';
import CadastrarUsuarioComum from './pages/cadastrarUsuarioComum/cadastrarUsuarioComum';
import PrivarRota from './components/privarRota/privarRota';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/ponto' element={<PrivarRota><Ponto/></PrivarRota>} />
          <Route path='/cadastrarusuariocomum' element={<PrivarRota><CadastrarUsuarioComum/></PrivarRota>} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
