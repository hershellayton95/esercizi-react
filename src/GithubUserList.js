import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export function GithubUserList(){

    const [data, setData] = useState({item: "", items: []});
    const navigate = useNavigate();

    const hadlerInput = (event) => {
        const value = event.target.value;
        setData({
            ...data,
            item: value
        })
    }

    const hadlerButton = () => {
        const array = data.items.concat(data.item);
        setData({
            items: array,
            item: ""
        })
    }

    const resetList = () => {
        setData({
            item: "",
            items: []
        })
    }

    const removeItem = (event) => {

        //sfrutterò gli indici univoci
        const indexLi = event.target.attributes.indexli.value;
        const arrayTemp = [...data.items];
        arrayTemp.splice(indexLi,1);
        setData({
                items: arrayTemp
        })
        navigate("/users")
    }


        const lisItems = data.items.map((username, index) => <li key={username + index}>
            <Link to={`/users/${username}`}>{username}</Link>
            <button onClick={removeItem} indexli={index}>Remove</button></li>)
        return (
            <div>
                <input type="text" name="item" value={data.item} onChange={hadlerInput} />
                <button onClick={hadlerButton}>Add</button>
                <button onClick={resetList}>Reset</button>
                <ul>{lisItems}</ul>
                <hr/>
                <Outlet/>
            </div>
        )
}