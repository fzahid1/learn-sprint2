import React, { Component } from "react";
const axios = require("axios");

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doggoFact: "",
    };
  }

  componentDidMount() {
    fetch("https://dog-api.kinduff.com/api/facts")
      .then((response) => response.json())
      .then((resp) => this.setState({ doggoFact: resp["facts"] }));
    console.log(this.doggoFact);
  }

  render() {
    return (
      <div className="footer">
        <div>
          <h2>Do It Right!</h2>
        </div>
        <div>{this.state.doggoFact}</div>
      </div>
    );
  }
}
