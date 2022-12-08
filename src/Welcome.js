import React from "react";

export class Welcome extends React.Component {

    render() {
        return <p data-testid="welcome">"Welcome, {this.props.name}"</p>
    }
}