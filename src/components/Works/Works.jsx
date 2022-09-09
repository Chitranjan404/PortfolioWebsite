import React from "react";
import './Works.css';
import Hackerrank from "../../img/hackerrank.jpg";
import codeforces from "../../img/codeforces.png";
import Codechef from "../../img/codechef.jpg";
import gfg from "../../img/gfg.jpg";
import leetcode from "../../img/leetcode.png";
import { motion } from "framer-motion";
// import hh from "../../img/codechef.png"
/*
again divided into two section, left and right.
*/
const Works = () => {
    return (
        <div className="works">
             <div className="awesome">
            <span>Experience on all these</span>
            <span>Websites</span>
            <span>
                <a href="https://codeforces.com"> 
                Codeforces   <br />
                </a>
                <a href="https://www.codechef.com">
                Codechef      <br />
                </a>
                <a href="https://auth.geeksforgeeks.org">
                GeeksforGeeks <br />
                </a>
                <a href="https://leetcode.com/">
                Leetcode      <br />
                </a>
            </span>
            <button className="button s-button">Hire Me</button>
            <div className="blur s-blurl" style = {{background : "#ABF1FF94"}}>
            </div>
            </div>

            {/* right side  */}
            <div className="w-right">
            <motion.div
             initial={{ rotate: 45 }}
           whileInView={{ rotate: 0 }}
             viewport={{ margin: "-40px" }}
            transition={{ duration: 3.5, type: "spring" }}
            
             className="w-mainCircle">
                <div className="w-secCircle">
                    <img src = {codeforces} alt = "" />
                </div>
                <div className="w-secCircle">
                    <img src = {leetcode} alt = "" />
                </div>
                <div className="w-secCircle">
                    <img src = {Codechef} alt = "" />
                </div>
                <div className="w-secCircle">
                    <img src = {Hackerrank} alt = "" />
                </div>
                <div className="w-secCircle">
                    <img src = {gfg} alt = "" />
                </div>
            </motion.div>
            
            {/* background circle */}
            <div className="w-backCircle blueCircle" ></div> 
            <div className="w-backCircle yellowCircle" ></div> 

            </div>
        </div>
    )
}

export default Works;