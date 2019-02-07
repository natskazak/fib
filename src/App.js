import React, { Component } from 'react';
import './App.css';
import bigInt from 'big-integer';
/*
*   1 ->  1
*      2  ->  3
*          5  ->  8
*              13  ->  21
* */

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {result: 0, fibIndex: 0 };
        this.onChangeInput = this.onChangeInput.bind(this);
        this.calc = this.calc.bind(this);
    }

    onChangeInput(event) {
        let value =  parseInt(event.currentTarget.value) ? parseInt(event.currentTarget.value) : 0;
        this.setState({fibIndex: value});
    }

    calc () {
        let index = document.getElementById('fib-index').value;
        this.fib(parseInt(index));
    }

    fib (d) {
        let x = bigInt(0),
            y =  bigInt(1);
        if ([0,1].indexOf(d) >= 0) {
            return 0;
        }
        let summ = bigInt();
        for(let i = 1; i < d; i++) {
            summ = bigInt(x.plus(y));
            x = y;
            y = summ;
        }
        this.setState({result: summ.toString()});
    }

    render() {
        return (
          <div className="App">
              <input
                  id={"fib-index"}
                  value={ this.state.fibIndex }
                  onChange={ this.onChangeInput }
              />
              <button onClick={ this.calc }>calc</button>
              <p >result length:{this.state.result.length}</p>
              <div id="result">{this.state.result}</div>
          </div>
        );
      }
}

export default App;
