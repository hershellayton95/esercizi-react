import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {

    render() {
        return (
            <div>
                <p>Welcome, {this.props.name ?? "Dude"}</p>
                {this.props.age > 18 && <Age age={this.props.age}/>}
            </div>
        )
    }
}