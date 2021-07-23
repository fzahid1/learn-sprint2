import React, { Component } from "react";
const axios = require("axios");

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomFact: "",
    };
  }

  componentDidMount() {
    fetch("https://uselessfacts.jsph.pl/random.json?language=en")
      .then((response) => response.json())
      .then((resp) => this.setState({ randomFact: resp["text"] }));
  }

  render() {
    return (
      <div className="footer">
        <div>
          <h2>Do It Right!</h2>
        </div>
        <div style={{ paddingBottom: "10px" }}>Random Fact: {this.state.randomFact}</div>
      </div>
    );
  }
}
