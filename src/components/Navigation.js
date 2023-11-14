import React from 'react';
import {navItems} from "../utils/constants";
import NavItem from "./NavItem";
import {starWarsContext} from "../utils/starWarsContext";

const Navigation = () => {
    return (
        <starWarsContext.Consumer>
            {value =>
                <nav>
                    <ul className="nav fixed-top mt-1 ms-5">
                        {navItems.map(item =>
                            <NavItem key={item.route} text={item} changePage={value.changePage}/>)}
                    </ul>
                </nav>}
        </starWarsContext.Consumer>
    );
};

export default Navigation;