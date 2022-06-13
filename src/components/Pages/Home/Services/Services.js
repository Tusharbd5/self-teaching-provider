import useService from '../../../../hooks/useService';
import Service from '../Service/Service';
import './Services.css';


const Services = () => {
    const [services, setServices] = useService();

    return (
        <div id='services'>
            <h1>Services</h1>
            <div className='services'>
                {
                    services.map(service => <Service key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;