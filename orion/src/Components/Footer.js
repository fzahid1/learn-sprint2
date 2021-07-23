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
    axios.get("https://dog-api.kinduff.com/api/facts").then(
      (res) => {
        const doggoFacts = res.facts;
        this.setState({ doggoFact: doggoFacts });
      },
      (error) => {
        console.log(error);
      }
    );
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
