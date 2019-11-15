import React, { Component } from 'react'

export default class ClockCountdown extends Component {
    state = ({
        secondsRemaining: this.props.secondsRemaining,
        minutesRemaining: this.props.minutesRemaining,
        hoursRemaining: this.props.hoursRemaining,
    })

    getSeconds = () => {
        return ("0" + this.state.secondsRemaining % 60).slice(-2);
    }
    getMinutes = () => {
        return ("0" + this.state.minutesRemaining % 60).slice(-2);
    }
    getHours = () => {
        return ("0" + this.state.hoursRemaining % 60).slice(-2);
    }
    handleStart = () => { 
        this.counter = setInterval(() => {
            // Seconds logic
            if (this.state.secondsRemaining <= 59 && this.state.secondsRemaining !== 0) {
                this.setState({secondsRemaining: this.state.secondsRemaining - 1})
            }
            // Hours and minutes logic
            if ((this.state.secondsRemaining === 0 && this.state.minutesRemaining > 0) || (this.state.secondsRemaining === 0 && this.state.hoursRemaining > 0)) {
                this.setState({secondsRemaining: 59})
                if (this.state.minutesRemaining !== 0) {
                    this.setState({minutesRemaining: this.state.minutesRemaining - 1})
                }

                else if (this.state.minutesRemaining === 0 && this.state.hoursRemaining > 0) {
                    this.setState({hoursRemaining: this.state.hoursRemaining -1, minutesRemaining: 59, })
                }
            } 
            else if (this.state.minutesRemaining === 0 && this.state.hoursRemaining === 0) {
                clearInterval(this.counter)
            }
        }, 1000)
    }
    handleStop = () => {
        clearInterval(this.counter)
    }
    handleReset = () => {
        clearInterval(this.counter)
        this.setState({
            secondsRemaining: 0,
            minutesRemaining: 5,
            hoursRemaining: 0,
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
