import React from 'react'

export default function Input(props) {
    return (
        <div>
            <form>
                <label>Bill Amount:</label>
                <input type="text" name="amount"></input>
                <br></br>
                <label>Tip Percentage:</label>
                <input type="text" name="tip"></input>
            </form>

            <button onClick={props.submit}>Submit</button>
        </div> 
    )
}
