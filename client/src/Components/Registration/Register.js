import React, { useState } from 'react';
import { validatePassword, validateLogin, validateEmail } from '../../Validations/validateRegister';
import "./register.css"

function RegistrationPage() {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginErr, setLoginErr] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [passErr, setPassErr] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleLoginChange = (event) => {
    setLogin(event.target.value);
    if (validateLogin(event.target.value) === true) {
      validateForm();
    } else {
      setLoginErr(validateLogin(event.target.value));
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (validateEmail(event.target.value) === true) {
      validateForm();
    } else {
      setEmailErr(validateEmail(event.target.value));
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    if (validatePassword(event.target.value) === true) {
      validateForm();
    } else {
      setPassErr(validatePassword(event.target.value));
    }
  };

  const validateForm = () => {
    if (login && password && email) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const handleSubmit = (event) => {
    console.log("Send");
    event.preventDefault();
    // Отправка формы
  };



  return (
    <div className="register">
      <h1>Регистрация</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={login} placeholder='Логин' onChange={handleLoginChange} />
        <input type="email" value={email} placeholder='Email' onChange={handleEmailChange} />
        <input type="password" value={password} placeholder='Пароль' onChange={handlePasswordChange} />
        <button type="submit" disabled={!isFormValid}>Зарегистрироваться</button>
      </form>
    </div>
  );
}

export default RegistrationPage;
