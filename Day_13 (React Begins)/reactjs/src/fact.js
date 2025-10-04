export default function Fact(props){

    let fact = 1;
    let num = parseFloat(props.num)

    for(let i=num;i>=1;i--){
        fact=fact*i;
    }

    return(
    <>
        <h1>Factorial</h1>
        <p>Result is {fact}</p>
        
    </>)

}