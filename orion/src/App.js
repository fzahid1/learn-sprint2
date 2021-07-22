import './App.css';
import Footer from '../src/Components/Footer';
import Input from './Components/Input'
import Header from './Components/Header'
import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      billAmount: 0.0,
      tipPercentage: 0.0
    }

    this.submit = this.submit.bind(this);
  }


  submit() {
    
  }



  render() {
    return (
      <div className = "App">
        <Header/>
        <Input />
        <Footer/>
      </div>
    );
  }
}
