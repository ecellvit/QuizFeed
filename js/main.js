const inputs = document.querySelectorAll(".input");


function adds() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
}

function rem() {
    let parent = this.parentNode.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}


inputs.forEach(input => {
    input.addEventListener("focus", adds);
    input.addEventListener("blur", rem);
});