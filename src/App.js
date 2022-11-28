import { Link, Route, Routes } from "react-router-dom";
import { Counter } from "./Counter";
import { ShowGithubUser } from "./ShowGithubUser";
import { Welcome } from "./Welcome";

export function App() {

    return (
        <div>
            <Routes>
                <Route path='/' element={<Welcome name="Filippo" />} />
                <Route path='/counter' element={<Counter />} />
                <Route path="users/:username" element={<ShowGithubUser />}/>
                <Route path="*" element={<div>Page not found. Error 404</div>}/>
            </Routes>
    
                <Link to="/">Home page</Link> | <Link to="/counter">Counter</Link> | <Link to="/users/hershellayton">hershellayton95 Github Info</Link>
        </div>
    )
}