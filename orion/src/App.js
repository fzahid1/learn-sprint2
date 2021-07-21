import './App.css';
import Footer from '../src/Components/Footer';
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
    this.setState({
      totalTip: tip
    })

    console.log(tip + " " + this.state.totalTip)
  }

  state = {
    total: "",
    tipPercentage: "",
    totalTip: ""
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


        <Footer/>
      </div>
    );
  }
}


