import "./App.css";
import Footer from "../src/Components/Footer";
import Input from "./Components/Input";
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      billAmount: 0.0,
      tipPercentage: 0.0,
      totalTip: 0.0,
      totalBill: 0.0,
    };
  }
  submitBill = (bill, tip) => {
    // console.log(bill, " line 17");
    // console.log(tip, " line 20");
    const total = bill * (tip / 100).toFixed(2);
    // console.log(total, "this is total");
    const totalBill = total + parseInt(bill);
    // console.log(totalBill, "total bill here");
    this.setState({
      tipPercentage: bill,
      billAmount: bill,
      totalTip: total,
      totalBill: totalBill,
    });
  };

  render() {
    return (
      <div className="App">
        <Input submit={this.submitBill} />
        <h2>Tip Amount: {this.state.totalTip}</h2>
        <h2>Total Bill: {this.state.totalBill}</h2>
        <Footer />
      </div>
    );
  }
}
