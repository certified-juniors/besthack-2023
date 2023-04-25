import React, { useState } from "react";
import "./navbar.css";
import Login from "../Login/Login";

const NavBar = (props) => {
    const [showModal, setShowModal] = useState(false);
    
    const handleOpenModal = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    return (
        <div className="navBar">
            <a href="/"><h1>Broker.</h1></a>
            {!props.auth ? 
            <div className="unauthLinks">
                <button className="auth" onClick={handleOpenModal}>Авторизация</button>
                <a href="/register"><button className="register">Регистрация</button></a>
            </div>
            :
            <div className="authLinks">
                <a href="/stocks"><button className="stocks">Акции</button></a>
                <a href="/portfolio"><button className="portfolio">Портфель</button></a>
                <a href="/balance"><button className="balance">Баланс</button></a>
                <a href="/profile"><button className="profile">Профиль</button></a>
                <button className="logout" onClick={props.logoutUser}>Выход</button>
            </div>}
            {showModal &&
            <Login
                handleCloseModal={handleCloseModal}
                loginUser={props.loginUser}
            />}
        </div>
    )
}

export default NavBar;