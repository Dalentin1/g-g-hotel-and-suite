//OBJECTS
// Object are the most powerful and used datatypes in javascript.

//Data for Audi
var car_manufacturer = "Audi";
var car_model = "Q7";
var car_price = 50000;

function allWheelDrive() {
  // states the capability of the car
  document.write("This car comes with Quattro all-wheel drive");
}

allWheelDrive();

// you could declear this way for a entity and its properties, but imagine you were working with more than a hundred entities this method would be very slow because you need to declear properties for each entity.
// to tackle this problem we introduce the concept of objects.
// this objects helps us to bundle the properties and attributes of an  particular entity.

//Syntax for object in javascript

// there're few way to declear objects in javascript first is

// Littera object way see example below

// littera object way syntax
// you can see the difference here when we declear a variable we use the equal to operator "=" to assign vaule but it's diffrerent when it comes to objects instead of the equals to operator we use the coloum to assign properties in object and use a comma when you have more properties to add to an object.
// you could also add a function in an object, whenever a function is called inside an object or class its know as a method.
// when it comes to method the syntax is a bit different see example below

//Entity all properties are decleared inside the object using the curly brace.

var car = {
  car_manufacturer: "Audi",
  car_model: "Q7",
  price: 50000,

  // syntax of a method
  allwheeldrive: function () {
    return "This car is with four wheel drive";
  },
};

console.log(car)

// to access the object we need to use the object name with the data operator and property name.

document.write("<h1>" + car.car_manufacturer + "</h1>"); // we used the object name with the data operator (.) and the object property (car_manufacture).

// by using the data operator we can access any property of the entity not only the property but also the method in the object.

document.write("<h1>" + car.allwheeldrive() + "</h1>"); // accessing the method in the object

// we can also use the document.write inside the method in an object and you could still access that method from outside see example below.

var phone = {
  phone_manufacturer: "Tecno",
  phone_model: "Camon19",
  price: 1200,

  // syntax of a method
  phoneFunctions: function () {
    document.write(
      "This phone come's with an ultra slim display abnd 8gb ram <br>"
    );
  },
};
console.log(phone)

phone.phoneFunctions(); // calling the method from outside the object

// Instead of declearing objects each time take if you had 50 or more objects to declear, we can do this with another ways of declearing objects.
// we use object constructor its a bit different from other object based programming languages.
// Javascript also supports the concepts of classes and object, as we know javascript is an object orienteted scripting language because it doesn't support the concept of classes and object fully.
// But no its different javascript supports the concepts od classes and objects.

// Creating more than one object with an constructor function

// inside the parameters the properties listed in the parenthesis are called arugements
function cars(car_manufacture, car_model, price) {
  // inside the body of the object we use the "this" key word, it refers to the object it belongs to.
  this.car_manufacture = car_manufacture;
  this.car_model = car_model;
  this.price = price;

  this.allwheeldrive = function () {
    document.write("This car comes with Quattro all-wheel drive <br>");
  };
}
// that's a complete template of a constructor function, it could be used to create different object's.
// now you could access the constructor function by creating an object, you already have the properties decleared in the constructor function you only need to assign the vaules when you create each object see example below.

// Object 1
var c1 = new cars("Audi", "Q7", 50000);
// you can also access the method in the constructor function with the new object created see the syntax below
c1.allwheeldrive();
console.log(c1);

// Object 2
var c2 = new cars("BMW", "X7", 40000);
// you can print the vaule of any property
document.write(c2.car_manufacture + "<br>");
document.write(c2.car_model + "<br>");
document.write(c2.price);
console.log(c2);

// any of the data type can be converted to objects if we define them with the new key word, expect from the null and undefined data type.
// we have some pre-defined objects too in javascript we have the math object, the date object and the regular experssion are also taken as objects.
// A lot of things are objects in javascript, we use objects in DOM manipulations.

//syntax of using different data types as objects in javascript
var str1 = new String();
console.log(str1);
// this is the complete syntax on how to use data types as objects in javascript, it changes the data type to an object when its used with the "new" keyword the var name becomes the object.
document.write("<h1>" + typeof str1 + "</h1>");
// you can use the type of operator to see if the data type is an object or a string.

// Now let's take an instance where we have written a long line of programs containing objects the we find out we had missed out some properties from some the object we declared.
// instead of going back you could update any object properties from anywhere in the code
// this is the syntax on how to update an object all you need do is call the name of the object we intend to update a property to then add the name of the property then assign a vaule see below for examples
// you can also update the method of an object see below for examples

phone.phone_color = "Gold"; // updating a property for the phone object
document.write("<h1>" + phone.phone_color + "</h1>");

phone.newTest = function () {
  // updating a method for the phone object
  return "New phone functions black and grey";
};
document.write("<h1>" + phone.newTest() + "</h1>");

// we can also delete object properties by using the "delete" keyword
// here is the syntax for it you need to call the object name followed by a dot the you declare the name of the desire property or method you want to delete see below for example

delete car.car_model;
document.write("<h1>" + car.car_model + "</h1>"); // deleting a property from an object

delete phone.newTest;
document.write("<h1>" + phone.newTest + "</h1>"); // deleting a method from an object

// you can also change the data type of an object property on the fly
// the data type of the price property in the car object is a number but we can change that see below

car.price = "fifty thousand usd";
document.write("<h1>" +car.price+ "</h1>");
