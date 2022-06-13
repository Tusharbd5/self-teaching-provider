import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const navigate = useNavigate();
    const { id, name, description, img } = service;
    const navigateServiceDetails = (id) => {
        navigate(`/service/${id}/${name}/${description}`);
    }
    return (
        <div className='service'>
            <img src={img} alt="" />
            <div className='details'>
                <h1>{name}</h1>
                <p>{description.length < 90 ? description : description.slice(0, 90)} <span title={description} className='text-primary' style={{ cursor: "pointer" }}>...read more</span></p>
                <button onClick={() => { navigateServiceDetails(id) }} className='btn btn-info'>Details</button>
            </div>
        </div>
    );
};

export default Service;