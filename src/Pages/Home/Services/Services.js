import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('https://masterpiece-server.vercel.app/services')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])

  return (
    <div>
      <div className='text-center mt-28 mb-12'>
        <p className='text-2xl font-bold text-success'>Service</p>
        <h2 className='my-5 text-5xl font-semibold'>Our Service Area</h2>
        <p>the majority have suffered alteration in some form, by injected humour, or randomised <br />
          words which don't look even slightly believable. </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
          services.map(service => <ServiceCard
            key={service._id}
            service={service}
          ></ServiceCard>)
        }
      </div>
    </div>
  );
};

export default Services;