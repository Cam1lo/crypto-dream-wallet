import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import logo from './assets/logo.svg'
const root = ReactDOM.createRoot(document.getElementById('root'));
 
root.render(
  <div>
    <img className='logo' src={logo} alt=""/>
    <div className="app-container">
      <App />
    </div>
  </div>
);

