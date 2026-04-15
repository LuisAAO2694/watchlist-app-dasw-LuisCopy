


const validarEmail = (email) => {
    const errorMsg = document.getElementById('email-error');

    if (!email) {
        errorMsg.textContent = 'El correo electronico es obligatorio';
        errorMsg.classList.remove('hidden');
        return false;
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errorMsg.textContent = 'Por favor, ingresa un correo electronico válido.';
        errorMsg.classList.remove('hidden');
        return false;
    }
    else {
        errorMsg.classList.add('hidden');
        return true;
    }
}


const validarPassword = (password) => {
    const errorMsg = document.getElementById('password-error');

    if (!password) {
        errorMsg.textContent = 'La contraseña es obligatoria.';
        errorMsg.classList.remove('hidden');
        return false;
    }
    else if (password.length < 3) {
        errorMsg.textContent = 'La contraseña debe de tener minimo 3 caracateres';
        errorMsg.classList.remove('hidden');
        return false;
    }
    else {
        errorMsg.classList.add('hidden');
        return true;
    }
}

const intentarLogin = async (e) => {
    e.preventDefault();

    const formLogin = document.getElementById('login-form');


    const emailInput = formLogin.querySelector('input[type=text]')
    const passwordInput = formLogin.querySelector('input[type=password]')

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    const emailValido = validarEmail(email);

    const passwordValid = validarPassword(password);


    if (!emailValido && !passwordValid) {
        return;
    }


    const payload = {
        email,
        password
    }

    console.log(payload);


    try {
        const response = await fetch('/api/auth/ingresar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Error al iniciar sesión');
        }

        console.log(data);

        const { token } = data.respuesta;
        console.log(token);

        localStorage.setItem('token', token);

        window.location.replace('/watchlist');
    } catch (error) {
        alert(error);
    }
}

document.addEventListener('DOMContentLoaded', (event) => {

    const formRegistro = document.getElementById('register-form');
    const formLogin = document.getElementById('login-form');


    formLogin.addEventListener('submit', intentarLogin);

    const password = document.getElementById('login-password');


    password.addEventListener('input', (e) => {
        const passwordInput = formLogin.querySelector('input[type=password]')

        const password = passwordInput.value.trim();

        validarPassword(password);
    });
});