// Modules
// modules can be defined as Encapsulated code (only sharing minimum)
// Node uses Common JS library and every file is a module by default
// we're going to write a bit of statement here to understand the concept of modules and why we have to use them

// const secret = "SUPER SECERT";
// const john = "john";
// const peter = "peter";

// const sayHi = (name) => {
//     console.log(`Hello there ${name}`)
// }

// so what we actually want to do is put the statement in different files and still access them here or anywhere throughout the application see syntax
// so what modules does is it allows us share a particular code from a differnet file instead of getting all the statememt in the code
// what was done above is we moved the variables to a differnet file same with the function then shared the variables from their files
// we can now access them from their files.
// to access the modules from the other file we have to use the require function it could also be passed as a variabkle see syntax below

const names = require("./2-names");
const sayHi = require("./3-function");
const data = require("./4-alternative-modules-exports");
require("./5-mind-grenade")
console.log(names);
console.log(data);
console.log(sayHi);


sayHi("susan");
sayHi(names.john);
sayHi(names.peter);

// there's another syntax to do this see below

const {john, peter} = require("./2-names");
const sayHello = require("./3-function");
console.log(sayHello);

sayHello("susan");
sayHello(john);
sayHello(peter);