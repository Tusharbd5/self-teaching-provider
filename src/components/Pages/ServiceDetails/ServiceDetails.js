import { useParams } from 'react-router-dom';


const ServiceDetails = () => {
    const { serviceId, serviceName, des } = useParams();

    return (
        <div>
            <h1>Details About Service</h1>
            <div className='w-50 mx-auto shadow mt-5 p-4 rounded-5'>
                <p><small>Service id: {serviceId}</small></p>
                <h2 className='text-primary'>{serviceName}</h2>
                <p style={{ textAlign: "justify" }}>{des}</p>
            </div>
        </div>
    );
};

export default ServiceDetails;