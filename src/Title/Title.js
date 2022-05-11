import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import {Link} from 'react-router-dom';




class Title extends Component {



render(){
return(

	<div className="App">
    	<h2 className = "title" id="title">Конвертер валют</h2>
		<Link to ='/Rates'><h2 className="title">Курсы валют по отношению к гривне</h2></Link>
   </div>

	);

}}

export default Title