import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NavBar from './componens/NavBar/NavBar';
import reportWebVitals from './reportWebVitals';
import TopHeader from './componens/TopHeader/TopHeader';
import SerVice from './componens/SerVice/SerVice';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <NavBar />
    <TopHeader />
    <SerVice />
  </React.StrictMode>
);


reportWebVitals();
