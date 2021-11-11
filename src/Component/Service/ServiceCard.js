import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ServiceCard = ({sd}) => {
    console.log(sd)
    const {id, logo, title , description} = sd;
    return (
        <div className=" p-2  m-9 items-center justify-items-center shadow-2xl">
            <LazyLoadImage src={logo} width="150px" className="mx-auto" alt="" />
            <h1 className="text-green-500 mx-auto font-bold text-2xl">{title}</h1>
            <p className="font-sans mx-auto text-gray-700 justify-items-center ">{description}</p>
        </div>
    );
};

export default ServiceCard;