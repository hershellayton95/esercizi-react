export function Sum({numbers}){
    const sum = numbers.reduce((prev, next)=> prev + next,0);
    return (
        <h1>{sum}</h1>
    )
}