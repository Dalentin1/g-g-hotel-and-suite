// SCOPE OF VARIABLES
// A variable is a container that stores data vaules that vaules can be changed any time.
// Scope refers to the life span of a variable in a program.
// there are two types of variables in javascript (local-variable and gobal-variables).

// Gobal Variables
// this mean the variable life span is accessible throughout the whole program.
// and they could be accessed even directly inside a function.
// any variable that is decleared without using a var key work is automatically a gobal variable.

var a = 5;
document.write("<h1>" + a + "</h1>"); // you can access this variable at any point in this program
document.write("<h1>" + a + "</h1>");

// Local Variable
// when a variable is decleared inside a function its known as a local variable for that particular function.
// And can only be accessed in that very function. This is because immediately the variable is excuted it get's destroyed.

function myFunction() {
  var x = 10;
  document.write(x);
  document.write("<h1>" + a + "</h1>"); // accessing a gobal variable from inside a function block
}
myFunction();

function yFunction() {
  var x = 100;
    document.write(x);
    document.write("<br>");
    
  var1 = 50; // this is a gobla variable its decleared without the var key word and can be access outside a block a function if its declared in it. 
}
yFunction();
document.write(var1);