import React, { Component } from 'react'
import Clock from './Clock'
import './style.css';


export default class Stopwatch extends Component {

    render() {
        return this.props.instances.map((key, index) =>
 
            <div className="stopwatchContainer slide-in-left" style={{backgroundColor: `rgba(${key.color1}, ${key.color2}, ${key.color3}, 0.9)`}}>
                <label>
                    <input type="text" name="Activity" placeholder="Label Your Activity Here"/>
                </label>
                <Clock secondsElapsed={key.secondsElapsed} minutesElapsed={key.minutesElapsed} hoursElapsed={key.hoursElapsed}/>
            </div>
            
        )
    }
}
