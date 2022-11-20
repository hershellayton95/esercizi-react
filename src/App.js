import React from "react";
import { TodoList } from "./TodoList";

export class App extends React.Component {
    render() {

        return (
            <div>
                <TodoList render={(item, hadlerInput, hadlerAdd, resetList, lisItems) => {
                    return (
                        <div onKeyDown={event => {if(event.key === "Enter"){
                            hadlerAdd()
                        }}}>
                            <input type="text" name="item" value={item} onChange={hadlerInput} />
                            <button onClick={hadlerAdd}>Add</button>
                            <button onClick={resetList}>Reset</button>
                            <ul>{lisItems}</ul>
                        </div>
                    )
                }} />
            </div>
        )
    }
}