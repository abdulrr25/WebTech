export default function Calculator(props){

    let n1 = parseFloat(props.num1)
    let n2 = parseFloat(props.num2)
    let n3= parseFloat(props.op)
    let res =0 ;
    switch (n3) {
        case 1:
                res= n1+n2;
                break;
        case 2:
                res= n1-n2;
                break;
        case 3:
                res= n1*n2;
                break;
        case 4:
                res= n1/n2;
            break;
    
        default:
            break;
    }

    
    return(
    <>
        <h1>Calculator</h1>
        <p>Result is {res}</p>
        
    </>)
}