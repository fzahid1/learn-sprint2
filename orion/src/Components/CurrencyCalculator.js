import React, { Component } from 'react'

export default class CurrencyCalculator extends Component {

    handleAmount = (event) => {
        this.setState({
          amount: event.target.value
        })
      }
      handleRate = (event) => {
        this.setState({
          rate: event.target.value,
          finalUnit: event.target.options[event.target.selectedIndex].text
        })
      }

      calcConversion = (event) => {
        event.preventDefault();
        let conversion = this.state.amount * this.state.rate;
        this.setState({
            final: conversion
        })
      }

      euros = (event) => {
          event.preventDefault();
          this.setState({
              finalUnit: "Euros"
          })
      }

    state = {
    amount: "", 
    rate: ".85", 
    final: "0", 
    finalUnit:"Euros"
    }


    render() {
        return (
            <div>
              <h1>Currency Exchange</h1>
        <form onSubmit={this.calcConversion}>
            <label>Amount: $</label>
            <input type="text" value = {this.state.amount} onChange= {this.handleAmount} name="amount" id="bill"></input>
            <br></br>
            <label>From: $USD</label>
            <br></br>
            <label>To:</label>
            <select value={this.state.rate} name={this.state.finalUnit} onChange={this.handleRate}>
                <option name="Euros" value=".85">Euros</option>
                <option name="Pesos" value="20.21">Pesos</option>
                <option name="Pounds" value=".73">Pounds</option>
            </select>
            <br></br>
            <input className="Submit" type="submit" value="Calculate Tip" ></input>
        </form>
        <p className="output">{this.state.final} {this.state.finalUnit}</p>
      </div>
        )
    }
}
