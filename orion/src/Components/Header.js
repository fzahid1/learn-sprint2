import React, { Component} from 'react'
import logo from '../Images/School_Logo.jpg'



export default class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {count: 0}
    }
    
    
    increase_count = () => {
        this.setState({count: this.state.count+1});
    }



    render() {
        return (
            <div>
                <img src={logo} 
                       alt='Logo' width='110' height = '88'></img>
                <h1>Tip Calculator</h1>
                <p>{this.state.count}</p>
                <button onClick={this.increase_count}>increase count</button>
            </div>
        )
    }
}


