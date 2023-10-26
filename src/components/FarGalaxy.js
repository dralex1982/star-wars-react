import React, {Component} from 'react';
import {logDOM} from "@testing-library/react";

class FarGalaxy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            filmInfo: {}
        }
    }

    componentDidMount() {
        const min = 1;
        const max = 6;
        const rand = Math.floor(Math.random() * (max - min + 1) + min);
        fetch(`https://sw-info-api.herokuapp.com//v1/films/${rand}`)
            .then(response => response.json())
            .then(data => this.setState(
                {
                    isLoading: false,
                    filmInfo: {
                        title: data.title,
                        episode: data.episode_id,
                        release_date: data.release_date,
                        opening_crawl: data.opening_crawl,
                    }
                }
            )).catch( e =>
            this.setState(
                {
                    isLoading: true
                }
            )
        )
    }

    render() {
        if (this.state.isLoading)
            return (
                <div className="farGalaxy">Error data. No information</div>
            )
        else
            return (
                <div className="farGalaxy">
                    <p>title: {this.state.filmInfo.title}</p>
                    <p>episode: {this.state.filmInfo.episode}</p>
                    <p>release_date: {this.state.filmInfo.release_date}</p>
                    <p>opening_crawl: {this.state.filmInfo.opening_crawl}</p>
                </div>
            )
    }
}

export default FarGalaxy;