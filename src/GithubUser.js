
import { useEffect, useState } from "react";


export function GithubUser({username}) {
    const[date, setData] = useState(null);

    async function fetchFunction(username){
        const response = await fetch(`https://api.github.com/users/${username}`);
        const result = await response.json();
        setData(result);
    }
    useEffect(()=> {
        fetchFunction(username)
        return ()=>{
            setData(null)
        }
    },[username])

    return (
        <div>
            {date && <p>{date.login}</p>}
            {date && <p>{date.name}</p>}
        </div>
    )
}