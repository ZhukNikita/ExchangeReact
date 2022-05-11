//€₽₴$
import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import usd1 from './image/usa.jpg';
import uah1 from './image/ukraine.png';
import eur1 from './image/euro.png';
import rus1 from './image/russia.png';
import { Link } from 'react-router-dom';
import Title from "./Title/Title.js";
import Currency from "./Currency/Currency.js";
import Result from "./Result/Result.js";
import Calc from "./Calc/Calc"

class App extends React.Component {
   constructor(props){
      super(props)
      this.state = {
        isLoaded: false,
        error: null,
        usdRate: [],
        rubRate: [],
        eurRate: [],
    }};

    componentDidMount() {
        fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
        .then((response) => response.json())
        .then((data => {
            this.setState({ 
              isLoaded: true,
              usdRate : data.find(usd => usd.cc === "USD").rate.toFixed(3),
              rubRate : data.find(rub => rub.cc === "RUB").rate.toFixed(3),
              eurRate : data.find(eur => eur.cc === "EUR").rate.toFixed(3)
            });
        }))
        .catch((error) => {
          this.setState({
          isLoaded: true,
          error
        });
      })
    }

  render(){
    const {error , isLoaded, eurRate , usdRate , rubRate} = this.state;
    if (error){
      return (
  <div className="App">
    {alert('Ошибка : Нет соединения с сервером')}
    <Title/>
    <Currency usd = {this.state.usdRate}  eur = {this.state.eurRate}  rub = {this.state.rubRate}/>
    <Result usd = {this.state.usdRate}  eur = {this.state.eurRate}  rub = {this.state.rubRate}/>
    <Calc/>
  </div>
  );
}
else {
  return(
<div className="App">
  <Title/>
    <Currency usd = {this.state.usdRate}  eur = {this.state.eurRate}  rub = {this.state.rubRate}/>
    <Result usd = {this.state.usdRate}  eur = {this.state.eurRate}  rub = {this.state.rubRate}/>
    <Calc/>
  </div>)
}
}}
export default App;




