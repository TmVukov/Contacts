import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import StateProvider from './utils/stateProvider'


ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
    <App/>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

