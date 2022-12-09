import { useState } from "react";
import "./Navbar.css";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {setHamburgerActive} from "../../redux/reduxSlices/navbarSlice/navbarSlice";
import { closeHamburgerActive } from "../../redux/reduxSlices/navbarSlice/navbarSlice";
const Navbar = () => {


const dispatch = useDispatch()
const hamburgerState = useSelector((state) => state.navbar.hamburgerActive)   

// const [hamburgerActive,setHamburgerActive] = useState(false);

// const handleHamburger = () => {
//     dispatch(setHamburgerActive())
// //  setHamburgerActive(!hamburgerActive)
// }

 const goToLink = (e) => {
    console.log(e.target.id)
    if(e.target.id === 'home') {
    dispatch (closeHamburgerActive(false))
    return
    }
    dispatch(setHamburgerActive(!hamburgerState))
 }

    return (
    <>
        <div className="navbar">
            <div className="container">
                <h1 >
                    <Link id="home" onClick={goToLink} to='/'>Defi</Link>
                </h1>
                <ul className={hamburgerState? 'nav active' : 'nav'}>
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
                <div onClick={()=>dispatch(setHamburgerActive(!hamburgerState))} className="hamburger">
                    {hamburgerState ? (<AiOutlineClose className="icon" />) : (<AiOutlineMenu className="icon" />)}
                </div>

            </div>
        </div>

    </>

    )
}

export default Navbar;