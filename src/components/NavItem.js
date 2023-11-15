import React, {useContext} from 'react';
import {Link} from "react-router-dom";


const NavItem = ({text}) => {

    return <Link
        className="nav-item btn btn-danger border-light rounded-pill mx-1 common-button"
    to={`/${text.route}`}>
        {text.title}
    </Link>;
};

export default NavItem;