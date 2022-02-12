import React from 'react'
import {Link, useHistory} from 'react-router-dom';

export default function Navbar() {
    
    const history = useHistory();

    function logOut(){
        localStorage.clear();
        history.push('/register')
    }
    return (
        <>
           <nav className="navBar">
               <ul className="navMenu">
                   <li className="navLinks">
                       <Link className="navItem" to="/">Home</Link>
                   </li>
                   <li className="navLinks">
                       <Link className="navItem" to="/memberships">Memberships</Link>
                   </li>
                   <li className="navLinks">
                       <Link className="navItem" to="/courses">Courses</Link>
                   </li>
                   <li className="navLinks">
                       <Link className="navItem" to="/events">Events</Link>
                   </li>
                   <li className="navLinks">
                       <Link className="navItem" to="/newsletter">News</Link>
                   </li>
                   <li className="navLinks">
                       <Link className="navItem" to="/aboutus">About</Link>
                   </li>
                   <li className="navLinks">
                       <Link className="navItem" to="/contact">Contact</Link>
                   </li>
                   
                   
                   {
                       localStorage.getItem('user-info')?
                       <>
                       <li onClick={logOut} className="navLinks">
                       Logout
                        </li>
                       </>
                       :
                       <>
                        <li className="navLinks">
                            <Link className="navItem" to="/register">Signup</Link>
                        </li>
                        <li className="navLinks">
                            <Link className="navItem" to="/login">Login</Link>
                        </li>
                       </>
                   }
               </ul>
           </nav>
        </>
    )
}