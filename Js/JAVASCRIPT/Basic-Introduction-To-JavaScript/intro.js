// WElCOME TO JAVASCRIPT

//JavaScript Programs
//A computer program is a list of "instructions" to be "executed" by a computer.
//In a programming language, these programming instructions are called statements.
//A JavaScript program is a list of programming statements.

// JavaScript Statements
// JavaScript statements are composed of:
// Values, Operators, Expressions, Keywords, and Comments.

// Semicolons ;
// Semicolons separate JavaScript statements.
// Add a semicolon at the end of each executable statement
// N.B When statments are separated by semicolons, multiple statements can be wirtten on one line are allowed, On the web, you might see examples without semicolons.
// Ending statements with semicolon is not required, but highly recommended.

// JavaScript White Space
// JavaScript ignores multiple spaces. You can add white space to your script to make it more readable.
// A good practice is to put spaces around operators ( = + - * / ).

// JavaScript Line Length and Line Breaks
// For best readability, programmers often like to avoid code lines longer than 80 characters.
// If a JavaScript statement does not fit on one line, the best place to break it is after an operator.

// JavaScript Code Blocks
// JavaScript statements can be grouped together in code blocks, inside curly brackets {...}.
// The purpose of code blocks is to define statements to be executed together.
// One place you will find statements grouped together in blocks, is in JavaScript functions.

//FUNCTIONS
document.write(9 * 9);
// This function, it could be use to display anyting on the webpage, it also does calculations
console.log((9 * 9) / 4);
// This work almost like document.write but it doesn't display result on the web page it is mostly used the target and display on variable when writing long programmes best used to debug codes

var a = 5;
var b = 6;
console.log("the vaule of a+b", a + b);

//Variables
// They are name storage that the program can manipulate.
// A variable is a vaule that can change according to condition. They refer to memory blocks inside the computer where we can store informations. And can be used countless in the program.
// or we can say In a programming language, variables are used to store data values

var A = 15;
var B = 6;
var c = A + B;
document.write("the vaule of c is", c);

// There are two other ways to declare a variable (let,const)
// While naming a variable you must start it with a letter, underscore or dollar sign. You can't use any sign expect ubderscore or dollar, You can't also use a number or using reseverd keyword's like class, and note javascript variable are case sensitive going against any of this rules would get you an error
// If you declare a variable and dont assign a vaule to it by default it becomes "Undefined" e.g:
// we used the equals to operator to assign vaules
var busStop;
document.write(busStop);
var wetNight = "rainning at the moment";
document.write(wetNight);

// Let
// Difference between let and var is this : let is not accessable outside the block in which its declared in.
{
    let sundayVibe = "News";
    document.write(sundayVibe);
}
//document.write(sundayVibe) //shows undefined because the variable name was declared using let you can't access it outside the block
// Due to it limited scope let variable are used when there're limited use only, mostly in loops.
// It would also not allow you redeclare any variable unliike var
var manCave = "Herny Danger"
document.write(manCave)
var manCave = "Pipper"
document.write(manCave)
//let won't alllow you do this
// let womanCave = "Herny Danger";
// document.write(manCave);
// var womanCave = "Pipper";
// document.write(manCave); you get an error if you do this

//Const
// Const are mostly used when they're vaules we don't want to change, and it would never change basically. it defines a constant reference to a vaule not a constant vaule. We can't change the main vaule but can change the properties of the vaules.
const h = 5, g = 7;
const z = h * g;
document.write(z)
// But when using const you aren't allowed to updateb the vaule of an already declared variable. You are allowed to do this using the let and var keyword
// const x = 20;
// document.write(x)

//DATATYPE
// Data type is an important concept in every programming langauge, To work on any variable you should know know its type.
// It refers to the type of data been stored in a variable, every programming language has its own unique data type
// Types of Data Types in Javascript.. They're divided into two primitive data type and non-primitive data type.
// Primitive data type are stored in stack while non-primitive data type are stored in hea*. You can also say primitive data type are based data type while non-primitive data type are object data type.
// Primitive data type are divided into 5 categories: numbers, boolean,string,undefined and null
// Non-primitive data type are complex they're divided into two parts arrays and objects.


// PRIMITIVE DATATYPE
// The three basic data type in JavaScript: Number, String and boolean. 
var a = 16; // number
var b = "Hello word"; // string
var flag = true; // boolean
var p; // Undefined
// We would use an operator now to view the type od data type we're working on.
document.write(typeof(a))
document.write(typeof(b))
document.write(typeof(flag))
document.write(typeof (p))
// Null data type there's a difference between the null data type and the undefined data type, undefined means lack of vaule while null is absence of any vaule.
var num = null; // null
document.write(typeof (num))

// JavaScript Expressions
// An expression is a combination of values, variables, and operators, which computes to a value.
// The computation is called an evaluation.
// For example, 5 * 10 evaluates to 50
5 * 10;
// Expressions can also contain variable values:
x * 10;

// The values can be of various types, such as numbers and strings.
// For example, "John" + " " + "Doe", evaluates to "John Doe":
"John" + " " + "Doe"

// we should also keep this in mind JavaScript can display data in different ways
// JavaScript Display Possibilities
// JavaScript can "display" data in different ways: see below

// Writing into an HTML element, using "innerHTML".
// Writing into the HTML output using "document.write()".
// Writing into an alert box, using "window.alert()".
// Writing into the browser console, "using console.log()".

// Using innerHTML
// To access an HTML element, JavaScript can use the document.getElementById(id) method.
// The id attribute defines the HTML element. The innerHTML property defines the HTML content see example below
document.getElementById("demo").innerHTML = 5 + 6;

// Using document.write()
// For testing purposes, it is convenient to use document.write()
document.write(9 * 9);
// N.B Using document.write() after an HTML document is loaded, will delete all existing HTML look at the commented program below
// <!DOCTYPE html>
// <html>
// <body>
// <h1>My First Web Page</h1>
// <p>My first paragraph.</p>
// <button type="button" onclick="document.write(5 + 6)">Try it</button>
// </body>
// </html>
// The document.write() method should only be used for testing.

// Using console.log()
// For debugging purposes, you can use the console.log() method to display data.