import React, { useState } from "react";
import { validatePassword, validateLogin } from "../../Validations/validateLogin";
import "./login.css";

const Login = (props) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    const handleLoginChange = (event) => {
        setLogin(event.target.value);
        if (validateLogin(event.target.value) === true) {
            validateForm();
        }
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        if (validatePassword(event.target.value) === true) {
            validateForm();
        }
    }

    const validateForm = () => {
        if (login && password) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Send");
        props.loginUser(true);
    }

    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <div className="header">
                    <h2>Логин</h2>
                    <button className="close" onClick={props.handleCloseModal}>&times;</button>
                </div>
                <input type="text" value={login} placeholder="Логин" onChange={handleLoginChange} />
                <input type="password" value={password} placeholder="Пароль" onChange={handlePasswordChange} />
                <button type="submit" disabled={!isFormValid}>Авторизоваться</button>
            </form>
        </div>
    )
}
export default Login;