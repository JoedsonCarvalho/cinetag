import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from 'routes';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
