import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Rates from './Rates/Rates';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, HashRouter , Route , Routes} from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes><Route  path = '/' element = {<App/>} ></Route> </Routes>
      <Routes><Route  path = '/Rates' element = { <Rates/>} ></Route></Routes >
    </HashRouter>
 </React.StrictMode>,
  document.getElementById('root')
);



  