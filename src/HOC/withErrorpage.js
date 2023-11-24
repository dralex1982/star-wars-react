import {useContext, useEffect} from "react";
import {friends} from "../utils/constants";
import {starWarsContext} from "../utils/starWarsContext";
import {useParams} from "react-router-dom";
import ErrorPage from "../components/ErrorPage";

export const withErrorpage = route => Component => props => {

    const {setHeroFromPath} = useContext(starWarsContext);
    let {heroId} = useParams();

    useEffect(() => {
        if (friends[heroId])
            setHeroFromPath(heroId);
    }, [heroId]);

    return friends[heroId] ? <Component {...props}/> : <ErrorPage/>;
}