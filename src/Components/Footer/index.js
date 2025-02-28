import React from 'react'
import './style.css';

const Footer = () => {
    const currentYear = new Date().getFullYear(); //Obtém o ano atual dinamicamente
    return (
        <div className="container-footer">
            <h2>{currentYear} - ArgusTech</h2>
        </div>
    );
};

export default Footer;