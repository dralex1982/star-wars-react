import React, {useContext, useEffect} from 'react';
import Hero from "./Hero";
import Friends from "./Friends";
import FarGalaxy from "./FarGalaxy";
import {starWarsContext} from "../utils/starWarsContext";
import {characters, defaultHero, navItems} from "../utils/constants";
import {useNavigate, useParams} from "react-router-dom";

const Home = (props) => {
    const {setHeroFromPath} = useContext(starWarsContext);
    let {heroId} = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        if (!characters.includes(heroId)) {
            navigate(`/${navItems[0].route}/${defaultHero}`);
            return;
        } else
            setHeroFromPath(heroId);
    }, [heroId]);
    return (
        <div className="clearfix">
            <Hero/>
            <Friends/>
            <FarGalaxy/>
        </div>
    );
};

export default Home;