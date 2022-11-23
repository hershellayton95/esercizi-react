export function Sum(props){
    const sum = props.number.reduce((prev, next)=>prev + next,0);
    return (
        <h1>{sum}</h1>
    )
}