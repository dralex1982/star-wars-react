import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import {friends, navItems} from "../utils/constants";
import {starWarsContext} from "../utils/starWarsContext";


const Friend = ({item, pos}) => {
    const {setHeroFromPath} = useContext(starWarsContext);
    const navigate = useNavigate();

    let style = "col-4 p-1";
    if (pos === 7)
        style += ' left';
    else if (pos === 9)
        style += ' right';


    return <img className={style}
                onClick={()=> navigate(`/${navItems[0].route}/${item}`)}
                src={friends[item].img} alt={friends[item].name}/>
};

export default Friend;