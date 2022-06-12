import CustomLink from '../CustomLink/CustomLink';
import './Header.css';
import xicon from '../../images/Icon/cross-icon.png';
import oicon from '../../images/Icon/menu-icon.png'
import { useState } from 'react';

const Header = () => {
    const handleToggle = () => {
        const items = document.querySelector('.nav-items');
        items.classList.toggle('open');

    }

    return (
        <nav className='header'>
            <div className='logo'>
                <h3 className='text-white m-0 fw-light fs-4'>Self Teaching</h3>
                <h1 style={{ color: "orange", fontSize: "25px", margin: "0" }}>Provider</h1>
            </div>
            <button onClick={handleToggle} className='nav-toggle'>
                <span></span>
            </button>
            <div className='nav-items'>
                <CustomLink to="/home">Home</CustomLink>
                <CustomLink to="/services">Services</CustomLink>
                <CustomLink to="/blogs">Blogs</CustomLink>
                <CustomLink to="/about">About Us</CustomLink>
                <CustomLink to="/login">Login</CustomLink>
            </div>
        </nav>
    );
};

export default Header;