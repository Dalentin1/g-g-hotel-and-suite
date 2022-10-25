// JAVASCRIPT FUNCTIONS
// Functions in javascripts are blocks of  codes used to excute a specific task.
// it has a particular name and that name can be reused countless in the program.
// with the help of functions you don't always have to repeat codes it could be written in a block and be acccessed whenever needed
// a function has three parts ( function-declearation, function-defination, function-calling)

var x = 10,
  y = 5,
    total = x + y;
document.write(total)

function sum() { // function decleareation
    var x = 10,
      y = 5, // funtion defination
      total = x + y;
    document.write(total);
}
sum() // function callling
 
// A function can also have parmeters in the sense that you don't need to declear the cariable x,y
function dum(x,y) { // declearing the variables in the funtion parameter
    var total = x + y;
    document.write(total);
}
dum(4, 8) // assigning vaules to the variables decleared in the function

// A function can also return a vaule
 function pum(x,y) {
   var chip = x + y;
     return chip; // but you would have to make the function name a variable to get the vaule sent by the return function.
 }
var output = pum(35, 15);

 document.write(output); // if this was written outside the block you won't a display on your screen you would have to return function