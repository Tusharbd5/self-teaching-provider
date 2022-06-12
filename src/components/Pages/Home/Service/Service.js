import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const navigate = useNavigate();
    const { id, name, description, img } = service;
    const navigateServiceDetails = (id) => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            <img src={img} alt="" />
            <div className='details'>
                <h1>{name}</h1>
                <p>{description}</p>
                <button onClick={() => { navigateServiceDetails(id) }} className='btn btn-info'>Add Service</button>
            </div>
        </div>
    );
};

export default Service;