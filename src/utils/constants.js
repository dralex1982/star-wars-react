import friend1 from '../styles/images/friend1.jpg';
import friend2 from '../styles/images/friend2.jpg';
import friend3 from '../styles/images/friend3.jpg';
import friend4 from '../styles/images/friend4.jpg';
import friend5 from '../styles/images/friend5.jpg';
import friend6 from '../styles/images/friend6.jpg';
import friend7 from '../styles/images/friend7.jpg';
import friend8 from '../styles/images/friend8.jpg';
import friend9 from '../styles/images/friend9.jpg';
import friend0 from "../styles/images/main.jpg";

export const url = 'https:/sw-info-api.herokuapp.com/v1/';
export const countOfEpisodes = 6;
export const navItems = [
    {title: 'Home', route: 'home'},
    {title: 'About me', route: 'about_me'},
    {title: 'Star wars', route: 'star_wars'},
    {title: 'Contact', route: 'contact'},
];
export const friends =
    {
        luke:
            {
                name: "Luke Skywalker",
                img: friend0,
                url: `${url}peoples/1`
            },
        r2d2:
            {
                name: "R2-D2",
                img: friend1,
                url: `${url}peoples/3`
            },
        c3po:
            {
                name: "C-3PO",
                img: friend2,
                url: `${url}peoples/2`
            },
        ewok:
            {
                name: "Wicket Systri Warrick",
                img: friend3,
                url: `${url}peoples/30`
            },
        chewbacca:
            {
                name: "Chewbacca",
                img: friend4,
                url: `${url}peoples/13`
            },
        han_solo:
            {
                name: "Han Solo",
                img: friend5,
                url: `${url}peoples/14`
            },
        leia:
            {
                name: "Leia Organa",
                img: friend6,
                url: `${url}peoples/5`
            },
        falcon:
            {
                name: "Millenium Falcon",
                img: friend7,
                url: `${url}transports/10`
            },
        obi_wan:
            {
                name: "Obi-Wan Kenobi",
                img: friend8,
                url: `${url}peoples/10`
            },
        yoda:
            {
                name: "Yoda",
                img: friend9,
                url: `${url}peoples/0`
            }
    };

export const characters = Object.keys(friends);
export const defaultHero = characters[0];
export const period30 = 1000 * 60 * 60 * 24 * 30; //миллисекунд в 30 днях
export const period10 = 1000 * 60 * 60 * 24 * 10; //миллисекунд в 10 днях