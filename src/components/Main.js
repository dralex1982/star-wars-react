import React, {useContext} from 'react';
import {navItems} from "../utils/constants";
import AboutMe from "./AboutMe";
import StarWars from "./StarWars";
import Contact from "./contact/Contact";
import Home from "./Home";
import {Route, Routes} from "react-router-dom";
import ErrorPage from "./ErrorPage";
import {starWarsContext} from "../utils/starWarsContext";

const Main = () => {
    return (
        <Routes>
            {['/', `${navItems[0].route}`, `${navItems[0].route}/:heroId`].map(path =>
                <Route path={path} key={path} element={<Home/>}/>)}

            {/*<Route path={`${navItems[1].route}`} element={<AboutMe setHeroFromPath={setHeroFromPath}/>}/>*/}
            {/*<Route path={`${navItems[1].route}/:heroId`} element={<AboutMe setHeroFromPath={setHeroFromPath}/>}/>*/}

            <Route path={`${navItems[1].route}`} element={<AboutMe/>}>
                <Route path={':heroId'} element={<AboutMe/>}/></Route>
            <Route path={`${navItems[2].route}`} element=<StarWars/>/>
            <Route path={`${navItems[3].route}`} element=<Contact/>/>
            <Route path={'*'} component={ErrorPage}/>
        </Routes>
    )
};

export default Main;