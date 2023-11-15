import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {starWarsContext} from "../utils/starWarsContext";
import {navItems} from "../utils/constants";


const NavItem = ({text}) => {
    const {heroFromPath} = useContext(starWarsContext);
    let route = `/${text.route}`;
    if (text.route === navItems[0].route || text.route === navItems[1].route)
        route += `/${heroFromPath}`;
    return <Link
        className="nav-item btn btn-danger border-light rounded-pill mx-1 common-button"
        to={route}>
        {text.title}
    </Link>;
};

export default NavItem;