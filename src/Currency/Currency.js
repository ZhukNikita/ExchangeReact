import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import usd1 from '../image/usa.jpg';
import eur1 from '../image/euro.png';
import rus1 from '../image/russia.png';
import '../App.js';




class Currency extends Component {    
render(){

return(
    <div>
      <div className="currency">
        <div className = 'currency-left'>
          <img src={usd1} width="40" height="22" alt = "$"/>
        </div>
        <div className = 'currency-right'>Курc {this.props.usd}</div>
      </div>
      <div className="currency">
        <div className="currency-left">
          <img src={eur1} height="22" width="40" alt = "€"/>
        </div>  
        <div className="currency-right">Курс {this.props.eur}</div>
      </div>
      <div className="currency">
        <div className="currency-left">
          <img src={rus1} height="22" width="40" alt = "₽"/>
        </div>
        <div className="currency-right">Курс {this.props.rub}</div>
      </div>
    </div>
);

 }}
 export default Currency;