import React from "react"
import { NavLink } from "react-router-dom";

function NavBar() {
    return(
        <nav>
            <ul>
            <li><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to="/">login</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
            </ul>
         </nav>
    )
}
export default NavBar