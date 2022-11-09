import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {

    render() {
        return (
            <div>
                <p>Welcome, {this.props.name ?? "Dude"}</p>
                <Age age={this.props.age}/>
            </div>
        )
    }
}