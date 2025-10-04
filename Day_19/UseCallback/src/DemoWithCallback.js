import React, { useState, useCallback } from "react";
const funcSet = new Set();
const DemoWithCallBack = () => {
    const [cnt, setCnt] = useState(0);
    const [num, setNum] = useState(0);
    const incCnt = useCallback(() => setCnt((prevcnt) => prevcnt + 1), [cnt]);
    const decCnt = useCallback(() => setCnt((prevcnt) => prevcnt - 1), [cnt]);
    const incNum = useCallback(() => setNum((prevnum) => prevnum + 1), [num]);

    // console.log(incCnt);
    // console.log(decCnt);
    // console.log(incNum);
    funcSet.add(incCnt);
    funcSet.add(decCnt);
    funcSet.add(incNum);
    return (
        <>

            <div>
                <h2>With useCallback Hook</h2>
                <button onClick={incCnt}>Increase Counter</button>
                <button onClick={decCnt}>Decrease Counter</button>
                <button onClick={incNum}>Increase Number</button>

            </div>
            <div>
                <h1>
                    Count {cnt};
                    <br />
                    Number: {num};
                    <br />
                    Size : {funcSet.size}
                </h1>
            </div>
        </>
    );
};

export default DemoWithCallBack;