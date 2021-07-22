import React, { Component } from "react";
import logo from "../Images/School_Logo.jpg";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <img
          className="insideLogo"
          src={logo}
          alt="Logo"
          width="110"
          height="88"
        ></img>
        <button className="insideHeader" onClick={this.props.tipCalculator}>
          Tip Calculator
        </button>
        <button
          className="insideHeader"
          onClick={this.props.interestCalculator}
        >
          Interest Calculator
        </button>
        <button className="insideHeader" onClick={this.props.currencyExchange}>
          Currency Exchange
        </button>
        <button className="insideHeader" onClick={this.props.simpleCalculator}>
          Simple Calculator
        </button>
      </div>
    );
  }
}
