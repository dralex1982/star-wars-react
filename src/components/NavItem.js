import React, {useContext} from 'react';
import {starWarsContext} from "../utils/starWarsContext";


const NavItem = ({text}) => {

    return <li className="nav-item btn btn-danger border-light rounded-pill mx-1 common-button"
               onClick={() => window.location.hash = `#/${text.route}`}>{text.title}</li>;
};

export default NavItem;