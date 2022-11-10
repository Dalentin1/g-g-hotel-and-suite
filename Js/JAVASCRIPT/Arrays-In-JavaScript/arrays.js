// So we know they're two types of datatypes in javascript (primitive datatype and non-primitive datatype). Arrays comes under non-primitive datatype
// An Array is a composition of elements stored in contiguos memory locations.

var car1 = "Honda";
var car2 = "Audi";
var car3 = "BMW";
document.write("<h1>" + car1 + "</h1>");
document.write("<h1>" + car2 + "</h1>");
document.write("<h1>" + car3 + "</h1>");
document.write("<br>");


// The example above is good, but imagine you have over 500 variables you are working with if you follow this method it would work yes! but would take more time you could declear all the elements in on variable using arrays.
var car = ["Honda", "Audi", "BMW"];
document.write("<h1>" + car + "</h1>");
document.write("<br>");
// So we know an array is a variable that can hold more that one datatypes.
// It's possible tp print one of the elements by calling it's index number. In arrays the element listed have index number its start's from 0,  so the first element is 0 then the next is 1.
// this an example. all you need do is place a block bracket in front of the array name then call the number of the element you want printed.

document.write("<h1>" + car[1] + "</h1>");
document.write("<br>");


// you can also use for loop to print the results on different lines.
for (var i = 0; i < 3; i++){
    document.write("<h1>" + car[i] + "</h1>"); // use the i in the block qoute next to the array name so each data type could be printed in different lines
    document.write("<br>");
}

// There's another syntaxs to declear arrays
var fruits = new Array("Apples", "Mangoes", "Pineapples")
 for (var i = 0; i < 3; i++) {
     document.write("<h1>" + fruits[i] + "</h1>");
     document.write("<br>");
 }

 // Arrays in javascript has dyanamic nature, meanning we can add or remove elements from an array.
 // When you update an array you use a method called push, here is the syntax
 // When you also what to remove an elememt we use the pop method, and note the pop method removes the last element whenever its decleared.
 // there're also so method we would talk briefly about
 // the Sort method this arrange the elements in the arrays in alphabetiacl order.
 // the Lenght method this is used to find the lenght of the array.
 // so instead of using the number of the index when declearing a loop you could use the lenght method, view examples below.
// You can update the element in an array with any datatype

var fruits = new Array("Apples", "Mangoes", "Pineapples");
fruits.push("Orange", "Cherry"); // the push snytax comes immediately after the decleared array same with the pop method.
 fruits.pop() // removes an element each time its decleared.
 for (var i = 0; i < 5; i++) {
     document.write("<h1>" + fruits[i] + "</h1>");
     document.write("<br>");
}
 // you would also have to update the index number in the loop section it goes from 3 to 4 depending on the number of element added.

 // Using the lenght method
 var mandy = new Array("Apples", "Mangoes", "Pineapples");
 mandy.push("Orange", "Cherry","Grapes"); // the push snytax comes immediately after the decleared array same with the pop method.
mandy.pop(); // removes an element each time its decleared.
 mandy.push(50) // you could update with any data type.
 for (var i = 0; i < mandy.length; i++) { // used the lenght method here, so i don't need to change the index vaule each time i update the array.
   document.write("<h1>" + mandy[i] + "</h1>");
}
 

