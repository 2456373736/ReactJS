import React from 'react';
import {useNavigate} from 'react-router-dom';


export default function Home() {
  const navigate= useNavigate();
  return (
    <>
    <div>Home</div>
    <button onClick={()=>{navigate('order-summary') }}>Confirm Order</button>
    </>
  )
}
