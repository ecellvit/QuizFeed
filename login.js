const login = document.getElementById('login');
login.addEventListener('submit', function(e) {
    e.preventDefault();
    var user = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    }
    for (i = 0; i < user.length; i++) {
        if (email == user[i].email && password == user[i].password) {
            console.log(email + " logged in")
        }
    }

    console.log(user);

    var xhr = new XMLHttpRequest();

    xhr.open('POST', "https://quizfeedapi.herokuapp.com/user/login", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(user));
    xhr.onload = function() {
        console.log(this.responseText)
    }

})