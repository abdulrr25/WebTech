import { useState, useEffect } from "react"; // Ensure useState is imported

export default function Counttable(){
    // 1 & 2. CORRECTED: Use useState Hook to declare state, initialized to 0.
    let [count, setCount] = useState(0); 
    
    // The useEffect hook is fine for its purpose (logging on mount), but the setter should be 'setCount' for consistency.
    useEffect(() => {
        console.log("In useeffect");
    }, []);

    function handler(){
        
        setCount(count + 1); 
        console.log("count", count + 1); 
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