import './App.css';
import React, {Component, useEffect, useState} from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/footer/Footer";

const App = () => {
    return (
        <div className="container-fluid">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );

}

export default App