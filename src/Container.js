import React from "react";
import "./style.css"

export class Container extends React.Component {

    render() {
        return (
            <div className={"container"}>
                <h1>{this.props.title}</h1>
                {this.props.children}
            </div>
        )
    }
}