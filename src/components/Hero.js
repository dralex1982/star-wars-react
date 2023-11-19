import React, {useContext} from 'react';
import {starWarsContext} from "../utils/starWarsContext";
import {friends} from "../utils/constants";

const Hero = () => {
    const {heroFromPath} = useContext(starWarsContext)

    return (
        <section className="float-start w-25 my-1 mx-3">
            <img src={friends[heroFromPath].img} className="w-100" alt={friends[heroFromPath].name}/>
        </section>
    );
};

export default Hero;