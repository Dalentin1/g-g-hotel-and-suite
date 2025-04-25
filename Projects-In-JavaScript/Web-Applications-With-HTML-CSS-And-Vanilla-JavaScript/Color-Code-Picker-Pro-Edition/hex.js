const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F", "a", "b", "c", "d", "e", "f"]
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
var modal1 = document.querySelector(".modal-container");
btn.addEventListener("click", function () {
    let hexTag = '#'
    for (let i = 0; i < 6; i++) {
        hexTag += hex[getRandomNumber()]
    }
    color.textContent = hexTag
    document.body.style.background = hexTag
    modal1.style.background = hexTag;
})
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}