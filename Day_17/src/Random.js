
import { useState } from "react";

export default function Randm(){
    let [pass,setpass]=useState("")
    function generator(e){

        let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234679!@#$%&';
        let lengh = 8;
        let as =""
        for(let i=0;i<lengh;i++)
            {
                as+=(characters.charAt(Math.floor(Math.random()*characters.length)))
            }
            setpass(as);
        }

    return(
    <>
        <button onClick={generator}>Click to generate</button>
        <h1>Password is {pass}</h1>
    </>
    )
}