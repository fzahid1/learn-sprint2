import "./App.css";
import React, { Component } from "react";
import Footer from "../src/Components/Footer";
import Header from "./Components/Header";
import TipCalculator from "./Components/TipCalculator";
import Interest from "./Components/Interest";
import CurrencyCalculator from './Components/CurrencyCalculator';


export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      page: "tip calculator"
    }
    this.switch_interest_calculator = this.switch_interest_calculator.bind(this)
    this.switch_tip_calculator = this.switch_tip_calculator.bind(this)
    this.switch_currency_exchange = this.switch_currency_exchange.bind(this)
  }

switch_interest_calculator () {
  this.setState({page: 'interest calculator'})
}

switch_tip_calculator () {
  this.setState({page: 'tip calculator'})
}

switch_currency_exchange () {
  this.setState({page: 'currency exchange'})
}
 
  render() {
    const page = this.state.page;

    let calc;
    if (page === "tip calculator") {
      calc = <TipCalculator />
    } else if (page === "interest calculator") {
      calc = <Interest />
    } else {
      calc = <CurrencyCalculator />
    }

    return (
      <div className = "App">
        <Header tipCalculator = {this.switch_tip_calculator} 
          interestCalculator = {this.switch_interest_calculator} 
          currencyExchange = {this.switch_currency_exchange}/>
        {calc}
        <Footer/>
      </div>
    );
  }
}
