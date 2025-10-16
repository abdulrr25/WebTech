import { useState, useEffect } from "react"; // Ensure useState is imported

export default function Counttable(){
    let [count, setCount] = useState(0); 

    
    useEffect(() => {
        console.log("In useeffect");
    }, []);

    function handler(){ 
        setCount(count + 1); 
    }
    function handler1(){ 
        setCount(count - 1); 
    }
    
    return(
        <>
        <table border={2}>
            <tr>
                <th>
                    Counter
                </th>
                
            </tr>
            <tr>
                <td> {count}</td>
                
            </tr>
            </table>
            
            <button onClick={handler}>Click to Increment</button>
            <button onClick={handler1}>Click to Decerement</button>
        </>
    )
}