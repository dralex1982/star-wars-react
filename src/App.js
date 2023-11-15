import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/footer/Footer";
import {useState} from "react";
import {defaultHero} from "./utils/constants";
import {starWarsContext} from "./utils/starWarsContext";

const App = () => {
    const [heroFromPath, setHeroFromPath] = useState(defaultHero)
    return (
        <div className="container-fluid">
            <starWarsContext.Provider value={{heroFromPath, setHeroFromPath}}>
                <Header/>
                <Main/>
            </starWarsContext.Provider>
            <Footer/>
        </div>
    );

}

export default App