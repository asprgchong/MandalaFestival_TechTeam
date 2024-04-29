import React, { useState } from "react";
import companyLogo from '/src/assets/logo.png';
import '/src/css/navabar.css'

const Navbar = () => {
    // Note, set-up variables outside of the returned JSX
    const burgerClass = 'burger-bar';

    // React hook used to determine when the burger is closed or opened
    // and the fuction that changes its state
    const [isOpen, setIsOpen] = useState(false);
    const menuClass = isOpen ? "menu" : "menu hide";


    return (
        
        <div className='navbar'>

            <img 
            src={companyLogo} 
            alt='Mandala Festival Logo' 
            className='logo'
            />

            <nav style={{width: '50px'}}>
                <div className='burger-menu' onClick={() => setIsOpen(!isOpen)}>
                    <div className={burgerClass}></div>
                    <div className={burgerClass}></div>
                    <div className={burgerClass}></div>
                </div>
            </nav>

            <div className={menuClass}>
                <a href="#">Artist 1</a>
                <a href="#">Artist 2</a>
                <a href="#">Artist 3</a>
            </div>
            
        </div>
    )
}

export default Navbar