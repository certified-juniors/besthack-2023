import React, { useState } from "react";
import "./navbar.css";

const NavBar = (props) => {
    return (
        <div className="navBar">
            <a href="/"><h1>Broker.</h1></a>
            <div className="unauthLinks">
                <a href="/terminal"><button className="authBtn">Брокерский терминал</button></a>
            </div>
        </div>
    )
}

export default NavBar;