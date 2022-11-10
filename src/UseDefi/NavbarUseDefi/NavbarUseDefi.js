import React from 'react';
import "./NavbarUseDefi.css";
import { Link } from 'react-router-dom';
const NavbarUseDefi = ()=> {

    return(
        <div className='nav-use-defi'>
            <div className='container'>
                <div className='use-link-controll'>
                    <div className='use-link-wraper'>
                        <Link className='use-nav-link' to="coins">Coins</Link>
                    </div>
                    <div className='use-link-wraper'>
                        <Link className='use-nav-link'  to="swap">Swap</Link>
                    </div>
                    <div className='use-link-wraper'>
                        <Link className='use-nav-link' to="transactions">Transactions</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NavbarUseDefi;