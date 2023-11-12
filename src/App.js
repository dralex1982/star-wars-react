import './App.css';
import React, {Component} from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/footer/Footer";
import {navItems} from "./utils/constants";
import {starWarsContext} from "./utils/starWarsContext";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {activePage: navItems[0]}
    }

    changePage = page => this.setState({activePage: page});
    render() {
        return (
            <div className="container-fluid">
                <starWarsContext.Provider value={{
                    changePage: this.changePage,
                    activePage: this.state.activePage
                }}>
                    <Header/>
                    <Main page={this.state.activePage}/>
                </starWarsContext.Provider>
                <Footer/>
            </div>
        );
    }
}

export default App