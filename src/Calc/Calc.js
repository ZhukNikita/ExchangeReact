import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../App.css'; 



class Calc extends Component{
  constructor(props){
    super(props);
        this.state = {
        input1: '',
        result: null,
        input2: ''

    }
this.handleChange1 = this.handleChange1.bind(this);
this.handleChange2 = this.handleChange2.bind(this);
this.plus = this.plus.bind(this);
this.minus = this.minus.bind(this);
this.multi = this.multi.bind(this);
this.divide = this.divide.bind(this);
this.reset = this.reset.bind(this);
}
 handleChange1(event) {
    this.setState({input1: event.target.value});
  }
  handleChange2(event) {
    this.setState({input2: event.target.value});
  }
plus(){
this.setState({result :(this.state.input1* 1) + (this.state.input2 * 1) });
}
minus(){
this.setState({result :(this.state.input1* 1) - (this.state.input2 * 1) });
}
multi(){
this.setState({result :((this.state.input1* 1) * (this.state.input2 * 1)).toFixed(2) });
}
divide(){
this.setState({result :((this.state.input1* 1) / (this.state.input2 * 1)).toFixed(2) });
}
reset(){
	this.setState({result : null,
		input1: '',
		input2: ''
	});
}
	render(){
		return(
			<div className="Calc">
				<div>
					<input type="text" value={this.state.input1} placeholder="Введите количество валюты" size="25px" className="numb1" onChange={this.handleChange1} />
				</div>
				<div>
					<button onClick={this.plus}>+</button>
					<button onClick={this.minus}>-</button>
					<button onClick={this.divide}>÷</button>
					<button onClick={this.multi}>×</button>
				</div>
				<div>
					<input value={this.state.input2} placeholder="Введите количество валюты" size="25px" className="numb1" onChange={this.handleChange2} />
				</div>
				<div>Результат: {this.state.result}</div>
				<div className="reset">
					<button onClick={this.reset}>Сброс</button>
				</div>


			</div>
			)
	}
}
export default Calc;