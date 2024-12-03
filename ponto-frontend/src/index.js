import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { tema } from './styles/tema';
import { GlobalStyle } from './styles/globalStyles';
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={tema}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);