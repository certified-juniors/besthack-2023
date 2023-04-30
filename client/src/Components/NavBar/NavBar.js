import React from "react";
import "./navbar.css";

const NavBar = (props) => {
    return (
        <div className="navBar">
            <div className="markName">
            <a href="/"><h1>Broker.</h1></a>
            </div>
            <div className="unauthLinks">
                <a href="/terminal"><button className="glow-on-hover">Брокерский терминал</button></a>
                <a href="/about"><button className="glow-on-hover">О нас</button></a>
            </div>
        </div>
    )
}

export default NavBar;