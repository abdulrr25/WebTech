import { useState, useEffect } from "react"; // Ensure useState is imported

export default function Counttable(){
    let [count, setCount] = useState(0); 

    
    useEffect(() => {
        console.log("In useeffect");
    }, [count]);

    function handler(){ 
        setCount(count + 1); 
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
        </>
    )
}