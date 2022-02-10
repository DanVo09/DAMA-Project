import React from 'react'
import {Link} from 'react-router-dom';

export default function Navbar() {
    

    return (
        <>
           <nav className="navBar">
               <ul className="navMenu">
                   <li className="navLinks">
                       <Link className="navItem" to="/">home</Link>
                   </li>
                   <li className="navLinks">
                       <Link className="navItem" to="/memberships">memberships</Link>
                   </li>
                   <li className="navLinks">
                       <Link className="navItem" to="/courses">courses</Link>
                   </li>
                   <li className="navLinks">
                       <Link className="navItem" to="/events">events</Link>
                   </li>
                   <li className="navLinks">
                       <Link className="navItem" to="/newsletter">news</Link>
                   </li>
                   <li className="navLinks">
                       <Link className="navItem" to="/about">about</Link>
                   </li>
                   <li className="navLinks">
                       <Link className="navItem" to="/contact">contact</Link>
                   </li>
                   <li className="navLinks">
                       <Link className="navItem" to="/login">login</Link>
                   </li>
               </ul>
           </nav>
        </>
    )
}
