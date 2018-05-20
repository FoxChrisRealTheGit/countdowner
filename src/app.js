import React from "react";
import "./app.css";
import Clock from "./clock";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: "February 21, 2019",
            newDeadline: ""
        }
        this.changeDeadline = this.changeDeadline.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    changeDeadline() {
        this.setState({
            deadline: this.state.newDeadline,
            newDeadline: ""
        })
    }

    handleInputChange(e) {
        this.setState({
            newDeadline: e.target.value
        })
    }


    render() {
        return (
            <div className="App">
                <div className="App-title">Countdown to {this.state.deadline}</div>
                <Clock 
                    deadline={this.state.deadline}
                />
                <div>
                    <input
                        onChange={event => this.handleInputChange(event)}
                        placeholder="new date" />
                    <button onClick={() => this.changeDeadline()}>Submit</button>
                </div>
            </div>
        )
    }
}