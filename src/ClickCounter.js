import { useState } from "react";

const useCounter = (initialValue) => {
    const [counter, setCounter] = useState(0);
    const hadlerIncrement = () => setCounter(s => s + 1);
    const hadlerDecrement = () => setCounter(s => s - 1);
    const hadlerReset = () => setCounter(initialValue);

    return {counter, hadlerIncrement, hadlerDecrement, hadlerReset}
}

export const ClickCounter = ({initialValue = 0}) => {

    const{counter, hadlerIncrement, hadlerDecrement, hadlerReset} = useCounter(initialValue);

    return (
        <div>
            <p>Counter: {counter}</p>
            <button onClick={hadlerIncrement}>Increment</button>
            <button onClick={hadlerDecrement}>Decrement</button>
            <button onClick={hadlerReset}>Reset</button>
        </div>
    )

}