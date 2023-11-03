import React, {Component} from 'react';
import {period10, url} from '../../utils/constants';
import style from './contact.module.css';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                planets: []
            }
    }

    componentDidMount() {
        const planets = JSON.parse(localStorage.getItem('planets'));

        if (!planets || (Date.now() - planets.timestamp) > period10) {
            fetch(`${url}planets`)
                .then(response => response.json())
                .then(data => {
                    this.setState(
                        {
                            names: data.map(item => item.name)
                        });
                    localStorage.setItem('planets', JSON.stringify(
                        {
                            names: data.map(item => item.name),
                            timestamp: Date.now()
                        }));
                })
        } else {
            this.setState(planets.names);
            console.log(this.state)
        }
    }

    render() {
        return (
            <div className={"container"}>
                <form onSubmit={e => e.preventDefault()}>
                    <label>First Name</label>
                    <input type={"text"} id={"fname"} name={"firstname"} placeholder={"Your name..."}></input>
                    <label>Last Name</label>
                    <input type={"text"} id={"lname"} name={"lastname"} placeholder={"Your last name..."}></input>
                    <label>Planet</label>
                    <select id={"planet"} name={"planet"}>
                        {this.state.names.map((item, index) => <option key={index} value={item}>{item}</option>
                        )}
                    </select>
                    <label>Subject</label>
                    <textarea type={"text"} id={"subject"} name={"subject"} placeholder={"Write something..."}
                              style={{height: 200}}></textarea>
                    <input type={"submit"} value={"Submit"}/>
                </form>
            </div>
        );
    }
}

export default Contact;