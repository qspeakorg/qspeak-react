import react from "react";
import './navbar.css';

function Navbar(){
    return(
        <div className="container">
            <img src="http://www.qspeak.org/assets/img/Black%20Logo.png" className="logo"></img>
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