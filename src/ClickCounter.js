import React from "react";

export class ClickCounter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            counter: 0
        }
    }
    
    render() {
        return (
            <div>
                <p>Counter: {this.state.counter}</p>
                <button onClick={() => this.setState({ counter: this.state.counter + 1})}>Increment</button>
            </div>
        )
    }
}