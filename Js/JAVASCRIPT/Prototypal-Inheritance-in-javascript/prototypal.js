// Prototypal Inheritance In Javascript
// Inheritance is an important concept in every object orientated program
// it refers to the procedure through which one class or constructor inherites the properties and methods of another constructor or class.

// creating a prototype
const Employee = {
  // method1
  Post: function () {
    return "A software developer";
  },
  //method2
  changeName: function (name) {
    // passed a perimeter
    this.name = name;
  },
};

// creating an object with the decleared prototype above
var E1 = Object.create(Employee); // used the object.create keyword to create an object then passed the portotype name in the parenthesis
// adding properties to the object
E1.name = "Patrick";
E1.role = "Front-End-Developer";
E1.changeName("Chukuwuzuble"); // changed the date for name property
console.log(E1);

// there's another method and syntax of writting the program above
var E2 = Object.create(Employee, {
  // after the prototype name created an arugment in the parenthesis
  name: { value: "Pato", writable: true }, // we set the property descriptor to a boolean vaule of ture this would allow the method be excuted when its decleared
  role: { value: "Full-Stack-Developer" },
});
// now the syntax works exactly as the same one above we just have a few change
// if you look above we changed the property "name" vaule of the E1 object created
// we were able to do this with the method declared in the prototype above, it won't work if used with this syntax
// we would have to write a few codes that's were the difference comes in between both syntax
E2.changeName("Nnodu"); // for this to work look at the code declared at the arugment created for the name property above.
console.log(E2);
// we set the property descriptor to a boolean vaule of ture this would allow the method be excuted when its decleared, we use the writable keyword then give it a boolean vaule of true

// declearing a constructor function
function Worker(name, id, salary) {
  this.name = name;
  this.id = id;
  this.salary = salary;
}

// creating a method for the constructor function
Worker.prototype.role = function () {
    return (this.name + "" + " is a Programmer" )
}
// creating an object with the constructor function created above
var Pato = new Worker("Patrick", 34243, 50000)
console.log(Pato)
console.log(Pato.role()) // printing the method on console

// creating a new constructor function but would inherite some properties from the "worker" constructor function decleared above
// when you want to inherite properties from another object to the one you're declearing or is already decleared we use the object name you wish to inherite its properties then you use the "call" keyword then followed by a parenthesis in it you declear the "this" keyword followed by the properties name you wish to inherite see example below

function Developer(name, id, salary, language) { // you still need to input the property names in the object you create even if they would be inherited
  Worker.call(this, name, id, salary) // call the object "worker" then passed the properties i want to inherite from the object "worker" used the "this" keyword first. 
  this.language = language // new property for the constructor
}
// you can also inherite a method from the based constructor see below
Developer.prototype = Object.create(Worker.prototype);
// if you look at your console you would notice the developer constructor is not visible, you would need to fix this manually happens when the object inherites properties from a based constructor see below 
Developer.prototype.constructor = Developer
// creating a new object via the constructor just declared above
var Paul = new Developer("Paul", 3531, 19000, "JavaScript") // it inherited the first three properties from the Worker object decleared above
console.log(Paul)
console.log(Paul.role())
// so this is the way to inherite properties from the based constructor to the derived constructor.
// the based constructor when it comes to inheritance from the program written above is the object "Weorker" then the derived is the object "developer".

