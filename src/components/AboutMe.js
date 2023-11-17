import React, {useContext, useEffect, useState} from 'react';
import {characters, defaultHero, friends, navItems, period30, url} from "../utils/constants";
import {starWarsContext} from "../utils/starWarsContext";
import {useNavigate, useParams} from "react-router-dom";

const AboutMe = (props) => {
    const {heroFromPath} = useContext(starWarsContext);
    let {heroId} = useParams();
    const navigate = useNavigate();

    const [stats, setStats] = useState({
        "name": null,
        "birth_year": null,
        "gender": null,
        "eye_color": null,
        "hair_color": null,
        "skin_color": null,
        "height": null,
        "mass": null
    });

    useEffect(() => {

        if (!characters.includes(heroId)) {
            navigate(`/${navItems[1].route}/${defaultHero}`);
            return;
        }

        const hero = JSON.parse(localStorage.getItem(heroId));

        if (!hero || (Date.now() - hero.timestamp) > period30) {
            fetch(friends[heroId].url)
                .then(response => response.json())
                .then(data => {
                    setStats(
                        {
                            "name": data.name,
                            "birth_year": data.birth_year,
                            "gender": data.gender,
                            "eye_color": data.eye_color,
                            "hair_color": data.hair_color,
                            "skin_color": data.skin_color,
                            "height": data.height,
                            "mass": data.mass
                        }
                    )
                    localStorage.setItem(heroId, JSON.stringify({info: data, timestamp: Date.now()}));
                })
        } else
            setStats(hero.info);
        props.setHeroFromPath(heroId);
    }, [])

    //hero = {info: {name:"", mass:""}, timestamp: 1111111111}

    return (
        <div>
            <h2>name: {stats.name}</h2>
            <p>birth_year: {stats.birth_year}</p>
            <p>gender: {stats.gender}</p>
            <p>eye_color: {stats.eye_color}</p>
            <p>hair_color: {stats.hair_color}</p>
            <p>skin_color: {stats.skin_color}</p>
            <p>height: {stats.height}</p>
            <p>mass: {stats.mass}</p>
        </div>
    );
}

export default AboutMe;