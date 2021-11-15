import {React, useState, useEffect} from "react";
import './Header.css';
import viajes from "../Assets/logo/logo_01.svg"


function Header(){

    const [menu, SetMenu] = useState(false);
    const [icon, SetIcon] = useState(true)

    const handleClick = () => {
        SetMenu(!menu)
        
    };

    const menuMobileActive = () =>{

        SetMenu(false);
    }

    const resizeMobile = () =>{

        if(window.innerWidth <= 960 ){
            SetIcon(false)
        } else {
            SetIcon(true)
        }
    };
    useEffect(() => {
        resizeMobile();
      }, []);

    window.addEventListener('resize', resizeMobile);

    return(
        <>
            
            <nav className='navbar'>
                <div className='navbar-container'>
                    <a href="*" className='logo-header' onClick={menuMobileActive}>
                        <img src={viajes} alt="logoviajes" /> 
                    </a>
                    <div className='menu-mobile-icon' onClick={handleClick}>
                        <i className={menu ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={menu ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <a href="*" className='ref1' onClick={menuMobileActive}>
                                 HOME
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href="#tendencias" className='ref2' onClick={menuMobileActive}>
                                TENDENCIAS
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href="*" className='ref3' onClick={menuMobileActive}>
                                BLOG
                            </a>
                        </li>
                    </ul>
                        {icon}
                </div>
            </nav>
        </>
    )
}

export default Header