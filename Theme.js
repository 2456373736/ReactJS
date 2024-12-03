import React,{useState,useEffect} from 'react';

export default function Theme() {
    const [mode,setMode]= useState('Light');
    const [theme,setTheme]= useState('white');
    const [count,setCount]= useState(0);
 
    const modeSetter= ()=>{
        if(mode==='Light')
        {
            setMode('Dark');
           setTheme('white');
        }
        else
        {
        setMode('Light');
        setTheme('black');
        }
    }
    const increment= ()=> setCount(count+1);
    const decrement= ()=> setCount(count-1);
  return (
    <>
    <div style={{backgroundColor: `${theme}`}}>
    <div>{count}</div>
    <div style={{textAlign: "center", marginTop: "50px"}}>
    <button onClick={modeSetter} style= {{marginRight: "10px"}}>{` ${mode} mode`}</button>
    <button onClick={increment} style={{marginRight: "10px"}}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    </div>
    </div>
    </>
  )
};
