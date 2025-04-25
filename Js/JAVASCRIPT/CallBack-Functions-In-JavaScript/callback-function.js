// CallBack Functions In JavaScript
// We already know that function are block of code that is used to perform a specific tasks
// In Javascript we can use functions as objects at the same time we pass object to functions as parameters
// we can also pass function in another function

// this is also the syntax of a call back function in javascript and its vaild
// Callback function is a function passed to another function as an argument and that particular function would be excuted later in the program
function abc(call) {
  call();
}

// creating a function
function one() {
  console.log("Function 1");
}

function two() {
  console.log("Function 2");
}

function three() {
  console.log("Function 3");
}

setTimeout(one, 2000) // using the setTimeout keyword to call functions, this would excute the function after a specific period of time, the number 2000 is the time given before the function is called its calculated im millisecond so 2000 is same as 2sec.
three();
two();
// Note that JavaScript would excute the functions in the order they're called

// Now let's consider a case where we have only two functions decleared
// we would call the first function with a setTime out, then also want to find a way where the second function can only be excuted after the first function has been excuted
// but this conditions can't be carried out the way planned to archive this we need use the Callback function concept see example below

// working with the callback function
function person(brother, person2) { // passed the person2 function as an arugment in the person function
  setTimeout(function () { // using setTimeout key would be excute the conditions 
    console.log("My brother's name is " + brother);
    person2(); // called the other function in the setTimeout body
  }, 3000);
  
}

function person2() {
    console.log("My name is Paul")
}
person("Patrick", person2) // passed the function "person2" as an argument in the "person" call function this is important else you would get a syntax error and this can be called anywhere in then program




// this is a shortcut syntax if you don't want to use the callback function
function six() {
    setTimeout(function () {
        console.log("Function 6"); 
        seven(); // this is a shortcut in excuting the conditions above but its not the callback funtion
    }, 3000) // this is another way to use the setTimeout keyword
  
}

function seven() {
  console.log("Function 7");
}

six();
