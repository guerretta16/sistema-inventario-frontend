import React from 'react';
import portLogo from '../../assets/img/open-box.png';
import './style.css';

const Header = () =>{
    return(
        <header className='header'>
            <img src={portLogo} className='header_logo'/>
        </header>
    )
}

export default Header;