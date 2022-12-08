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
        const array = this.state.items.concat(this.state.item);
        this.setState({
            items: array,
            item: ""
        })
    }

    resetList = () => {
        this.setState({
            item: "",
            items: []
        })
    }

    removeItem = (event) => {
        //non mi piace sta soluzione, se due elementi sono uguali li elimino entrambi
        // const parentText = event.target.parentNode.innerText;
        // const firstElement = parentText.split(" ")[0];
        // this.setState({
        //     items: this.state.items.filter(items => items !== firstElement)
        // })

        //sfrutterò gli indici univoci
        const indexLi = event.target.attributes.indexli.value;
        const arrayTemp = [...this.state.items];
        arrayTemp.splice(indexLi,1);
        this.setState({
                items: arrayTemp
        })
    }

    render() {

        const lisItems = this.state.items.map((elem, index) => <li data-testid="list-item" key={elem + index}>{elem} <button onClick={this.removeItem} indexli={index}>Remove</button></li>)
        return (
            <div>
                <input data-testid="todo-input" type="text" name="item" value={this.state.item} onChange={this.hadlerInput} />
                <button onClick={this.hadlerButton}>Add</button>
                <button onClick={this.resetList}>Reset</button>
                <ul data-testid="list-todo">{lisItems}</ul>
            </div>
        )
    }
}