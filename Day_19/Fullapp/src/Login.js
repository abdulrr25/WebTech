import {useState} from "react";

export default function Login(){


    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    return(
        <>
            <div>
        <h1>

        Proceed With Your Login Detail
        </h1>
        <form>

        <p>

                Enter Your User Name
        </p>
            <input type="Text" placeholder="UserName" value={username} onChange={(e) => setUsername(e.target.value)}></input>
            <p>

                Enter Your Password
            </p>

            <input type="password" placeholder="Enter Your Password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
        
        </form>
        <button type="submit">Login </button>
            </div>
        </>
    )
}