import { useEffect, useRef, useState } from "react";

export default function Ref(){
    let b= useRef();
    let y= 5;
    let [s1,sets1] =useState("");

    useEffect(()=>{
        b.current=20;
    },[])

    return(
        <>
            <div>
                <input type="text" onChange={((e)=>{
                    b.current++;
                    
                    sets1(e.target.value)
                })}>
                </input>
                <p>
                    B = {b.current};
                    y = {y};
                    s1 = {s1};
                </p>

            </div>
        </>
    )
}