// Initialize an array to store registered users
let users = []; // This will hold registered users

// Function to toggle between login and signup forms
function toggleForms() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
    signupForm.style.display = signupForm.style.display === 'none' ? 'block' : 'none';
}

// Handle signup form submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission from refreshing the page

    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    // Check if the email is already registered
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        alert('Email already registered. Please login or use another email.');
        return;
    }

    // Register the new user
    users.push({ name, email, password });
    alert('Signup successful! You can now log in.');

    // Optionally, clear the signup form after successful registration
    document.getElementById('signupForm').reset();
    toggleForms(); // Switch back to the login form
});

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission from refreshing the page

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Find the user by email
    const user = users.find(user => user.email === email);
    if (!user) {
        alert('No user found with this email. Please sign up.');
        return;
    }

    // Check if the password matches
    if (user.password !== password) {
        alert('Incorrect password. Please try again.');
        return;
    }

    alert('Login successful! Welcome back, ' + user.name + '!');
    // Here you could redirect the user to another page or take any other action
});
