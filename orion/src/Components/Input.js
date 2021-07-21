import React from 'react'

export default function Input(props) {

    return (
        <div>
            <form>
                <label>Bill Amount:</label>
                <input type="number" name="amount" id="bill"></input>
                <br></br>
                <label>Tip Percentage:</label>
                <input type="number" name="tip" id="tip"></input>
                <output id="tipamount" for="bill tip" ></output>
            </form>

            <button onClick={props.submit}>Submit</button>
        </div> 
    )
}


