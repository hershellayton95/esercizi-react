import React from "react";
import { Sum } from "./Sum";


export class App extends React.Component {
    render() {

        return (
            <div>
                <Sum number={[0,1,2,3,4,5]} />
            </div>
        )
    }
}