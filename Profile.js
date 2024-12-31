import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
 const navigate= useNavigate();
  return (
    <>
    <div>Profile Page</div>
    <button onClick={()=>{navigate('/users')}}>Show Users</button>
    </>
  )
}
