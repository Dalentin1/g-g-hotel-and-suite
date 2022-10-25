// Arrow functions in JavaScipt
// arrow functions are just a change in the syntax of declearing and defining a functions

// syntax of a function with different parameters see below

function func1(a, b) {
  return a + b;
} // so the statement here is a function with two parameter and its meant to return the sum of both parameters when the function is called and numbers passed as arugments in the parenthesis
console.log(func1(15, 76)); // calling the function

// now going to change the syntax of the statement above this concept is known as arrow functions see below
var arrow1 = (a, b) => a + b;
// now when declearing an arrow function you declear a variable then pass the parameters in parenthesis
// what actually makes the variable a function is the arrow  " => " its an equal sign followed with the greater than sign
// if you also note the synatx is in a line short and clean
console.log(arrow1(17, 796)); // calling the arrow function

// creating another function with no parameter

function func2() {
  console.log("Welcome Boss");
}
func2();

// the same statement above only written in different syntax
var arrow2 = () => console.log("Goodbye Boss");
arrow2();
 
// N.B you don't need a parenthesis if you only have one parameter see example below

var arrow3 = newName => console.log("Welcome working late " + newName)
arrow3("Patrick")