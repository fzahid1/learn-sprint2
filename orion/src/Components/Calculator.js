import React, { Component } from "react";

let emptyState = {
  input1: "",
  input2: "",
  operator: "",
  result: "",
  display: "",
  previous: "",
};

export default class Calculator extends Component {
  handleNumClick = (event) => {
    if (this.state.operator === "") {
      this.setState({
        input1: this.state.input1 + event.target.name,
        display: this.state.input1 + event.target.name,
        previous: this.state.input1 + event.target.name,
      });
    } else {
      this.setState({
        input2: this.state.input2 + event.target.name,
        display: this.state.input2 + event.target.name,
        previous: this.state.input2 + event.target.name,
      });
    }
  };

  handleOpClick = (event) => {
    switch (this.state.previous) {
      case "+":
        if (event.target.name === "+") {
          this.setState({ operator: "+" });
        } else {
          this.setState({ operator: event.target.name });
        }
        break;
      case "-":
        if (event.target.name === "-") {
          this.setState({ operator: "-" });
        } else {
          this.setState({ operator: event.target.name });
        }
        break;
      case "x":
        if (event.target.name === "x") {
          this.setState({ operator: "x" });
        } else {
          this.setState({ operator: event.target.name });
        }
        break;
      case "%":
        if (event.target.name === "%") {
          this.setState({ operator: "%" });
        } else {
          this.setState({ operator: event.target.name });
        }
        break;
    }

    if (this.state.operator !== "") {
      let answer = this.doMath(
        this.state.input1,
        this.state.input2,
        this.state.operator
      );
      this.setState({
        display: answer,
        input1: answer,
        operator: event.target.name,
        input2: "",
        previous: event.target.name,
      });
    } else {
      this.setState({
        operator: event.target.name,
        display: event.target.name,
        previous: event.target.name,
      });
    }
  };

  handleEqualsClick = (event) => {
    let answer = this.doMath(
      this.state.input1,
      this.state.input2,
      this.state.operator
    );
    this.setState({
      result: answer,
      display: answer,
      previous: "",
    });
  };

  doMath = (input1, input2, operator) => {
    let firstNum = parseFloat(input1);
    let secondNum = parseFloat(input2);
    switch (operator) {
      case "+":
        return firstNum + secondNum;
      case "-":
        return firstNum - secondNum;

      case "x":
        return firstNum * secondNum;
      case "%":
        return firstNum / secondNum;
    }
  };

  handleClear = () => {
    this.setState(emptyState);
  };

  state = {
    input1: "",
    input2: "",
    operator: "",
    result: "",
    display: "",
    previous: "",
  };
  render() {
    return (
      <div>
        <h1>Simple Calculator</h1>
        <div className="calcButtons">
          <p className="display">{this.state.display}</p>
          <button name="7" onClick={this.handleNumClick}>
            7
          </button>
          <button name="8" onClick={this.handleNumClick}>
            8
          </button>
          <button name="9" onClick={this.handleNumClick}>
            9
          </button>
          <button name="%" onClick={this.handleOpClick}>
            %
          </button>
          <br></br>
          <button name="4" onClick={this.handleNumClick}>
            4
          </button>
          <button name="5" onClick={this.handleNumClick}>
            5
          </button>
          <button name="6" onClick={this.handleNumClick}>
            6
          </button>
          <button name="x" onClick={this.handleOpClick}>
            x
          </button>
          <br></br>
          <button name="1" onClick={this.handleNumClick}>
            1
          </button>
          <button name="2" onClick={this.handleNumClick}>
            2
          </button>
          <button name="3" onClick={this.handleNumClick}>
            3
          </button>
          <button name="+" onClick={this.handleOpClick}>
            +
          </button>
          <br></br>
          <button name="0" onClick={this.handleNumClick}>
            0
          </button>

          <button onClick={this.handleClear}>clear</button>

          <button type="submit" onClick={this.handleEqualsClick}>
            =
          </button>

          <button name="-" onClick={this.handleOpClick}>
            -
          </button>
        </div>
      </div>
    );
  }
}
