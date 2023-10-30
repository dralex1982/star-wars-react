import React from 'react';
import Hero from "./Hero";
import Friends from "./Friends";
import FarGalaxy from "./FarGalaxy";

const Home = () => {
    return (
        <div className="clearfix">
            <Hero/>
            <Friends/>
            <FarGalaxy/>
        </div>
    );
};

export default Home;