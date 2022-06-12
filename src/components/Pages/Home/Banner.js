import React from 'react';
import banner from '../../../images/Banner/Banner.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div className='container d-flex align-items-center mt-4'>
                <div className='banner-title w-lg-50 text-lg-start'>
                    <h1><span style={{ color: "orange" }} className='fw-bold'>Self Teaching for</span> <br /> Personal Growth to <br />be More Positive</h1>
                    <p>Our goal is to set up your common environment for providing services. It will be the best professional workshop.</p>
                    <button className='btn btn-primary'>Get Started</button>
                </div>
                <div className='w-lg-50'>
                    <img className='img-fluid' src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;