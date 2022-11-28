import { useState } from "react";

export function Counter() {

    const [counter, setCounter] = useState(0);

    return (
        <div>
            <p>Counter: {counter}</p>
            <button onClick={() => setCounter(s => s + 1)}>Increment</button>
        </div>
    )

}