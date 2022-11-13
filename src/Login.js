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

    onLogin = () => {
        this.setState({
                username: this.state.username,
                password: this.state.password,
                remember: this.state.remember
        })
    }

    render() {
        return (
            <div>
                <input type="text" name="username" value={this.state.username} onChange={this.handlerInput} />
                <input type="password" name="password" value={this.state.password}  onChange={this.handlerInput} />
                <input type="checkbox" name="remember" checked={this.state.remember}  onChange={this.handlerInput} />
                <div>
                    <button type="button" onClick={this.onLogin} disabled={!this.state.username || !this.state.password}>Login</button>
                </div>
            </div>
        )
    }
}