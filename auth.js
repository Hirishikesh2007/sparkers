const loginBox = document.getElementById('loginBox');
const signupBox = document.getElementById('signupBox');
const forgotBox = document.getElementById('forgotBox');

// Navigation
if (document.getElementById('showSignup')) {
    document.getElementById('showSignup').onclick = () => {
        loginBox.style.display = 'none';
        signupBox.style.display = 'block';
    };
}

if (document.getElementById('showLogin')) {
    document.getElementById('showLogin').onclick = () => {
        signupBox.style.display = 'none';
        loginBox.style.display = 'block';
    };
}

if (document.getElementById('showForgot')) {
    document.getElementById('showForgot').onclick = () => {
        loginBox.style.display = 'none';
        forgotBox.style.display = 'block';
    };
}

if (document.getElementById('backToLoginFromForgot')) {
    document.getElementById('backToLoginFromForgot').onclick = () => {
        forgotBox.style.display = 'none';
        loginBox.style.display = 'block';
    };
}

// Sign Up
if (document.getElementById('signupForm')) {
    document.getElementById('signupForm').onsubmit = (e) => {
        e.preventDefault();
        const email = document.getElementById('regEmail').value;
        const password = document.getElementById('regPassword').value;

        let users = JSON.parse(localStorage.getItem('users')) || [];

        if (users.find(u => u.email === email)) {
            alert("Account already exists! Please log in.");
            return;
        }

        users.push({ email, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert("Account created successfully! Please log in.");

        signupBox.style.display = 'none';
        loginBox.style.display = 'block';
    };
}

// Login Validation
if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').onsubmit = (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        let users = JSON.parse(localStorage.getItem('users')) || [];
        const validUser = users.find(u => u.email === email && u.password === password);

        if (validUser) {
            localStorage.setItem('currentUser', JSON.stringify(validUser));
            window.location.href = "index.html";
        } else {
            alert("Invalid credentials or account does not exist.");
        }
    };
}