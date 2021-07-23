import React, { Component } from "react";
import logo from "../Images/School_Logo.jpg";
import axios from "axios";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: "",
    };
  }

  componentDidMount() {
    axios({
      url: "https://goweather.herokuapp.com/weather/Detroit",
      method: "GET",
    }).then((response) => {
      var celsius = response.data.temperature.substring(0.2);
      var fahrenheit = Math.round((parseInt(celsius) * 9) / 5 + 32);
      this.setState({ temperature: fahrenheit + " \xB0" + "F" });
    });
    axios({
      url: "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=ALLY&interval=5min&apikey=VOWALWW13KBEOT79",
      method: "GET",
    }).then((response) => {
      var stockAlly =
        response["data"]["Time Series (5min)"]["2021-07-22 18:05:00"][
          "1. open"
        ];
      console.log(stockAlly);
      this.setState({ stock: stockAlly });
    });
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
        <button
          className="insideHeader"
          name="tipCalculator"
          onClick={this.props.switchPage}
        >
          Tip Calculator
        </button>
        <button
          className="insideHeader"
          name="interestCalculator"
          onClick={this.props.switchPage}
        >
          Interest Calculator
        </button>
        <button
          className="insideHeader"
          name="currencyExchange"
          onClick={this.props.switchPage}
        >
          Currency Exchange
        </button>
        <button
          className="insideHeader"
          name="simpleCalculator"
          onClick={this.props.switchPage}
        >
          Simple Calculator
        </button>

        <div>
          <p>Detroit: {this.state.temperature}</p>
          <p>ALLY: {this.state.stock}</p>
        </div>
      </div>
    );
  }
}
