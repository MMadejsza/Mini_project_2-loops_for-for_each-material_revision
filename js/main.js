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

let fnSize2 = 10;
let btnSecond = document.querySelector(".second");
btnSecond.style.fontSize2 = "20px";
btnSecond.addEventListener("click", addList);

function addList() {
    let liArray2 = document.querySelectorAll("ul li");
    for (let i = 1; i <= 5; i++) {
        const li = createTag("li", "class", "liItem");
        li.innerText = `Element${i}`;
        const uList = document.querySelector(".list");
        uList.appendChild(li);
        li.style.fontSize = `${fnSize2++}px`;
    }
    liArray2.forEach(element => {
        element.style.display = "block";
    });

}

function createTag(tag, attribute, value) {
    let element = document.createElement(tag);
    element.setAttribute(attribute, value);
    return element;
}