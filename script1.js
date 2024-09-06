document.getElementById('signup').addEventListener('submit', function(event) {
    // console.log("Hello");
    event.preventDefault(); 
    const username = document.getElementById('t1').value;
    const password = document.getElementById('pass').value;
    const userData = {
        username: username,
        password: password
    };
    const jsonData = JSON.stringify(userData);
    console.log(jsonData);
    localStorage.setItem('userData', jsonData);

    alert('User data saved successfully!');
});
