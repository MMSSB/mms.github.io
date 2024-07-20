document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('error-message');

    // Hard-coded username and password
    const correctUsername = 'MMS';
    const correctPassword = '0902';

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === correctUsername && password === correctPassword) {
            localStorage.setItem('loggedIn', 'true');
            window.location.href = './loading.html'; // Redirect to the loading page
        } else {
            errorMessage.textContent = 'Invalid username or password.';
        }
    });
});
