// Prototype In Javascript

console.log("Welcome Patrick");

// creating an object using the object littera method
var abc = {
  Name: "Patrick",
  Subject: "Javascript",
  Country: "Nigeria",
};
console.log(abc);

// whenever we create an object using the object littera method then the object is created from object.prototype
// when you open your console on your browser and you find your object when you click on it you would see a property with the name prototype when its clicked on you will see a list of methods already present in the object.prototype
// and all the methods are already pre-defined, or all javascript object inherit properties and methods from a prototype.

// creating an object with a constructor function
function xyz(name, subject, country) {
  this.name = name;
  this.subject = subject;
  this.country = country;
}

var x1 = new xyz("Chukuwuzubule", "Phyton", "Germany");
console.log(x1);

// we can also add methods to the constructor function without writing in the function block, we use the "prototype" keyword to update that, see the syntax below
// you need to call the constructor function you need to add the method to the prototype keyword followed by the method name see example below
xyz.prototype.getName = function () {
  return this.name;
};
xyz.prototype.getSubject = function () {
  return this.subject;
};
console.log(x1.getName());
console.log(x1.getSubject());

//creating another object
var x2 = new xyz("Onyeka", "Photo-editing", "Las-vegas");
console.log(x2);
console.log(x2.getName());
console.log(x2.getSubject());

// When we use the object constructor function we can't add a new property to an existing object
// but there's a method to work around it, to add a new property to an object it should be added to the constructor function or we could use the "prototype" keyword to add properties.
// syntax for adding new property to an constructor function using the prototype keyword see below
xyz.prototype.grades = "A";
console.log(x2.grades);

// so basically we can use prototype to add properties to existing object constructor functions.

