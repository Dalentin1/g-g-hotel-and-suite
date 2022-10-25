// Javascript Constructor Function
// In javascript we can use constructors in two different ways we talk about them below
// the first way is the object constructor method the other way of doing so is using the constructor function

// the syntax of using an object constructor method
var obj_name = new Object();
// you have the "var" keyword followed by the name of the object with an equal to sign then the "new" keyword followed by object starts with an capital "O".
// with that syntax above you have created an empty object
// in the syntax the object is the constructor, it creates an instance for the subject then assigns it to the object name, through which we can write and access the property of the object.

var rect2 = new Object();
// this is an empty object and its same as when you declear using the littera object way
// var rect1 = {} after creating an empty object then next step is to add the properties and behaviours to that object. And can also add methods too.
// you use the "this" keyword to access the property of the object in a method
// adding properties to rect2
rect2.length = 5;
rect2.width = 10;

// adding methods to rect2
rect2.getarea = function () {
  return this.length * this.width;
};
rect2.getperimeter = function () {
  return 2 * this.length + 2 * this.width;
};

document.write(
  "<h2>" + "The lenght of the rectangle is" + rect2.length + "</h2>"
);
document.write(
  "<h2>" + "The width of the rectangle is" + rect2.width + "</h2>"
);
document.write(
  "<h2>" + "The area of the rectangle is" + rect2.getarea() + "</h2>"
);
document.write(
  "<h2>" + "The perimeter of the rectangle is" + rect2.getperimeter() + "</h2>"
);

// if you notice the object constructor method is just slighty different from the littera method of declearing an object
// the main difference is at the inital part of the code in the litteral way we used curly brackets and use parenthesis in object constructor method.
// both of the methods are very easy to use and faster to excute than the constructor function method

// There's another way to create objects its called constructor function method, this way of creating an object is quite different from the other two methods.
// its used when we work with different instances of an object.
// it works this way we have a template we can access that template using differtent object.
// if you want to declear more than one object an you don't want to write thw code for each object you can use this method when you have more than one object

// this the syntax of the constructor function
function rect3(height, breath) {
  this.height = height;
  this.breath = breath;
  this.getarea1 = function () {
    return height * breath;
  };
  this.getperimeter = function () {
    return 2 * height + 2 * breath;
  };
}

// it starts with the function keyword then the name of the function then we pass the properties as parameters
// then we have the body of the function we use "this" keyword followed by a dot (.) then the property name followed by the equals to sign followed by the property name.
// so all you need do is to pass vaules each time you declear an objection with the constructor function declared

// creating an object using the constructor function template above we only need to pass vaules when each object is decleared
// when you declear the object name you use the "new" keyword the the name of the constructor function then pass vaules in the parenthesis.
var r1 = new rect3(5, 25);
document.write("<h1>" + r1.height + "</h1>");
document.write("<h1>" + r1.breath + "</h1>");
document.write(
  "<h1>" + "The area of the rectangle is" + r1.getarea1() + "</h1>"
);
document.write(
  "<h1>" + "The parameter of the rectangle is" + r1.getperimeter() + "</h1>"
);

// declaring another object you can declare as much as you like you only need to change the vaule
var r2 = new rect3(30, 76)
document.write("<h1>" + r2.height + "</h1>");
document.write("<h1>" + r2.breath + "</h1>");
document.write(
  "<h1>" + "The area of the rectangle is" + r2.getarea1() + "</h1>"
);
document.write(
  "<h1>" + "The parameter of the rectangle is" + r2.getperimeter() + "</h1>"
);
