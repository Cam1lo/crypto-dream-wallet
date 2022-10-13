import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import logo from './assets/logo.svg'
import { Provider } from 'react-redux'
import { store } from './state'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <div>
      <img className='logo' src={logo} alt="" />
      <div className="app-container">
        <App />
      </div>
    </div>
  </Provider>
);

