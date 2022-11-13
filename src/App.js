import React from "react";
import { ClickTracker } from "./ClickCounter";
export class App extends React.Component {
    render() {

        return (
            <div>
                <ClickTracker />
            </div>
        )
    }
}