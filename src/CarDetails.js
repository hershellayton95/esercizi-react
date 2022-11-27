import { useEffect, useRef } from "react";

export function CarDetails({ initialData = { model: "Panda 4x4", year: 1994, color: "green" } }) {
    const _formRef = useRef();

    const resetFunction = () => {
        _formRef.current.reset()
    }

    useEffect(()=>{
        resetFunction();
    },[initialData])

    return (
        <form ref={_formRef}>
            <input type="text" name="model" defaultValue={initialData.model} />
            <input type="number" name="year" defaultValue={initialData.year} />
            <input type="text" name="color" defaultValue={initialData.color} />
        </form>
    );
}