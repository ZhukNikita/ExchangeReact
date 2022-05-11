import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../App.css'; 
import '../index.js';

class Rates extends Component {

    constructor(props){
      super(props)
      this.state = {
        usdRate: [],
        rubRate: [],
        eurRate: [],
    }};

    componentDidMount() {
        fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
        .then((response) => response.json())
        .then(data => {
            this.setState({ 
              usdRate : data.find(usd => usd.cc === "USD").rate.toFixed(3),
              rubRate : data.find(rub => rub.cc === "RUB").rate.toFixed(3),
              eurRate : data.find(eur => eur.cc === "EUR").rate.toFixed(3)
            });
        });
    }

render(){
	return(
<div className="Rates">
	<h1>Курс валют по отношению к гривне</h1>
	<div className="val">Курс доллара к гривне = {this.state.usdRate}</div>
	<div className="val">Курс евро к гривне = {this.state.eurRate}</div>
	<div className="val">Курс рубля к гривне = {this.state.rubRate}</div> 
</div>

)
}
}
	export default Rates;
