import React, {Component} from 'react';
import {period} from "../utils/constants";
import data from "bootstrap/js/src/dom/data";
import {url} from "../utils/constants";
import hero from "./Hero";
import {logDOM} from "@testing-library/react";

class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hero:{},
            info: "",
            "name": null,
            "birth_year": null,
            "gender": null,
            "eye_color": null,
            "hair_color": null,
            "skin_color": "string",
            "height": null,
            "mass": null
        }
    }

    componentDidMount() {
        const hero = JSON.parse(localStorage.getItem('hero'));
        console.log(hero.info);

        if (!hero || (Date.now() - hero.timestamp) > period) {
            fetch(`${url}peoples/1`)
                .then(response => response.json())
                .then(data => {
                    this.setState({hero: {info: data}})
                    localStorage.setItem("hero", JSON.stringify({info: data, timestamp: Date.now()}));
                })
        } else {
            this.setState(hero.info);
            console.log(this.hero);
        }
    }

    //hero = {info: {name:"", mass:""}, timestamp: 1111111111}

    render() {
        return (
            <div>
                <p>name: {}</p>
                <p>birth_year: null</p>
                <p>gender: null</p>
                <p>eye_color: null</p>
                <p>hair_color: null</p>
                <p>skin_color: "string"</p>
                <p>height: null</p>
                <p>mass: null</p>
            </div>
        );
    }
}

export default AboutMe;