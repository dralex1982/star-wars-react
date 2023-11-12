import React, {useContext} from 'react';
import {navItems} from "../utils/constants";
import AboutMe from "./AboutMe";
import StarWars from "./StarWars";
import Contact from "./contact/Contact";
import Home from "./Home";
import {starWarsContext} from "../utils/starWarsContext";

const Main = () => {
const {page} = useContext(starWarsContext)
    switch (page){
        case navItems[1]: return <AboutMe/>
        case navItems[2]: return <StarWars/>
        case navItems[3]: return <Contact/>
        default: return <Home/>
    }
};

export default Main;