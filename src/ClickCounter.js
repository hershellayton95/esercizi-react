import React from "react";

export class ClickTracker extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            counter: "The ____________ has been pressed"
        }
    }

    handlerClick = (event) => {
        this.setState({
            counter: "The " + event.target.innerText + " has been pressed"
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handlerClick}>Fist Button</button>
                <button onClick={this.handlerClick}>Second Button</button>
                <button onClick={this.handlerClick}>Third Button</button>
            </div>
        )
    }
}