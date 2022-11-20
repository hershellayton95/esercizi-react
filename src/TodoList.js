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
        const indexLi = event.target.attributes.indexli.value;
        const arrayTemp = [...this.state.items];
        arrayTemp.splice(indexLi,1);
        this.setState({
                items: arrayTemp
        })
    }

    render() {
        const lisItems = this.state.items.map((elem, index) => <li key={elem + index}>{elem} <button onClick={this.removeItem} indexli={index}>Remove</button></li>)
        return (
            <div>
                {this.props.render(this.state.item, this.hadlerInput, this.hadlerButton,this.resetList, lisItems)}
            </div>
        )
    }
}