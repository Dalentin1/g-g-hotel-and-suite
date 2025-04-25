const hex = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F", "a", "b", "c", "d", "e", "f",];
const hex1 = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F", "a", "b", "c", "d", "e", "f",];
const hex2 = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F", "a", "b", "c", "d", "e", "f",];
const deg = [ "10deg", "20deg", "30deg", "40deg", "50deg", "60deg", "70deg", "80deg", "90deg", "100deg", "120deg", "130deg", "140deg", "150deg", "160deg", "170deg", "180deg", "190deg", "200deg", "210deg", "220deg", "230deg", "240deg", "250deg", "260deg", "270deg", "280deg", "290deg", "300deg", "310deg", "320deg", "330deg", "340deg", "350deg", "360deg",];
const degMinus = [ "-10deg", "-20deg", "-30deg", "-40deg", "-50deg", "-60deg", "-70deg", "-80deg", "-90deg", "-100deg", "-120deg", "-130deg", "-140deg", "-150deg", "-160deg", "-170deg", "-180deg", "-190deg", "-200deg", "-210deg", "-220deg", "-230deg", "-240deg", "-250deg", "-260deg", "-270deg", "-280deg", "-290deg", "-300deg", "-310deg", "-320deg", "-330deg", "-340deg", "-350deg", "-360deg",];
const btn1 = document.getElementById("btn-deg-minus");
const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn-deg");
const color = document.querySelector(".color");
var modal1 = document.querySelector(".modal-container");
btn.addEventListener("click", function () {
  let hexTag = "#";
  let hexTag1 = "#";
  let hexTag2 = "#";
  for (let i = 0; i < 6; i++) {
    hexTag += hex[getRandomNumber()];
    hexTag1 += hex1[getRandomNumber1()];
    hexTag2 += hex2[getRandomNumber2()];
  }
  let text = `linear-gradient(${hexTag1}, ${hexTag}, ${hexTag2})`;
  color.textContent = text;
  document.body.style.background = text;
  modal1.style.background = text;
});
btn1.addEventListener("click", function () {
    let hexTag = "#";
    let hexTag1 = "#";
    let hexTag2 = "#";
    let degreeMinus = degMinus[getRandomDegMinus()];
    for (let i = 0; i < 6; i++) {
      hexTag += hex[getRandomNumber()];
      hexTag1 += hex1[getRandomNumber1()];
      hexTag2 += hex2[getRandomNumber2()];
    }
    let text = `linear-gradient(${hexTag1}, ${hexTag}, ${hexTag2})`;
    if (text = `linear-gradient(${hexTag1}, ${hexTag}, ${hexTag2})`) {

        text = `linear-gradient(${degreeMinus},${hexTag1}, ${hexTag}, ${hexTag2})`;
        color.textContent = text;
      document.body.style.background = text;
      modal1.style.background = text ;
    }
})
btn2.addEventListener("click", function () {
    let hexTag = "#";
    let hexTag1 = "#";
    let hexTag2 = "#";
    let degree = deg[getRandomDeg()];
    for (let i = 0; i < 6; i++) {
      hexTag += hex[getRandomNumber()];
      hexTag1 += hex1[getRandomNumber1()];
      hexTag2 += hex2[getRandomNumber2()];
    }
    let text = `linear-gradient(${hexTag1}, ${hexTag}, ${hexTag2})`;
    if (text = `linear-gradient(${hexTag1}, ${hexTag}, ${hexTag2})`) {

        text = `linear-gradient(${degree},${hexTag1}, ${hexTag}, ${hexTag2})`;
        color.textContent = text;
        document.body.style.background = text;
        modal1.style.background = text;
    }
})
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
function getRandomNumber1() {
  return Math.floor(Math.random() * hex1.length);
}
function getRandomNumber2() {
  return Math.floor(Math.random() * hex2.length);
}
function getRandomDeg() {
  return Math.floor(Math.random() * deg.length);
}
function getRandomDegMinus() {
  return Math.floor(Math.random() * degMinus.length);
}
