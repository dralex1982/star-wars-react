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

        if (!hero || (Date.now() - hero.timestamp) > period) {
            fetch(`${url}peoples/1`)
                .then(response => response.json())
                .then(data => {
                    this.setState(data)
                    localStorage.setItem("hero", JSON.stringify({info: data, timestamp: Date.now()}));
                })
        } else {
            this.setState({
                hero: {
                    info:hero.info
                }
            });
        }
    }

    //hero = {info: {name:"", mass:""}, timestamp: 1111111111}

    render() {
        return (
            <div>
                <h2>name: {this.state.name}</h2>
                <p>birth_year: {this.state.birth_year}</p>
                <p>gender: {this.state.gender}</p>
                <p>eye_color: {this.state.eye_color}</p>
                <p>hair_color: {this.state.hair_color}</p>
                <p>skin_color: {this.state.skin_color}</p>
                <p>height: {this.state.height}</p>
                <p>mass: {this.state.mass}</p>
            </div>
        );
    }
}

export default AboutMe;