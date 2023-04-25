export function validatePassword(pass) {
    if (pass === '') {
        return 'Введите пароль.';
    }
    return true;
}

export function validateLogin(login) {
    if (login === '') {
        return 'Введите логин.';
    }
    return true;
}