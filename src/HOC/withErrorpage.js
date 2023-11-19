import {useContext, useEffect} from "react";
import {characters, defaultHero} from "../utils/constants";
import {starWarsContext} from "../utils/starWarsContext";
import {useNavigate, useParams} from "react-router-dom";
import ErrorPage from "../components/ErrorPage";

export const withErrorpage = route => Component => props => {

    const {setHeroFromPath} = useContext(starWarsContext);
    let {heroId} = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        if (!characters.includes(heroId)) {
            navigate(`/${route}/*`);
            console.log(`${route}`)
            return;
        } else
            setHeroFromPath(heroId);
    }, [heroId]);
    console.log(heroId)
    if (heroId === '*')
        return <ErrorPage/>
    else return <Component {...props}/>
}