import React from "react";
import "./navbar.css";

const NavBar = (props) => {
    return (
        <div className="navBar">
            <a href="/"><h1>Broker.</h1></a>
            <div className="unauthLinks">
                <a href="/terminal"><button className="terminalBtn">Брокерский терминал</button></a>
                <a href="/about"><button className="aboutBtn">О нас</button></a>
            </div>
        </div>
    )
}

export default NavBar;