import React from 'react';
import ServiceCard from './ServiceCard';
import serviceData from './ServiceData'
const Service = () => {
    return (
        <>
           <div className="min-h-screen borderBottom">
               <h1 className="text-center text-green-500 font-bold text-6xl">Service We Provide</h1>
               <p className="text-center text-gray-400 font-semibold text-2xl">The powerful and flexible theme for all kinds of businesses</p>
               <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-between">
                   {
                     serviceData.map((sd)=> <ServiceCard key={sd.id} sd={sd} />)
                   }
               </div>
           </div> 
        </>
    );
};

export default Service;