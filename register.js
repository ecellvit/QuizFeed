const register = document.getElementById('register');
register.addEventListener('submit', function(e) {
    e.preventDefault();
    var user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        access: document.getElementById("access").value,
    }

    console.log(user);

    var xhr = new XMLHttpRequest();

    xhr.open('POST', "https://quizfeedapi.herokuapp.com/user/signup", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(user));
    xhr.onload = function() {
        console.log(this.responseText)
    }

    // fetch('https://quizfeedapi.herokuapp.com/user/signup', {
    //         method: 'POST',
    //         body: JSON.stringify(user)
    //     })
    //     .then(res => {
    //         return res.text();
    //     })
    //     .then(text => console.log(text))
    //     .catch(error => console.log('ERROR'))
})