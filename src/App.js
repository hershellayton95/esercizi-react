import { Route, Routes } from "react-router-dom";
import { Counter } from "./Counter";
import { ShowGithubUser } from "./ShowGithubUser";
import { Welcome } from "./Welcome";

export function App() {

    return (
        <Routes>
            <Route path='/' element={<Welcome name="Filippo" />} />
            <Route path='/counter' element={<Counter />} />
            <Route path="users/:username" element={<ShowGithubUser />}/>
        </Routes>
    )
}