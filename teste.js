let divClass = document.querySelectorAll(".div-class");
let result = document.getElementById("result");
let selected = document.getElementById("selected");

for (let div of divClass) {
    div.addEventListener("click", function() {
        selected.style.display = "block"
        result.textContent = div.id;
    });
}