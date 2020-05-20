import React, { useContext, useRef } from 'react'
import UserContext from '../../UserContext/UserContext';
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    const hamburgerMenu = useRef(null)
    const menu = useRef(null)
    const first = useRef(null)
    const second = useRef(null)
    const third = useRef(null)
    const loginBtn = useRef(null)

    const { userDet } = useContext(UserContext)
    const renderAuthBtn = () => {
        let { isLoggedIn } = userDet
        if (isLoggedIn) {
            return <NavLink to="/Logout" className="signUpBtn">Log out</NavLink>
        }
        else {
            return (
                <>
                    <NavLink to="/" className="loginBtn" ref={loginBtn}>Log in</NavLink>
                    <a className="signUpBtn">Sign up</a>
                </>
            )
        }
    }

    

    return (<>
        <nav>
            <div className="header">
                <div className="head">
                    <div className="logo">
                        <NavLink to="/"><img src="./images/logo_header.svg" alt="logo" /></NavLink>
                    </div>
                    <div className="menu" >
                        <NavLink to="/Main">Home</NavLink>
                        {/* <NavLink>Learn From Home</NavLink>
                    <NavLink>Pricing</NavLink>
                    <NavLink>For Bussiness</NavLink> */}
                    </div>
                </div>
                <div className="authBtn">
                    {renderAuthBtn()}
                    <div className="hamburgerMenu" >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </nav>
    </>
    )
}

export default Navbar;

