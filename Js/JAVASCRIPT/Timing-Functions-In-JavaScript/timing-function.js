// Timimg Functions In JavaScript
// when we talked about callback functions in javaScript we touched a bit of timing function (look back to see)
// what we would be discussing about is the SetTimeOut method, its actually a predefined function in javascript
// it does some task at a particular given time, if we say we want a function called after 5s a user has clicked a button we use SetTimeOut to archive this.

// we have created a button in the html file
// now going to create a function that would display a pop up messsage, different from the start function in the html file. See below
var message = () => alert(" Welcome Boss!!! "); // the pop up message function decleared with an arrow function
console.log(message());

// now the next statment below is the Start function its decleared with the SetTime method
function Start() {
  id = setTimeout(message, 2000);
} // this the basic syntax of using setTimeout method in javascript

// now there's another concept for wirtting the statement above it's known as Anonymous Functions
// An Anonymous function is a function without a name
// going to write the same statement above but with a different syntax, this concept is know as Anonymous functons see example below

function Start1() {
  id = setTimeout(function () {
    alert(" Good Bye Boss!!! "); // if you note the function and its body was passed as an arugment in the setTime method parenthesis followed by the set time
  }, 2000);
}

// now the next method we would look at is the clearTimeout method
// the clearTimeout method stop's a function before its excuted, and this method work's with a variable see example below
var id = 0; // why the vaule of the variable is set to 0 is because we want to update the vaule of the variable with the vaule provided in the setTimeout method.
var message1 = () => alert(" Welcome Boss!!! "); // the pop up message function decleared with an arrow function
console.log(message1());

function Start2() {
  id = setTimeout(message, 2000); // updating the vaule of the variable id with the setTimeout method vaule
}

// creating a function that stops the other functions before they're excuted
// we archive this with clearTimeout method, all we need do is pass the name of the variable id as an arugment in the method parenthesis see example below

function Stop() {
  clearTimeout(id);
}

function Stop() {
  clearTimeout(id);
}

function Stop() {
  clearTimeout(id);
}

function Stop() { 
  clearTimeout(id);
} // declearing the function thrices so the clearTimeout method can work for the different statements above


// the next method we would be looking at is the setInterval method
// the setInterval method is used to called a function repeatedly after specific interval of time
// it takes two parameters like the setTimeout method, first is the name of the function the other is the time interval see example below

function Start3() {
  id = setInterval(function () {
    alert(" Good Bye Boss!!! ");
  }, 5000);
} // the function is repeated after the set interval it stop when the clearTimeout is called on
