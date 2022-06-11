import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <div className='logo'>
                <h1 style={{ fontSize: "25px", margin: "0" }}>Self Teaching</h1>
                <h1 style={{ color: "orange", fontSize: "30px", margin: "0" }}>Provider</h1>
            </div>
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