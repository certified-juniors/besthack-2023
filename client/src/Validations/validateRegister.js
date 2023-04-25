export function validatePassword(pass) {
    if (pass === '') {
        console.log('Введите пароль')
        return 'Введите пароль.';
    }
    if (pass.length < 8) {
        console.log('Пароль должен содержать минимум 8 символов.')
        return 'Пароль должен содержать минимум 8 символов.';
    }
    const regex = /\d/;
    if (!regex.test(pass)) {
        console.log('Пароль должен содержать минимум 1 цифру');
        return 'Пароль должен содержать минимум 1 цифру.'
    }

    return true;
}

export function validateLogin(login) {
    if (login === '') {
        console.log('Введите логин');
        return 'Введите логин.';
    }
    if (login.length < 5) {
        console.log('Логин должен содержать минимум 5 символов.');
        return 'Логин должен содержать минимум 5 символов.';
    }
    return true;
}

export function validateEmail(email) {
    if (email === '') {
        console.log("Введите почту");
        return 'Введите почту.';
    }
    return true;
}