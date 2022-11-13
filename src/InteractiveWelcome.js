import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ""
        }
    }

    handlerInputName = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <input type="text" name="username" onChange={this.handlerInputName} />
                <Welcome name={this.state.username} />
            </div>
        )
    }
}