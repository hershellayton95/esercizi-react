import { useState } from "react";

const useForm = () => {
    const [data, setData] = useState({
        username: "",
        password: ""
    });

    const onForm = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData({
            ...data,
            [name]: value
        })
    }

    return { data, onForm }
}

export const ControlledForm = () => {

    const { data, onForm } = useForm();
    
    return (
        <form>
            <input onChange={onForm} value={data.username} name="username" />
            <input onChange={onForm} value={data.password} name="password" />
        </form>
    )
}