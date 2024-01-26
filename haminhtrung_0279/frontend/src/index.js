import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './layouts/CartContext';

ReactDOM.render(
  <BrowserRouter>
    <CartProvider>
      <App />
    </CartProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
