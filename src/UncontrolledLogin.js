import React from "react";

export class UncontrolledLogin extends React.Component {

    headlerSubmin = (event) => {
        event.preventDefault();

        const username = event.target.elements.username.value;
        const password = event.target.elements.password.value;
        const remember = event.target.elements.remember.checked;

        console.log({
            username,
            password,
            remember
        });
    }

    render() {
        return (
            <form onSubmit={this.headlerSubmin}>
                <input type="text" name="username" autoFocus/>
                <input type="password" name="password"/>
                <input type="checkbox" name="remember"/>
                <div>
                    <button type="submit">Login</button>
                    <button type="reset">Reset</button>
                </div>
            </form>
        )
    }
}