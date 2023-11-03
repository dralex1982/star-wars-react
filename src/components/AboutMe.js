import React, {Component} from 'react';
import {period30, url} from "../utils/constants";

class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "name": null,
            "birth_year": null,
            "gender": null,
            "eye_color": null,
            "hair_color": null,
            "skin_color": null,
            "height": null,
            "mass": null
        }
    }

    componentDidMount() {
        const hero = JSON.parse(localStorage.getItem('hero'));

        if (!hero || (Date.now() - hero.timestamp) > period30) {
            fetch(`${url}peoples/1`)
                .then(response => response.json())
                .then(data => {
                    this.setState(
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
                    localStorage.setItem("hero", JSON.stringify({info: data, timestamp: Date.now()}));
                })
        } else {
            this.setState(hero.info);
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