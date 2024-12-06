import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function About() {
  const {search, setSearch}= useSearchParams();
  const bleh = search.get('filter')=== 'active';
  return (
    <>
    <div>About</div>
    <button onClick={()=>setSearch({filter: 'active'})}>Active Users</button>
    <button onClick={()=> setSearch({})}>Reset Filter</button>    
    {bleh?(<h1>'Showing active users'</h1>): (<h1>'Showing all users'</h1>)}
    </>
    
  )
}