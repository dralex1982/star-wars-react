import './App.css';
import React, {Component, useEffect, useState} from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/footer/Footer";
import {navItems} from "./utils/constants";
import {starWarsContext} from "./utils/starWarsContext";
import {logDOM} from "@testing-library/react";


const App = () => {
    const getItemByRoute = () => {
        const route = window.location.hash.substring(2);
        return navItems.find(item => item.route === route) ?? navItems[0];
    }

    const [page, setPage] = useState(getItemByRoute());

    useEffect(() => {
        window.addEventListener('hashchange', () => {
            const page = getItemByRoute();
            setPage(page);
        })
    }, []);

    return (
        <div className="container-fluid">
            <starWarsContext.Provider value={{changePage: setPage, page}}>
                <Header/>
                <Main page={page}/>
            </starWarsContext.Provider>
            <Footer/>
        </div>
    );

}

export default App