export function Sum({number}){
    const sum = number.reduce((prev, next)=>prev + next,0);
    return (
        <h1>{sum}</h1>
    )
}