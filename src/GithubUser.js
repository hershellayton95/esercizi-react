
import { useEffect, useState } from "react";


const useGitHubUser = (username) => {
    const[data, setData] = useState(null);

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

    return {data}
}

export function GithubUser({username}) {
    
    const {data} = useGitHubUser(username);

    return (
        <div>
            {data && <p>{data.login}</p>}
            {data && <p>{data.name}</p>}
        </div>
    )
}