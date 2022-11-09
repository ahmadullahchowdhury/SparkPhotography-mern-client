import React from 'react';
import useTitle from '../Hooks/hooks';
import { useLoaderData , Link } from "react-router-dom";

const Services = () => {
    const services = useLoaderData()
    useTitle('Services')
    return (
        <div className='w-3/4 mx-auto'>
            <h1 className='m-3 p-3 text-center font-bolder text-4xl'>List of All Services</h1>
                        {
                services.map(service =>  <div key={service._id} className="card card-side m-3 bg-base-100 shadow-xl">
                <figure><img className='h-full' src={service.img} alt="img"/></figure>
                <div className="card-body">
                  <h2 className="card-title">{service.title}</h2>
                  <h2 className="card-title"> Price: {service.price}</h2>
                  <p>{service.description.slice(0,100)}</p>
                  <div className="card-actions justify-end">
                  <Link  className='btn btn-primary' to={`/services/${service._id}`}>See More </Link>
                  </div>
                </div>
              </div>
                    
                )
            }

        </div>
    );
};

export default Services;