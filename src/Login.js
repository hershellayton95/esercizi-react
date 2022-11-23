import { useState } from "react"

export function Login() {
    const [data, setData] = useState({
        username: "",
        password: "",
        remember: false
    })

    const handlerInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const type = event.target.type;
        const checked = event.target.checked;

        setData({
            ...data,
            [name]: type === "checkbox" ? checked : value
        })
    }

    function onLogin() {
        setData({
                username: data.username,
                password: data.password,
                remember: data.remember
            });
    }

    return (
        <div>
            <input type="text" name="username" value={data.username} onChange={handlerInput} />
            <input type="password" name="password" value={data.password} onChange={handlerInput} />
            <input type="checkbox" name="remember" checked={data.remember} onChange={handlerInput} />
            <div>
                <button type="button" onClick={onLogin} disabled={!data.username || !data.password}>Login</button>
            </div>
        </div>
    )
}