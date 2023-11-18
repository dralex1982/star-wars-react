import React, {useContext, useEffect} from 'react';
import Hero from "./Hero";
import Friends from "./Friends";
import FarGalaxy from "./FarGalaxy";
import {characters, defaultHero, navItems} from "../utils/constants";
import {withHeroId} from "../HOC/withHeroId";

const Home = (props) => {

    return (
        <div className="clearfix">
            <Hero/>
            <Friends/>
            <FarGalaxy/>
        </div>
    );
};

// export default withHeroId(Home, navItems[0].route);
export default withHeroId(navItems[0].route)(Home);