import friend1 from '../styles/images/friend1.jpg';
import friend2 from '../styles/images/friend2.jpg';
import friend3 from '../styles/images/friend3.jpg';
import friend4 from '../styles/images/friend4.jpg';
import friend5 from '../styles/images/friend5.jpg';
import friend6 from '../styles/images/friend6.jpg';
import friend7 from '../styles/images/friend7.jpg';
import friend8 from '../styles/images/friend8.jpg';
import friend9 from '../styles/images/friend9.jpg';

export const url = 'https:/sw-info-api.herokuapp.com/v1/';
export const countOfEpisodes = 6;
export const navItems = [
    {title: 'Home', route: 'home'},
    {title: 'About me', route: 'about_me'},
    {title: 'Star wars', route: 'star_wars'},
    {title: 'Contact', route: 'contact'},
];
export const friends = [friend1, friend2, friend3, friend4, friend5, friend6, friend7, friend8, friend9];

export const period30 = 1000 * 60 * 60 * 24 * 30; //миллисекунд в 30 днях
export const period10 = 1000 * 60 * 60 * 24 * 10; //миллисекунд в 10 днях