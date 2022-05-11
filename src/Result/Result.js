//$€₴₽
import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import usdImg from '../image/usa.jpg';
import uahImg from '../image/ukraine.png';
import eurImg from '../image/euro.png';
import rusImg from '../image/russia.png';

class Result extends Component {
  constructor(props){
    super(props);

        this.state = {
        value: '',
        resultUsd: null,
        resultEur: null,
        resultRub: null,
        resultUah: null,
        selector: 'UAH'
    }
this.handleChange = this.handleChange.bind(this);
this.selectorChange = this.selectorChange.bind(this);
this.multi = this.multi.bind(this);

  };

      selectorChange(event) {
        onchange = this.multi
    this.setState({selector: event.target.value});
  };

      handleChange(event) {
    this.setState({value: event.target.value})
    ;
  }



multi(props) {
let usd = this.props.usd;
let eur = this.props.eur;
let rub = this.props.rub;
let uah = 1;
let input = this.state.value;
let select = this.state.selector;
if (this.state.selector === 'UAH') {
this.setState({
  resultUsd : (input / usd).toFixed(2) + ' $',
  resultEur : (input / eur).toFixed(2) + ' €',
  resultRub : (input / rub).toFixed(2) + ' ₽',
  resultUah : (input / uah) + ' ₴'

});
    } 

    else if (this.state.selector === 'USD') {
      this.setState({
  resultUsd : (input / uah) + ' $',
  resultEur : (input * usd / eur).toFixed(2) + ' €',
  resultRub : (input * usd / rub).toFixed(2) + ' ₽',
  resultUah : (input * usd).toFixed(2) + ' ₴'

});

    } else if (this.state.selector === 'EUR') {
      this.setState({
  resultUsd : (input * eur / usd).toFixed(2) + ' $',
  resultEur : (input / uah) + ' €' ,
  resultRub : (input * eur / rub).toFixed(2) + ' ₽',
  resultUah : (input * eur).toFixed(2) + ' ₴'

});

    } else {
      this.setState({
  resultUsd : (input * rub / usd).toFixed(2) + ' $',
  resultEur : (input * rub / eur).toFixed(2) + ' €',
  resultRub : (input/ uah)  + ' ₽',
  resultUah : (input * rub / uah).toFixed(2) + ' ₴'

}); 

        }

}

render(){
return(
<div className= "Set"> 
  <input value={this.state.value} placeholder="Введите количество валюты" size="25px" className="numb1" onChange={this.handleChange}/>
  <select value={this.state.selector} onChange={this.selectorChange} className='select'>
    <option value="UAH">Гривна</option>
    <option value="USD">Доллар</option>
    <option value="EUR">Евро</option>
    <option value="RUB">Рубль</option>
  </select>
  <div>
    <p><button onClick ={this.multi} className="butt">Обмен</button> </p>
  </div>
  <p>  Вы получите:   </p>
  <div className="result">
    <div className="result-l">
      <div className="currency">
        <div className="currency-left">
          <img src={usdImg} height="22" width="40" alt = "$"/>
        </div> 
        <div className="currency-right">
          <span>{this.state.resultUsd}</span>
        </div>
      </div>
      <div className="currency">
        <div className="currency-left">
          <img src={eurImg} height="22" width="40" alt = "€"/>
        </div> 
        <div className="currency-right">
          <span>{this.state.resultEur}</span>
        </div>
      </div>
    </div>
    <div className="result-r">
      <div className="currency">
        <div className="currency-left">
          <img src={rusImg} height="22" width="40" alt = "₽"/>
        </div> 
        <div className="currency-right">
          <span>{this.state.resultRub}</span>
        </div>
      </div>
      <div className="currency">
        <div className="currency-left">
          <img src={uahImg} height="22" width="40" alt = "₴"/>
        </div> 
        <div className="currency-right">
          <span>{this.state.resultUah}</span>
        </div>
      </div>
    </div>
  </div>
</div>
	);
}}


export default Result;