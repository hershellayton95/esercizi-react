import React from "react";
import { Counter } from "./Counter";

export class CounterDisplay extends React.Component {
    render() {

        return (
            <div>
                <Counter initialValue={0} incrementInterval={1} incrementAmount={1000}/>
            </div>
        )
    }
}