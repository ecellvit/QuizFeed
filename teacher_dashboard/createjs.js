const create = document.getElementById('create');
create.addEventListener('submit', function(e) {
    e.preventDefault();
    var user = {
        quizname: document.getElementById("quizname").value,
        questions: document.getElementById("input_text[]").value
    }

    console.log(user);

    var xhr = new XMLHttpRequest();

    xhr.open('POST', "https://quizfeedapi.herokuapp.com/quiz/createquiz", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(user));
    xhr.onload = function() {
        console.log(this.responseText)
    }


})