import React from 'react';
import style from './footer.module.css'

const Footer = () => {
    return (
        <footer className="rounded-bottom-4">
            <div className="nav-item btn btn-danger border-light rounded-pill mx-1 my-3 common-button">
                <p>Send me an <span className={style.email}>email</span></p>
            </div>
        </footer>
    );
};

export default Footer;