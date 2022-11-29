
import useSWR from "swr";


const useGitHubUser = (username) => {
    
        const url = `https://api.github.com/users/${username}`;
        const fetcher = (...args) => fetch(...args).then(resp => resp.json());

        const { data } = useSWR(url, fetcher);


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