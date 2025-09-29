import { useState } from "react"

export default function Stringli(){
    let[n1 ,setn1]=useState("")
    
    return(
        <>
        n1=<input type="text" onblur={(e)=>{
            setn1(e.target.value)
           
        }
        
    }/>
    <button onclick="Submit()"></button>
    <h1> Name {n1}</h1>
    </>


    )
}