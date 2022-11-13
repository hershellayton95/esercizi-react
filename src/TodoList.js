import React from "react";

export class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            item: "",
            items: []
        }
    }

    hadlerInput = (event) => {
        const value = event.target.value;
        this.setState({
            item: value
        })
    }

    hadlerButton = () => {
        this.state.items.push(this.state.item);
        this.setState({
            item: ""
        })
    }

    resetList = () => {
        this.setState({
            item: "",
            items: []
        })
    }

    render() {

        const lisItems = this.state.items.map((elem, index) => <li key={elem + index}>{elem}</li>)
        return (
            <div>
                <input type="text" name="item" value={this.state.item} onChange={this.hadlerInput} />
                <button onClick={this.hadlerButton}>Add</button>
                <button onClick={this.resetList}>Reset</button>
                <ul>{lisItems}</ul>
            </div>
        )
    }
}