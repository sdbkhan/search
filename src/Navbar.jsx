import React from 'react'
import {NavLink} from "react-router-dom";

 const Navbar = () => {
    return (
    
        <div className="text-al">
        <NavLink exact activeClassName="" to ="/">Contact Us</NavLink> 
        <NavLink exact to ="/about"> About Us</NavLink>
        <NavLink exact to="/search">Search</NavLink>
        </div>
       
        
    )
}
export default Navbar;
