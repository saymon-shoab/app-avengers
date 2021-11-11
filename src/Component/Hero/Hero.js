import React from 'react';
import {LazyLoadImage } from 'react-lazy-load-image-component';
import hero from './../../img/avenger.jpg'
import 'react-lazy-load-image-component/src/effects/blur.css';
import Typical from 'react-typical'

const Hero = () => {
    return (
        <>
            
            <div className=" min-h-screen flex items-center justify-center bg-white"
        style={{
            // background: '#091c29',
          }}
        >
            <div className="w-11/12 mx-auto flex flex-col md:flex-row-reverse items-center justify-between">
            <div className="w-full w-3/3">
            <LazyLoadImage src={hero} delayTime="5000"  placeholderSrc=""/>
            </div>

            <div className="md:text-left w-3/5">
               <h2 className="text-6xl font-bold text-gray-800"> Turn your ideas into a </h2>
               <Typical
                steps={['STARTUP. ',
                2000,
                'Future.',
                2000,
                'SUCCESS.'
            ]}
                loop={Infinity}
                wrapper="p"
                className="inline-block text-6xl text-green-600 font-bold "
                style={{color:"#red",}}
                /> 
                <br/>
               <p className="text-gray-800 text-1xl w-2/3" >Webbee will make your product look modern and professional while saving you precious time.</p> <br/>
               <button className=" text-blue-50 menu-list-item px-3 py-3 flex font-semibold hover:bg-green-500 bg-green-700 rounded-md" type="">
                <a href="" target="" alt="/">  Purcheas Now</a>
                </button>
            </div>
            </div>
        </div>  

        </>
    );
};

export default Hero;