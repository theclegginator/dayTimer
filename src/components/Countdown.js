import React, { Component } from 'react'
import ClockCountdown from './ClockCountdown'
import './style.css';

export default class Countdown extends Component {

    render() {
        return this.props.instances.map((key, index) =>
 
            <div className="countdownContainer slide-in-right" style={{backgroundColor: `rgba(${key.color1}, ${key.color2}, ${key.color3}, 0.95)`}}>
                <label>
                    <input type="text" name="Activity" placeholder="Label Your Activity Here"/>
                </label>
                <ClockCountdown secondsRemaining={key.secondsRemaining} minutesRemaining={key.minutesRemaining} hoursRemaining={key.hoursRemaining}/>
            </div>
            
        )
    }
}
