import React from 'react';
import Footer from '../../Component/Footer/Footer';
import Header from '../../Component/Header/Header';
import Hero from '../../Component/Hero/Hero';
import Service from '../../Component/Service/Service';

const Home = () => {
    return (
        <div>
           <Header /> 
           <Hero />
           <Service />
           <Footer />
        </div>
    );
};

export default Home;