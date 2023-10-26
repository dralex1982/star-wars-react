import React from 'react';
import main from '../styles/images/main.jpg'

const Hero = () => {
    return (
        <section className="float-start w-25 my-1 mx-3">
            <img src={main} className="w-100"/>
        </section>
    );
};

export default Hero;