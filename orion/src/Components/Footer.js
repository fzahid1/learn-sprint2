import React, { Component } from "react";

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doggoFact: [],
    };
  }

  componentDidMount() {
    const doggofacts = "https://dog-api.kinduff.com/api/facts";
    fetch(doggofacts)
      .then((response) => response.json())
      .then(
        (data) => {
          console.log("This is your data", data);
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
