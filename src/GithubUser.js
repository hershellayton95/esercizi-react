
import useSWR from "swr";


const useGitHubUser = (username) => {
    

        const url = () => !!username && `https://api.github.com/users/${username}`;

        const fetcher = (...args) => fetch(...args).then(resp => {
            console.log("fetch avvenuto");
        return resp.json()
    });

        const { data, mutate } = useSWR(url, fetcher);


    return {data, mutate}
}

export function GithubUser({username}) {
    
    const {data, mutate} = useGitHubUser(username);

    return (
        <div>
            {data && <p>{data.login}</p>}
            {data && <p>{data.name}</p>}
            <button onClick={mutate}>Refetch</button>
        </div>
    )
}