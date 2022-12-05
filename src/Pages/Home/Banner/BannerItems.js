import React from 'react';
import './BannerItems.css'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const BannerItems = ({ slide }) => {

  const { image, id, prev, next } = slide;

  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className='carousel-img'>
        <img src={image} alt='' className="w-full rounded-xl" />
      </div>
      <div className="absolute text-7xl font-bold text-white flex justify-end transform -translate-y-1/2 left-24 top-1/4">
        <h1>
          Affordable <br />
          Price For Car <br />
          Servicing
        </h1>
      </div>
      <div className="absolute  text-white text-xl w-2/5 flex justify-end transform -translate-y-1/2 left-24 top-2/4 mb-5">
        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
      </div>
      <div className="absolute w-2/5 flex justify-start transform -translate-y-1/2 left-24 top-3/4 mb-5">
        <button className="btn btn-success mr-5">Success</button>
        <button className="btn btn-outline btn-success">Button</button>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 right-5 bottom-0 mr-10 mb-10">
        <a href={`#slide${prev}`} className="text-5xl text-success mr-5"><FaChevronLeft></FaChevronLeft></a>
        <a href={`#slide${next}`} className="text-5xl text-success"><FaChevronRight></FaChevronRight></a>
      </div>
    </div>
  );
};

export default BannerItems;