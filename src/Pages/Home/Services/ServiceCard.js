import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {

  const { _id, img, title, price } = service;

  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <figure><img src={img} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title font-bold text-3xl">{title}</h2>
        <p className='text-2xl font-semibold text-success'>Price: ${price}</p>
        <div className="card-actions justify-end">
          <Link to={`/checkout/${_id}`} className='text-success text-2xl font-bold' >
            <FaArrowRight></FaArrowRight>
            {/* <button className="btn btn-success"></button> */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;