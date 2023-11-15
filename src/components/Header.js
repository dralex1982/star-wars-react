import React, {useContext} from 'react';
import Navigation from "./Navigation";
import {starWarsContext} from "../utils/starWarsContext";
import {friends} from "../utils/constants";

const Header = () => {
    const {heroFromPath} = useContext(starWarsContext);
    return (
        <header className="rounded-top-4">
            <Navigation/>
            <h1 className="text-center fs-1 py-4">{friends[heroFromPath].name}</h1>
        </header>
    );
};

export default Header;