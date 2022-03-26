import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/content/App';
import reportWebVitals from './reportWebVitals';
import { Header } from './components/header/Header';
import { Create } from './components/create/Create';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
    <Create id="create"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
