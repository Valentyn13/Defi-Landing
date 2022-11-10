import { useState } from "react";
import "./Navbar.css";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import { Link } from "react-router-dom";
const Navbar = () => {
const [hamburgerActive,setHamburgerActive] = useState(false);

const handleHamburger = () => {
 setHamburgerActive(!hamburgerActive)
}
 const goToLink = (e) => {
    console.log(e.target.id)
    if(e.target.id === 'home') {
    setHamburgerActive(false)
    return
    }
    setHamburgerActive(!hamburgerActive)
 }

    return (
    <>
        <div className="navbar">
            <div className="container">
                <h1 >
                    <Link id="home" onClick={goToLink} to='/'>Defi</Link>
                </h1>
                <ul className={hamburgerActive? 'nav active' : 'nav'}>
                    <li className="nav-item">
                        <Link onClick={goToLink} to="platform">Platform</Link>
                    </li>
                    <li className="nav-item">
                        <Link onClick={goToLink} to="dev">Developers</Link>
                    </li>
                    <li className="nav-item">
                        <Link onClick={goToLink} to="comm">Community</Link>
                    </li>
                    <li className="nav-item">
                        <Link onClick={goToLink} to="about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link onClick={goToLink} className="btn" to="use">Use Defi</Link>
                    </li>
                </ul>
                <div onClick={handleHamburger} className="hamburger">
                    {hamburgerActive ? (<AiOutlineClose className="icon" />) : (<AiOutlineMenu className="icon" />)}
                </div>

            </div>
        </div>

    </>

    )
}

export default Navbar;