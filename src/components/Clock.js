import React, { Component } from 'react'

export default class Clock extends Component {
    state = ({
        secondsElapsed: this.props.secondsElapsed,
        minutesElapsed: this.props.minutesElapsed,
        hoursElapsed: this.props.hoursElapsed,
    })

    getSeconds = () => {
        return ("0" + this.state.secondsElapsed % 60).slice(-2);
    }
    getMinutes = () => {
        return ("0" + this.state.minutesElapsed % 60).slice(-2);
    }
    getHours = () => {
        return ("0" + this.state.hoursElapsed % 60).slice(-2);
    }
    handleStart = () => { 
        this.counter = setInterval(() => {
            // Minutes logic
            if (this.state.secondsElapsed < 59) {
                this.setState({secondsElapsed: this.state.secondsElapsed + 1})
            }
            else {
                this.setState({secondsElapsed: 0})
                // Hours logic
                if (this.state.minutesElapsed < 59) {
                    this.setState({minutesElapsed: this.state.minutesElapsed + 1})
                }
                else {
                    this.setState({minutesElapsed: 0, hoursElapsed: this.state.hoursElapsed + 1})
                }
            }
        }, 1000)
    }
    handleStop = () => {
        clearInterval(this.counter)
    }
    handleReset = () => {
        clearInterval(this.counter)
        this.setState({
            secondsElapsed: 0,
            minutesElapsed: 0,
            hoursElapsed: 0,
        })
    }

    render() {
        // This section contains the timer display and start/stop buttons
        return (
            <div>
                <h2>{this.getHours()}:{this.getMinutes()}:{this.getSeconds()}</h2> 
                <button type="button" onClick={this.handleStart.bind(this)}>Start</button>
                <button type="button" onClick={this.handleStop.bind(this)}>Stop</button>  
                <button type="button" onClick={this.handleReset.bind(this)}>Reset</button>  
            </div>
        )
    }
}
