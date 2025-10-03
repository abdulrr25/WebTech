import { useState } from "react"
import Counter1 from "./Counter1";
import Counter2 from "./Counter2";
import ErrorBoundry from "./ErrorBoundry";

export default function Counter(){
    const [cnt1,setcnt1]=useState(0);
    const increament1=()=>{
        setcnt1(cnt1+1);
    }
    const [cnt2,setcnt2]=useState(0);
    const increament2=()=>{
        setcnt2(cnt2+1);
    }
    return(
        <>
        <ErrorBoundry>

    <Counter1 value={cnt1} onClick={increament1}/>
    <Counter2 value={cnt2} onClick={increament2}/>
        </ErrorBoundry>
        </>
    )
}