
import { useEffect, useState } from "react";


const useGitHubUser = (username) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(false)

    async function fetchFunction(username){
        setData(null);
        setError(false);

        const response = await fetch(`https://api.github.com/users/${username}`);
        const result = await response.json();
        if(response.status !== 200) return setError(true)
        setData(result);
    }
    
    useEffect(()=> {
        fetchFunction(username)
        return ()=>{
            setData(null)
        }
    },[username])

    return {data, error}
}

export function GithubUser({username}) {
    
    const {data, error} = useGitHubUser(username);

    return (
        <div>
            {error && <p>An error has occured</p>}
            {!error && data && <p>{data.login}</p>}
            {!error && data && <p>{data.name}</p>}
        </div>
    )
}