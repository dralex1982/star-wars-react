import React, {Component} from 'react';
import {logDOM} from "@testing-library/react";
import {url} from "../utils/constants";
import {countOfEpisodes} from "../utils/constants";
import data from "bootstrap/js/src/dom/data";

class FarGalaxy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        }
    }

    componentDidMount() {
        const title = sessionStorage.getItem('title');
        const opening_crawl = sessionStorage.getItem('opening_crawl');
        if (title && opening_crawl) {
            this.setState(
                {
                    isLoading: false,
                    title,
                    opening_crawl
                }
            )
        } else {
            const episode = Math.floor(Math.random() * countOfEpisodes + 1);
            fetch(`${url}films/${episode}`)
                .then(response => response.json())
                .then(data => {
                    this.setState(
                        {
                            isLoading: false,
                            title: data.title,
                            opening_crawl: data.opening_crawl

                        }
                    )
                    sessionStorage.setItem('title', data.title);
                    sessionStorage.setItem('opening_crawl', data.opening_crawl);
                }).catch(e =>
                this.setState(
                    {
                        isLoading: true
                    }
                )
            )
        }
    }

    render() {
        if (this.state.isLoading)
            return (
                <div className="farGalaxy">Loading...</div>
            )
        else
            return (
                <div className="farGalaxy">
                    <h1 style={{textTransform: 'uppercase', textAlign: 'center'}}>
                        {this.state.title}</h1>
                    <p>{this.state.opening_crawl}</p>
                </div>
            )
    }
}

export default FarGalaxy;