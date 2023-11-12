import './App.css';
import React, {Component, useState} from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/footer/Footer";
import {navItems} from "./utils/constants";
import {starWarsContext} from "./utils/starWarsContext";


const App =() => {
    const [page, setPage] = useState(navItems[0]);

        return (
            <div className="container-fluid">
                <starWarsContext.Provider value={{changePage: setPage,page}}>
                    <Header/>
                    <Main page={page}/>
                </starWarsContext.Provider>
                <Footer/>
            </div>
        );

}

export default App