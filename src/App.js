import { FilteredList } from "./FilteredList";

export function App() {
    const list = [
        {
            "id": 0,
            "name": "Annette Hansen",
            "age": 38
        },
        {
            "id": 1,
            "name": "Anna Jarvis",
            "age": 21
        },
        {
            "id": 2,
            "name": "Simone Strong",
            "age": 18
        },
        {
            "id": 3,
            "name": "Corine Whitaker",
            "age": 20
        }
    ];

    return (
        <div>
            <FilteredList list={list} />
        </div>
    )
}