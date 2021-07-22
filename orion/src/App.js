import './App.css';
import Footer from '../src/Components/Footer';
import Header from './Components/Header'
import TipCalculator from './Components/TipCalculator';
import React, { Component } from 'react'

export default class App extends Component {
  state = {
    page: "TipCalculator"
  }


  render() {

    const page = this.state.page;

    let calc;
    if (page === "TipCalculator") {
      calc = <TipCalculator />
    }

    return (
      <div className = "App">
        <Header />
        {calc}
        <Footer/>
      </div>
    );
  }
}


