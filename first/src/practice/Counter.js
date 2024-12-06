import React, {useEffect,useState} from 'react';
function Counter() {
    const [count,setCount]=useState(0);
    useEffect(()=>{
        console.log(`Count updated! ${count}`);
    },[count]);
    const increment=()=> setCount(count+1);
    const decrement=()=> setCount(count-1);
    return(
        <>
        <div>{count}</div>
        <div style={{ textAlign: "center", marginTop: "50px" }}>
        <button onClick={increment} style={{ marginRight: "10px" }}>increment</button>
        <button onClick={decrement}>decrement</button>
        </div>
        
        </>
    )
};
export default Counter;
