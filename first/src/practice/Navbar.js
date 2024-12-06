import React from 'react'
import {NavLink} from 'react-router-dom';

export default function Navbar() {
  const navActive=({isActive})=>{
    return{
      textDecoration: isActive? 'none': 'underline',
      fontWeight: isActive? 'bold': 'normal',
    }
    
  }
  return (
    <nav>
       <li><NavLink to= '/' style={navActive}>Home</NavLink> </li> 
       <li> <NavLink to= '/about' style={navActive}>About</NavLink></li> 
       <li> <NavLink to= '/products' style={navActive}>Products</NavLink></li> 
       <li> <NavLink to= '/profile' style={navActive}>Profile</NavLink></li> 
    </nav>
  )
}
