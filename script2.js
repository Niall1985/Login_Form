document.getElementById('signin').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const enteredUsername = document.getElementById('t1').value;
    const enteredPassword = document.getElementById('pass').value;
    if (!enteredUsername || !enteredPassword) {
        alert('Please fill in all fields');
        return;
    }

    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
        const parsedUserData = JSON.parse(storedUserData);
        if (enteredUsername === parsedUserData.username && enteredPassword === parsedUserData.password) {
            alert('Login successful!');
        } else {
            alert('Invalid username or password.');
        }
    } else {
        alert('No user data found. Please sign up.');
    }
});
