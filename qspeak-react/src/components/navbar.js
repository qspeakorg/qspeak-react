import react from "react";
import './navbar.css';
import logo from "../assets/Black_Logo.png"

function Navbar(){
    return(
        <div className="container">
            <img src={logo} className="logo"></img>
            <div className="nav">
                <button className="button">ABOUT US</button>
                <button className="button">TEAM</button>
                <button className="button">BLOG</button>
                <button className="button">CONTACT US</button>
            </div>
        </div>
    );
}

export default Navbar;