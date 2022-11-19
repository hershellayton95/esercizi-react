import React from "react";
export class Welcome extends React.Component {

    render() {
        return (
            <div>
                <h1 className={this.props.class}>"Welcome, World!"</h1>
            </div>
        )
    }
}