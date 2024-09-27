// import { StrictMode } from 'react';
// import { ReactDOM } from 'react-dom/client';
// import { Footer } from '/components/Footer.jsx';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />

//     <Footer />
//   </StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
