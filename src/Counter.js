import React from "react";

export class Counter extends React.Component {



    constructor(props) {
        super(props);
        this.state = {
            counter: this.props.initialValue,
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState((state, props) => ({
                counter: state.counter + props.incrementInterval
            }));
        }, this.props.incrementAmount)
    }

    render() {

        return (
            <div>
                <h1>count: {this.state.counter}</h1>
            </div>
        )
    }
}
