import React from 'react'
import {Link,useSearchParams} from 'react-router-dom'

export default function Users() {
  const [search,setSearch]= useSearchParams();
  const showActiveUsers= search.get('filter')==='active';
  return (
    <>
    <div>List of users: </div>
    <Link to= '1'>User 1</Link>
    <Link to= '2'>User 2</Link>
    <Link to= '3'>User 3</Link>
    <button onClick={()=>setSearch({filter: 'active'})}>Active Users</button>
    <button onClick={()=>setSearch({})}>Reset Filter</button>
    {showActiveUsers ? (<h2>'Showing Active users'</h2>):(<h2>'Showing all users'</h2>)}
    </>
  )
}
