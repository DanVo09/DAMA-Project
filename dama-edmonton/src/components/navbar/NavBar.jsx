import React from 'react'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import {Link, useNavigate} from 'react-router-dom';

export default function Navbar() {
    
    const history = useNavigate();

    function logOut(){
        localStorage.clear();
        history.push('/register')
    }

    function toggleHamburger() {

        const menuToggle = document.querySelector('.nav-toggle');
        let menuOpen = false;
    
            document.querySelector('.navBar').classList.toggle('show-nav');
           
            menuToggle.classList.toggle('open');
    
            if(!menuOpen){
                menuOpen = true;
            } else {
                menuToggle.classList.remove('open');
                menuOpen = false;
            }
      }

    return (
        <>
           <header className='header-container'>
               <div className="header-wrapper">
                    <div className="nav-toggle" onClick={toggleHamburger}>
                            <div className="nav-btn"></div>
                    </div>
                    <div className="logo-container">
                        <Link to="/"><h1>DAMA</h1></Link>
                    </div>
                    <nav className="navBar">
                        <ul className="navMenu">
                            <li className="navLinks">
                                <Link className="navItem" to="/" onClick="window.location.reload();">Home</Link>
                            </li>
                            <li className="navLinks">
                                <Link className="navItem" to="/memberships" onClick="window.location.reload();">Memberships</Link>
                            </li>
                            <li className="navLinks">
                                <Link className="navItem" to="/courses" onClick="window.location.reload();">Courses</Link>
                            </li>
                            <li className="navLinks">
                                <Link className="navItem" to="/events" onClick="window.location.reload();">Events</Link>
                            </li>
                            <li className="navLinks">
                                <Link className="navItem" to="/newsletter" onClick="window.location.reload();">News</Link>
                            </li>
                            <li className="navLinks">
                                <Link className="navItem" to="/aboutus" onClick="window.location.reload();">About</Link>
                            </li>
                            <li className="navLinks">
                                <Link className="navItem" to="/contact" onClick="window.location.reload();">Contact</Link>
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
                                        <Link className="navItem" to="/register" onClick="window.location.reload();">Signup</Link>
                                    </li>
                                    <li className="navLinks">
                                        <Link className="navItem" to="/login" onClick="window.location.reload();">Login</Link>
                                    </li>
                                </>
                            }
                        </ul>
                    </nav>
                    <div className="cart-icon-container"> 
                            <ShoppingCartCheckoutIcon className="cart-icon"/>
                    </div>
                </div>
           </header>
        </>
    )
}