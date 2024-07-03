import React from "react";
import {
    Link
} from "react-router-dom";
import companyLogo from '/src/assets/logo.png';
import '/src/css/navabar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to="/"><img 
            src={companyLogo} 
            alt='Mandala Festival Logo' 
            className='logo'
            /></Link>

            <a href="https://www.mandalaarts.org/about/" className="about">ABOUT US</a>
        </div>
    )
}

export default Navbar