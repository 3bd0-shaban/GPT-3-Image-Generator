import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import { Store } from './Redux/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={
            <App />
          } />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
