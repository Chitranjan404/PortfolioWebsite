import React from "react";
import Toggle from "../Toggle/Toggle";
import './Navbar.css'
import { Link } from "react-scroll";

/*divied into two sides: left and right, on left side we have name and theme
button and on right side we have list of items and a contact button
*/
const Navbar = () => {
    return (
       <div className="n-wrapper" >
            <div className="n-left">
                <div className="n-name">Chitranjan</div>
                <Toggle />
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style = {{listStyleType : 'none'}}>
                        <Link spy = {true} smooth = {true} to = 'Navbar' >
                       <li>Home</li>
                       </Link>
                       <Link spy = {true} smooth = {true} to = 'Services' >
                       <li>Achievements</li>
                       </Link>
                       <Link spy = {true} smooth = {true} to = 'Experiences' >
                       <li>Programming</li>
                       </Link>
                       <Link spy = {true} smooth = {true} to = 'Portfolio' >
                       <li>Portfolio</li>
                       </Link>
                    </ul>
                </div>
                <Link spy = {true} smooth = {true} to = 'ContactMe' >
                <button className="button">
                    Contact
                </button>
                </Link>

            </div>
       </div>
    )
}
export default Navbar;