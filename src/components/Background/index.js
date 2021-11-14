import React from 'react'
import './style.css'
import Logo from '../../assets/Logo.png';

const Background = () => {
    return (
        <>
            <div className="Navbar">
                <div className="NavContainer">
                    <img src={Logo} className="NavHeader" alt='Logo'/>
                </div>
            </div>   
        </>
    )
}

export default Background;
