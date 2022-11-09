import React from "react";

export class Welcome extends React.Component {

    render() {
        return (
            <div>
                {/* <p>"Welcome, {this.props.name ?? "Dude"}"</p> */}

                {/* {!!this.props.name && <p>Welcome, {this.props.name}</p>}
                {!this.props.name && <p>Welcome, Dude</p>} */}

                {!!this.props.name
                ? <p>"Welcome, {this.props.name}"</p>
                :<p>"Welcome, Dude"</p>}
            </div>
        )
    }
}