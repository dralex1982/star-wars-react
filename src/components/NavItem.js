import React, {useContext} from 'react';
import {starWarsContext} from "../utils/starWarsContext";


const NavItem = ({text}) => {
    const {changePage} = useContext(starWarsContext)
    return <li
        className="nav-item btn btn-danger border-light rounded-pill mx-1 common-button"
        onClick={() => changePage(text)}>{text}</li>;
};

export default NavItem;