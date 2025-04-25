const colors = [
  "linear-gradient(#FC5E55, #FA4083)",
  "linear-gradient(70deg, rgb(132, 0, 255), #97bd28, #65f031)",
  "linear-gradient(80deg, #e2bdb7, #FA4083, #2ac792)", // very cool
  "linear-gradient(-80deg, #c02553, #FA4083, rgb(132, 0, 255))",
  "linear-gradient(#FC5E55, #FA4083)",
  "linear-gradient(80deg, #f28d84, rgb(197, 9, 214), #edca3d)", //cool
  "linear-gradient(80deg, rgba(133,122,200), rgb(197, 9, 214), #edca3d)",
  "linear-gradient(40deg, rgb(132, 0, 255), rgb(197, 9, 214), rgb(231, 64, 161))",
  "linear-gradient(360deg,#fbcb92, #5897bd, #dc32bc)",
  "linear-gradient(-90deg,#858da9, #fa748d, #39c4f6)",
  "linear-gradient(190deg,#eae5e9, #131f58, #ee8e07)",
  "linear-gradient(20deg,#cc4b96, #01b9e5, #14beda)",
  "linear-gradient(-160deg,#adf28e, #7f426c, #b5872b)",
  "linear-gradient(#dda39b, #9c1dfa, #0febee)",
  "linear-gradient(310deg, #a7de05, #c71c9a, #3ccfa5)",
  "linear-gradient(#294e69, #5cabbb, #db477a)",
  "linear-gradient(#e4bf6c, #c8c3bc, #c91a63)",
  "linear-gradient(80deg,#0eec16, #28856a, #c184ac)",
  "linear-gradient(-80deg,#0f53af, #e477b7, #f8e1d4)",
  "linear-gradient(#fbb180, #6648b4, #edc76d)",
  "linear-gradient(260deg,#e6ec2b, #1cdebb, #752c7c)",
  "linear-gradient(60deg,#bdceaa, #ae1f87, #5f553e)",
  "linear-gradient(240deg,#1de0df, #d3a04e, #b3ce14)",
  "linear-gradient(-220deg,#ec2506, #74ede4, #4fb959)",
  "linear-gradient(190deg,#71cd8e, #c048bf, #c20c1c)",
  "linear-gradient(280deg,#4da0ec, #0c0510, #6fabae)",
  "linear-gradient(250deg,#1a4edc, #521219, #1f17bd)",
  "linear-gradient(280deg,#ccdafa, #fe927a, #0eb5c3)",
  "linear-gradient(-260deg,#3c947d, #afe9ef, #4b4ea2)",
  "linear-gradient(-230deg,#eead9e, #ac1f3f, #c83a42)",
  "linear-gradient(-40deg,#1306e4, #2fbd2d, #0aa36e)",
  "linear-gradient(120deg,#e26fba, #daae0f, #a8c5ce)",
  "linear-gradient(350deg,#a1be55, #f11d4e, #018fcc)",
  "linear-gradient(120deg,#1ea7a6, #139c64, #b0fbc2)",
  "linear-gradient(260deg,#8daeb3, #c97af1, #ffdd98)",
  "linear-gradient(210deg,#e4529e, #9e1457, #fc99ee)",
  "linear-gradient(220deg,#2a3eda, #dfdf73, #db102c)",
  "linear-gradient(80deg,#c07eb7, #a1286f, #850ffd)",
  "linear-gradient(-60deg,#9fa1c8, #ebfae2, #116124)",
  "linear-gradient(350deg,#33cc82, #e4b93b, #7e2526)",
  "linear-gradient(#810c5c, #8adbaa, #2b0819)",
  "linear-gradient(60deg,#ca7ca8, #69accf, #5f16dc)",
  "linear-gradient(80deg,#fdd8e6, #fbebee, #bc0eb6)",
  "linear-gradient(#fe1c2f, #25e6cd, #fdc7ba)",
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
var modal1 = document.querySelector(".modal-container");
btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.background = colors[randomNumber];
  color.textContent = colors[randomNumber];
  modal1.style.background = colors[randomNumber];
});
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
