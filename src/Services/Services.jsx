import React from "react";
import './Services.css'
import Heartemoji from '../img/heartemoji.png';
import Glasses from '../img/glasses.png';
import Humble from '../img/humble.png';
import Card from '../components/Card/Card'
import { motion } from "framer-motion";
import Resume from './Chitranjan Singh- ResumeFinal.pdf'
/*
again divided into sections, left and right. On the left we have the some text and 
the download cv button and on the right side we have these cards. Made a card
components for these cards.Now again for motion i used the framer motion.

*/
const Services = () => {
    const transition = {duration : 1, type : 'spring'}
    return (
        <div className="services" id = 'Services'>
            {/* left side */}
            <div className="awesome">
            <span>My Achievements &</span>
            <span>Awards</span>
            <span>
                For more information<br />
                Download my CV
            </span>
            <a href={Resume} download>
            <button className="button s-button">Download CV</button>
            </a>
            <div className="blur s-blur1" style = {{background : "#ABF1FF94"}}></div>
            </div>
            {/* right side */}
            <div className="cards">
            
                <motion.div 
                initial = {{left : '30%'}}
                whileInView = {{left : '19rem'}}
                transition = {transition}
                style={{left : '27rem'}}>
                    <Card
                    emoji = {Heartemoji}
                    heading = {'Programming'}
                    detail = {"C++,Python,Javascript, and also logical ability to solve problems"} 
                    />
                </motion.div>
                <motion.div
                 initial={{ left: "-6rem", top: "12rem" }}
                whileInView={{ left: "1rem" }}
                transition={transition}
                
                 style={{top : "12rem" , left : "6rem"}}>
                <Card
                    emoji = {Glasses}
                    heading = {'Explorer'}
                    detail = {"Have explored many fields which includes but not limited to, cybersecurity, financial and DS."} 
                    />
                </motion.div>
                <motion.div
                initial={{ top: "19rem", left: "30rem" }}
                whileInView={{ left: "17rem" }}
                transition={transition}
                
                 style={{top : "19rem" , left : "22rem"}}>
                <Card
                    emoji = {Humble}
                    heading = {'Achievements School'}
                    detail = {
                        "Grade A1 in all subjects in Class 10th(10CGPA)"
                    } 
                    />
                </motion.div>
                <div className="blur s-blur2" style = {{background : "#var(--purple)"}}></div>
            </div>
        </div>
    )
    }

export default Services;