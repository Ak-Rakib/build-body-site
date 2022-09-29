import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRunning } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <FontAwesomeIcon style={{width:'50px'}} icon={faRunning}></FontAwesomeIcon>
            <h1 style={{color:'GrayText'}}>BUILD-BODY</h1>
        </div>
    );
};

export default Header;