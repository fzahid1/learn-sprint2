import "./App.css";
import React, { Component } from "react";
import Footer from "../src/Components/Footer";
import Header from "./Components/Header";
import TipCalculator from "./Components/TipCalculator";
import Interest from "./Components/Interest";
import CurrencyCalculator from "./Components/CurrencyCalculator";
import Calculator from "./Components/Calculator";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "tipCalculator",
    };
    this.switch_page =
      this.switch_page.bind(this);

  }

  switch_page(event) {
    console.log(event.target.name)
    this.setState({ page: event.target.name})
  }

  render() {
    const page = this.state.page;

    let calc;
    if (page === "tipCalculator") {
      calc = <TipCalculator />;
    } else if (page === "interestCalculator") {
      calc = <Interest />;
    } else if (page === "currencyExchange") {
      calc = <CurrencyCalculator />;
    } else {
      calc = <Calculator />;
    }

    return (
      <div className="App">
        <Header
          switchPage={this.switch_page}
        />
        {calc}
        <Footer />
      </div>
    );
  }
}
