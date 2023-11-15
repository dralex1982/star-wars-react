import React, {useContext, useEffect} from 'react';
import Hero from "./Hero";
import Friends from "./Friends";
import FarGalaxy from "./FarGalaxy";
import {starWarsContext} from "../utils/starWarsContext";
import {characters, defaultHero} from "../utils/constants";

const Home = (props) => {
    const {setHeroFromPath} = useContext(starWarsContext);

    useEffect(() => {
        let key = props.match.params.heroId;
        if (!characters.includes(key))
            key = defaultHero;
        setHeroFromPath(key);
    }, []);
    return (
        <div className="clearfix">
            <Hero/>
            <Friends/>
            <FarGalaxy/>
        </div>
    );
};

export default Home;