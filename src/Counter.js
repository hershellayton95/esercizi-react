import { useEffect, useState } from "react"

export function Counter(){
    const [counter, setCounter] = useState(0);

    useEffect(()=>{
        const intervalCounter = setInterval(()=>setCounter(s=> s + 1),1000); 
        return ()=>{
            clearInterval(intervalCounter)
        }
    },[counter])

        return (
            <div>
                <h1>count: {counter}</h1>
            </div>
        )
}