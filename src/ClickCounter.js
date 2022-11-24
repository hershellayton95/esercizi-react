import { useEffect, useState } from "react";

export function ClickCounter() {

    const [counter, setCounter] = useState(0);

    function onCounterChange(counter) {
        console.log(counter);
    }

    useEffect(()=>onCounterChange(counter), [counter])

    return (
        <div>
            <p>Counter: {counter}</p>
            <button onClick={() => setCounter(s => s + 1)}>Increment</button>
        </div>
    )

}