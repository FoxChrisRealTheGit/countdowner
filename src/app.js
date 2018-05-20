import React from "react";
import "./app.css";

export default class App extends React.Component {

    render() {
        return (
            <div classsName="App">
                <div className="App-title">Countdown to February 21, 2019</div>
                <div>
                    <div className="Clock-days">14 Days</div>
                    <div className="Clock-hours">30 hours</div>
                    <div className="Clock-minutes">30 minutes</div>
                    <div className="Clock-seconds">20 seconds</div>
                </div>
                <div>
                    <input placeholder="new date" />
                    <button>Sumbmit</button>
                </div>
            </div>
        )
    }
}