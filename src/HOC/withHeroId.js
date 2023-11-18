import {useContext, useEffect} from "react";
import {starWarsContext} from "../utils/starWarsContext";
import {useNavigate, useParams} from "react-router-dom";
import {characters, defaultHero} from "../utils/constants";

// export const withHeroId = (Component, route) => props =>
export const withHeroId = route => Component => props => {
    const {setHeroFromPath} = useContext(starWarsContext);
    let {heroId} = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        if (!characters.includes(heroId)) {
            navigate(`/${route}/${defaultHero}`);
            return;
        } else
            setHeroFromPath(heroId);
    }, [heroId]);
    return <Component {...props}/>
}