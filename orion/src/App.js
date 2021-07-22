import './App.css';
import Footer from '../src/Components/Footer';
import Input from './Components/Input'
import Header from './Components/Header'
import React, { Component } from 'react'

export default class App extends Component {

  handleTotal = (event) => {
    this.setState({
      total: event.target.value
    })
  }
  handleTip = (event) => {
    this.setState({
      tipPercentage: event.target.value
    })
  }

  calcTip = (event) => {
    event.preventDefault();
    let tip = parseFloat(this.state.total * this.state.tipPercentage / 100).toFixed(2)
    let bill = parseFloat(parseFloat(this.state.total) + parseFloat(tip)).toFixed(2)
    this.setState({
      totalTip: tip,
      totalBill: bill
    })
  }

  state = {
    total: "",
    tipPercentage: "",
    totalTip: "",
    totalBill: ""
  }


  render() {
    return (
      <div className = "App">
        <form onSubmit={this.calcTip}>
            <div>
              <h1>Ally Tip Calulator</h1>
            </div>
            <label>Bill Amount:</label>
            <input type="text" value = {this.state.total} onChange= {this.handleTotal} name="amount" id="bill"></input>
            <br></br>
            <label>Tip Percentage:</label>
            <input type="text" value = {this.state.tipPercentage} onChange={this.handleTip} name="tip" id="tip"></input>
            <input type="submit" value="Calculate Tip" ></input>
        </form>
        <p>tip: ${this.state.totalTip}</p>
        <p>total bill: ${this.state.totalBill}</p>
        <div>
            <h2>Suggested Tips</h2>
            <h3>10%: ${this.state.total * .10}</h3>
            <h3>15%: ${this.state.total * .15}</h3>
            <h3>20%: ${this.state.total * .2}</h3>
            <h3>25%: ${this.state.total * .25}</h3>
        </div>
        <Footer/>
      </div>
    );
  }
}


