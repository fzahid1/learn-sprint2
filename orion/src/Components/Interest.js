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

  //handler for the getting the specfic time from input
  handleGetSpecific = (e) => {
    this.setState({ specificTime: e.target.value });
  };

  //function for calculating and setting the total balance
  submitAmount = (e) => {
    e.preventDefault();
    const starting = this.state.startingBalance;
    const time = this.state.time;
    const ir = (this.state.interestRate / 100).toFixed(2);
    const specificTime = this.state.specificTime;
    const totalInterest = starting * (time / specificTime) * ir;
    const total = parseInt(starting) + parseInt(totalInterest);
    console.log(total, starting, time, ir);
    this.setState({ totalInterest: totalInterest, totalBalance: total });
  };

  state = {
    startingBalance: "",
    interestRate: "",
    totalBalance: "",
    time: "",
    totalInterest: "",
    specificTime: "12",
  };
  render() {
    return (
      <div>
        <h1>Interest Calculator</h1>
        <form>
          <div className="block">
            <div>
              <label>Starting Amount:</label>
              <input
                type="number"
                name="startingAmount"
                onChange={this.handleGetStarting}
                style={{ width: "190px" }}
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
                style={{ width: "190px" }}
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
              <select
                className=".input-holder"
                type="number"
                onChange={this.handleGetSpecific}
                name="Time"
                style={{ width: "110px" }}
              >
                <option value="12">Months</option>
                <option value="4">Quarters</option>
                <option value="2">Semi-annually</option>
                <option value="1">Annually</option>
              </select>
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
