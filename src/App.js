import React from 'react';
import { Component } from 'react'
import logo from './logo.svg';
import Stopwatch from './components/Stopwatch';
import Countdown from './components/Countdown';
import './App.css';

class App extends Component {
  state = {
    stopwatches: [{
      secondsElapsed: 0,
      minutesElapsed: 0,
      hoursElapsed: 0,
      color1: Math.random()*256,
      color2: Math.random()*256,
      color3: Math.random()*256,
    }],
    countdowns: [{
      secondsRemaining: 0,
      minutesRemaining: 0,
      hoursRemaining: 2,
      color1: Math.random()*256,
      color2: Math.random()*256,
      color3: Math.random()*256,
    }]
  }

  // Adding a new stopwatch with the button click event handler
  addStopwatch = () => {
    const newStopwatch = {
      secondsElapsed: 0,
      minutesElapsed: 0,
      hoursElapsed: 0,
      color1: Math.random()*256,
      color2: Math.random()*256,
      color3: Math.random()*256,
    }
    this.setState({
      stopwatches: [...this.state.stopwatches, newStopwatch]
    })
  }
  addCountdown = () => {
    const newCountdown = {
      secondsRemaining: 0,
      minutesRemaining: 0,
      hoursRemaining: 2,
      color1: Math.random()*256,
      color2: Math.random()*256,
      color3: Math.random()*256,
    }
    this.setState({
      countdowns: [...this.state.countdowns, newCountdown]
    })
  }

  render() {
    return(
      <div className="App">
        <h1>Day Organizer</h1>
        <button type="button" onClick={this.addStopwatch}>Add Stopwatch</button>
        <button type="button" onClick={this.addCountdown}>Add Countdown</button>
        <Stopwatch instances={this.state.stopwatches} />
        <hr></hr>
        <Countdown instances={this.state.countdowns} />
      </div>
    )};
}

export default App;
