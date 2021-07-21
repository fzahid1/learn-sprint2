import './App.css';
import Footer from '../src/Components/Footer';
import Input from './Components/Input'
import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      billAmount: 0.0,
      tipPercentage: 0.0
    }

    this.submit = this.submit.bind(this);
  }

  submit() {
    
  }



  render() {
    return (
      <div className = "App">
        <form>
            <label>Bill Amount:</label>
            <input type="number" name="amount" id="bill"></input>
            <br></br>
            <label>Tip Percentage:</label>
            <input type="number" name="tip" id="tip"></input>
            <input type="submit" value="Calculate Tip" ></input>
          </form>


        <Footer/>
      </div>
    );
  }
}


