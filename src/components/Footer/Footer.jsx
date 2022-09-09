import React from "react";
import './Footer.css';
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Wave from '../../img/wave.png'

const Footer = () => {
    return (
        <div className="footer">
            <img src = {Wave} alt = ""
            style={{width : '100%'}} />
            <div className="f-content">
            <span>Chitranjan1613@gmail.com</span>
            <div className="f-icons">
                <a href="https://www.instagram.com/">
                    <Insta color= 'white' size = '3rem'/>
                </a>
                <a href="https://www.facebook.com/">
                    <Facebook color = "white" size = "3rem"/>
                </a>
                <a href="https://www.github.com/">
                    <Github color = 'white' size = '3rem' />
                </a>
                    
            </div>
            </div>

        </div>
    )
}

export default Footer;