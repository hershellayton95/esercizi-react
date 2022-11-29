import { Link, Route, Routes } from "react-router-dom";
import { Counter } from "./Counter";
import { GithubUserList } from "./GithubUserList";
import { ShowGithubUser } from "./ShowGithubUser";
import { Welcome } from "./Welcome";

export function App() {

    return (
        <div>
            <Routes>
                <Route path='/' element={<Welcome name="Filippo" />} />
                <Route path='counter' element={<Counter />} />
                <Route path="users" element={<GithubUserList />}>
                    <Route path=":username" element={<ShowGithubUser />}/>
                </Route>
                <Route path="*" element={<div>Page not found. Error 404</div>}/>
            </Routes>
    
                <Link to="/">Home page</Link> | <Link to="/counter">Counter</Link> | <Link to="/users">hershellayton95 Github Info</Link>
        </div>
    )
}