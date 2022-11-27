import { useEffect, useMemo, useState } from "react";

export function FilteredList({list}) {
    
    const [users, setUsers] = useState();
    
    const filteredData = useMemo(()=>{
        if(list){
            const filter = list.filter(item => item.age > 18);
            return filter
        }
    },[list])


    useEffect(()=>{
        if(filteredData) setUsers(filteredData.map(item => <li key={item.id}><ul><li>id: {item.id}</li><li>name: {item.name}</li><li>age: {item.age}</li></ul></li>))
    },[filteredData])

    return (
        <div>
        {!list && <p>Loadin...</p>}
        {!!list && <ul>{users}</ul>}
        </div>
    );
}