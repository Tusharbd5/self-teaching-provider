import React from 'react';
import './Service.css';

const Service = ({ service }) => {

    const { name, description, img } = service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <div className='details'>
                <h1>{name}</h1>
                <p>{description}</p>
                <button className='btn btn-info'>Add Service</button>
            </div>
        </div>
    );
};

export default Service;