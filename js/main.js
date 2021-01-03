let btn = document.querySelector("button");
btn.style.fontSize = "20px";
btn.addEventListener("click", btnAction);

let fnSize = 10;
let liArray = document.querySelectorAll("li");

function btnAction() {
    liArray.forEach(element => {
        element.style.display = "block";
        element.style.fontSize = `${fnSize}px`;
    });
    fnSize += 1;
}