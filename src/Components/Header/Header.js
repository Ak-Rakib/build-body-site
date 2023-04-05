import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRunning } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header-container'>
            <div className='header-logo'>
                <FontAwesomeIcon style={{ width: '50px' }} icon={faRunning}></FontAwesomeIcon>
                <h2 style={{ color: 'GrayText' }}>BUILD-BODY</h2>
            </div>
            <div className='btn-ques-container'>
                <Link className='btn-ques' to="/question">Blog</Link>
            </div>
        </div>
    );
};

export default Header;