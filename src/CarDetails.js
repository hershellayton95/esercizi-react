import { useEffect, useRef } from "react";

export function CarDetails({initialData = { model: "Panda 4x4", year: 1994, color:"green"}}) {

    const _formRef = useRef();

    useEffect(()=>{
        _formRef.current.model.value = initialData.model;
        _formRef.current.year.value = initialData.year;
        _formRef.current.color.value = initialData.value;
    }, [initialData])

    const submitFormHandler = (event) => {
        event.preventDefault();
        console.log(_formRef.current.model.value);
        console.log(_formRef.current.year.value);
        console.log(_formRef.current.color.value);
    };

    return (
        <form ref={_formRef} onSubmit={submitFormHandler}>
            <div>
                <input type="text" name="model" defaultValue={initialData.model}/>
                <input type="number" name="year" defaultValue={initialData.year}/>
                <input type="text" name="color" defaultValue={initialData.color}/>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}