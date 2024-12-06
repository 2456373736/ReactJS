import React from 'react';
import {Link,Outlet} from 'react-router-dom'
export default function Products()
{
  return (
    <>
    <div>List of products</div>
    <input type='search' placeholder='Search here'></input>
    <Link to = 'featured'>Featured</Link>
    <Link to = 'new'>New</Link>
    <Outlet/>
    </>
  );

};