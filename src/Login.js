import React from "react";

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            remember: false
        }
    }

    handlerInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const type = event.target.type;
        const checked = event.target.checked;

        this.setState({
            [name]: type === "checkbox" ? checked : value
        })
    }

    render() {
        return (
            <div>
                <input type="text" name="username" onChange={this.handlerInput} />
                <input type="password" name="password" onChange={this.handlerInput} />
                <input type="checkbox" name="remember" onChange={this.handlerInput} />
            </div>
        )
    }
}