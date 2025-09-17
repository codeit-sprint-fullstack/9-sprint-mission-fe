import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';


import './assets/css/reset.css';
import './assets/css/styles.css';
import './assets/css/items.css'; 
import './assets/css/login.css';
import './assets/css/signup.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);