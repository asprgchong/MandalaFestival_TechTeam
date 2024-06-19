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

            <a href="https://makersfestival.mandalaarts.org/" className="about">About Us</a>
        </div>
    )
}

export default Navbar