import { useState } from "react";
export default function Counter(){
    // let data='';
    let [count, setcount]=useState(0);

    function handler(){
    setcount(count + 1); 
    console.log("count", +count); 
}
    return(
        <>
        Counter={count}
        <button onClick={handler}>Click me</button>
        </>
    )
}