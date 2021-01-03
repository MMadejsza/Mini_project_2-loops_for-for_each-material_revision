let btn = document.querySelector("button");
btn.style.fontSize = "20px";
btn.addEventListener("click", btnAction);

let fnSize = "10px";
let liArray = document.querySelectorAll("li");
liArray.forEach(element => {
    element.style.fontSize = fnSize;
});


function btnAction() {
    console.log('clicked');

    liArray.forEach(element => {
        element.style.display = "block";
        element.style.fontSize += 1;
    });
}