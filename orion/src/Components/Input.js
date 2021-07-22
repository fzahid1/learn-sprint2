import React from "react";
import { useState } from "react";

export default function Input(props) {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");

  //handler for the getting the bill from input
  const handleGetBill = (event) => {
    setBill(event.target.value);
  };
  //handler for the getting the tip from input
  const handleGetTip = (event) => {
    setTip(event.target.value);
  };

  const submitBill = () => {
    props.submit(bill, tip);
  };
  return (
    <div>
      <form>
        <label>Bill Amount:</label>
        <input type="text" onChange={handleGetBill} name="amount"></input>
        <br></br>
        <label>Tip Percentage:</label>
        <input type="percentage" onChange={handleGetTip} name="tip"></input>
      </form>

      <button onClick={submitBill}>Submit</button>
    </div>
  );
}
