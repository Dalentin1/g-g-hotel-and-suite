const colors = [
  "linear-gradient(#FC5E55, #FA4083)",
  "linear-gradient(70deg, rgb(132, 0, 255), #97bd28, #65f031)",
  "linear-gradient(80deg, #e2bdb7, #FA4083, #2ac792)", // very cool
  "linear-gradient(-80deg, #c02553, #FA4083, rgb(132, 0, 255))",
  "linear-gradient(#FC5E55, #FA4083)",
  "linear-gradient(80deg, #f28d84, rgb(197, 9, 214), #edca3d)", //cool
  "linear-gradient(80deg, rgba(133,122,200), rgb(197, 9, 214), #edca3d)",
  "linear-gradient(40deg, rgb(132, 0, 255), rgb(197, 9, 214), rgb(231, 64, 161))",
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.background = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
