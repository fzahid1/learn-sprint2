import React, { Component } from "react";

let clearedState = { countryCode: "eur", final: "", finalUnit: "", rate: "" };
export default class CurrencyCalculator extends Component {
  handleAmount = (event) => {
    this.setState({
      amount: event.target.value,
    });
  };
  handleCountryCode = (event) => {
    if (event.target.value !== "") {
      if (this.state.finalUnit !== "") {
        this.setState(clearedState);
      }
      this.setState({
        countryCode: event.target.value,
        finalUnit: event.target.options[event.target.selectedIndex].text,
      });
    }
  };

  calcConversion = (event) => {
    event.preventDefault();
    fetch(
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/" +
        this.state.countryCode +
        ".json"
    )
      .then((response) => response.json())
      .then((resp) => this.setState({ rate: resp[this.state.countryCode] }))
      .then(() =>
        this.setState({ final: this.state.amount * this.state.rate })
      );
  };

  state = {
    amount: "",
    countryCode: "eur",
    final: "",
    finalUnit: "",
    rate: "",
  };

  render() {
    return (
      <div>
        <h1>Currency Exchange</h1>
        <form onSubmit={this.calcConversion}>
          <label>From: $USD </label>
          <input
            type="text"
            value={this.state.amount}
            onChange={this.handleAmount}
            name="amount"
            id="bill"
          ></input>
          <br></br>
          <label>To: </label>
          <select onChange={this.handleCountryCode}>
            <option disabled selected name="selected" value="select">
              --Select Currency--
            </option>
            <option name="Euros" value="eur">
              Euros
            </option>
            <option name="Mexican Pesos" value="mxn">
              Mexican Pesos
            </option>
            <option name="Pounds" value="gbp">
              Pounds
            </option>
          </select>
          <br></br>
          <input className="Submit" type="submit" value="Convert"></input>
        </form>
        <p className="output">
          {this.state.final} {this.state.finalUnit}
        </p>
      </div>
    );
  }
}
