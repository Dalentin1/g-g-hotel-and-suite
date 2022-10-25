var x,
  y,
  z, // statement
  y = 5;
z = 10;
x = y + z;
console.log(x);

var person = "Hege";
var person = "James";
person = "Gold"; // not safe because of bugs
console.log(person);
document.write(person);

var num = 23 * 400;
console.log(num);

LastName = "Gold"; // upper case camel case
lastName = "Gold"; // lower case camel case

var person = " angel" + " " + "eze"; // CONCATENATION
(age = 40), (tribe = "togo");
console.log(person);
// var person;
// consloe.log(person)

// ASSIGMENT OPP ==
var num1 = 7 % 3;
console.log(num1);

var num2 = 15 % 4;
console.log(num2);

var num3 = num1 + num2 + " " + "TOTAL";
console.log(num3);
//INCREMENT ++
//DECREMENT --

var x = 5;
x--;
var z = x;
console.log(z);

var x,
  x = x + 5;
x = x / y;
console.log(x);

var human = { firstName: "Angel", lastName: "eze", age: 40, eyeColor: "Brown" };
console.log(human);
console.log(typeof human);
console.log(typeof 40);
console.log(typeof 13.44);
console.log(typeof true);

var dress = ["gucci", "chanel"];
console.log(dress[1]);

function cal(stu1, stu2) {
  return stu1 * stu2;
}
let total = cal(2, 3);
console.log(total);

var car = {
  carName: "BMW",
  carModel: "Barbus",
  carYear: 2022,
  carColor: "Gold",
  carHorsePower: "200hp",
  carDescription: function () {
    return this.carName + " " + this.carModel;
  }, // the this keyword point to the owner of the function "which is the name of the object"
};
console.log(car);
console.log(car.carModel); // how to acess a property name
console.log(car.carDescription());
//alert(
 // `Yo man have you seen the new 
 // ${car.carName} car, bro its called the 
 // ${car.carModel} model comes with a crazy 
 // ${car.carHorsePower} monster horse power, 
 // the guy next block got one its dope
 // ${car.carColor} color. 
 // ${car.carDescription()}`
//);

function displayDate() {
  document.getElementById("time").innerHTML = Date();
}
