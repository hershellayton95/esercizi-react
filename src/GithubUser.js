import { useEffect, useState } from "react";


export function GithubUser({ username }) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);

    async function fetchFunction(username) {
        setError(false);
        setData(null);
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            // const response = await fetch(`http://localhost:3004/${username}`);

            if (response.status !== 200) {
                throw new Error();
            }
            setData(await response.json());
        } catch (error) {
            setError(true);
        }

    }

    useEffect(() => {
        fetchFunction(username);
        return () => {
            setData(null)
        }
    }, [username])

    return (
        <div>
            {!error && !!data && <p>username:{data.login}</p>}
            {!error && !!data && <p>name: {data.name}</p>}
            {error && <p>Something has gon wrong</p>}
        </div>
    )
}