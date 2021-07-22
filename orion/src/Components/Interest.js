import React, { Component } from "react";

import "./interest.css";
export default class Interest extends Component {
  //handler for the getting the starting balance from input
  handleGetStarting = (e) => {
    this.setState({ startingBalance: e.target.value });
  };
  //handler for the getting the interest rate from input
  handleGetInterestRate = (e) => {
    this.setState({ interestRate: e.target.value });
  };

  //handler for the getting the time from input
  handleGetTime = (e) => {
    this.setState({ time: e.target.value });
  };

  //function for calculating and setting the total balance
  submitAmount = (e) => {
    e.preventDefault();
    let starting = this.state.startingBalance;
    let time = this.state.time;
    let ir = (this.state.interestRate / 100).toFixed(2);
    let totalInterest = starting * time * ir;
    let total = parseInt(starting) + parseInt(totalInterest);
    console.log(total, starting, time, ir);
    this.setState({ totalInterest: totalInterest, totalBalance: total });
  };

  state = {
    startingBalance: "",
    interestRate: "",
    totalBalance: "",
    time: "",
    totalInterest: "",
  };
  render() {
    return (
      <div>
        <form>
          <div className="block">
            <div>
              <label>Starting Amount:</label>
              <input
                type="number"
                name="startingAmount"
                onChange={this.handleGetStarting}
                style={{ width: "176px" }}
              />
            </div>
            <div className="whitespace" />
            <div>
              <label>Interest Rate: </label>
              <input
                className=".input-holder"
                type="percentage"
                onChange={this.handleGetInterestRate}
                name="interestRate"
                style={{ width: "176px" }}
              />
            </div>
            <div className="whitespace" />

            <div>
              <label>Time: </label>
              <input
                className=".input-holder"
                type="number"
                onChange={this.handleGetTime}
                name="Time"
                style={{ width: "80px" }}
              />
              <input
                className=".input-holder"
                type="number"
                onChange={this.handleGetTime}
                name="Time"
                style={{ width: "80px" }}
              />
            </div>
          </div>
          <div>
            <button className="Submit" onClick={this.submitAmount}>
              Submit
            </button>
          </div>
        </form>
        <div className="return">
          <h2>Total Interest: {this.state.totalInterest}</h2>
          <h2>Total return: {this.state.totalBalance}</h2>
        </div>
      </div>
    );
  }
}
