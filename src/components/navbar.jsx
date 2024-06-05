import React from "react";
import companyLogo from '/src/assets/logo.png';
import '/src/css/navabar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div><img 
            src={companyLogo} 
            alt='Mandala Festival Logo' 
            className='logo'
            /></div>
            <div className="about">About Us</div>
        </div>
    )
}

export default Navbar