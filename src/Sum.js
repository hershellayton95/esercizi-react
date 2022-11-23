export function Sum({numbers = [0]}){
    const sum = numbers.reduce((prev, next)=> prev + next,0);
    return (
        <h1>{sum}</h1>
    )
}