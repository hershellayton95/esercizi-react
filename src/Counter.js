import React from "react";

export class Counter extends React.Component {

    state = {
        counter: 0,
    }

    constructor(props) {
        super(props);

        setInterval(() => {
            this.setState({
                counter: this.state.counter + 1
            })
        }, 1000)
    }

    render() {

        return (
            <div>
                <h1 data-testid="heading">count: {this.state.counter}</h1>
            </div>
        )
    }
}