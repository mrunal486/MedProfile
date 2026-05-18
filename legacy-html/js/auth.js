document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // In a real application, you would send credentials to a backend for verification.
            // For this demo, we'll simulate a successful login and redirect.
            console.log('Simulating login...');
            
            const email = document.getElementById('email').value;
            if (email.includes('doctor')) {
                window.location.href = 'doctor-dashboard.html';
            } else {
                window.location.href = 'patient-dashboard.html';
            }
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // In a real application, you would send the new user's data to a backend.
            // For this demo, we'll simulate a successful signup and redirect to the login page.
            console.log('Simulating signup...');
            
            alert('Account created successfully! Please log in.');
            window.location.href = 'login.html';
        });
    }
});
