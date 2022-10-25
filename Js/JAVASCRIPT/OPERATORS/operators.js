// OPERATORS
// In any programming language an operator is a symbol that tell's the computer that it needs to do some specifiy tasks.
// There're different operators for differnet purposes
// In JavaScript operators are divided into eight categories: Arithmetic operator, Assignment operator, String operator, Conditional operator, Logical operator, Bitwise opreator, Comparsion operator and Type Of operator.

//ARITHMETIC OPERATORS
//  + = Addition
//  - = Subtraction
//  * = Multiplication
//  / = Division
//  % = Modulus
//  ++ = Increament
//  -- = Decrement

var x = 611;
var y = 19;
// To add space to your result while using document.write use this (\n)
document.write("Addition\n", x + y);
document.write("\nSubtraction\n", x - y);
document.write("\nMultiplication\n", x * y);
document.write("\nDivision\n", x / y); // While this gives you the cosent.
document.write("\nModulus\n", x % y); // The displays the remender as your answer
var z = 10;
document.write("\nIncrement\n", ++z);
document.write("\nDecrement\n", --z);

// ASSIGNMENT OPERATORS
// Assignment operators are used to assign vaules to diiferent javascript variables.

// =; x = y; x = y;
// +=; x += y; x = x + y;
// -=; x -= y; x = x - y;
// *=; x *= y; x = x * y;
// /=; x /= y; x = x / y;
// %=; x %= y; x = x % y;
// ^=; x ^= y; x = x ^ y;
// |=; x |= y; x = x | y;
// **=; x **= y; x = x ** y;

var a = 10;
var b = 5; // the equal to assignment operator is used to assign vaule to a variable in javascript

var b12 = 25;
b12 += 23; // this operator can also be used to update the vaule of a variable its is also the same thing as b12 = 25 + 23
document.write("\nThe vaule of b12 is\n", b12);

var b13 = 25;
b13 -= 23; // this operator can also be used to update the vaule of a variable its is also the same thing as b13 = 25 - 23
document.write("\nThe vaule of b13 is\n", b13);

var b14 = 25;
b14 *= 23; // this operator can also be used to update the vaule of a variable its is also the same thing as b14 = 25 * 23
document.write("\nThe vaule of b14 is\n", b14);

var b15 = 25;
b15 /= 23; // this operator is used to update the vaule of a variable its is also the same thing as b13 = 25 - 23
document.write("\nThe vaule of b15 is\n", b15);

var b16 = 25;
b16 %= 23; // this operator is used to update the vaule of a variable its is also the same thing as b13 = 25 - 23
document.write("\nThe vaule of b16 is\n", b16);

// STRING OPERATORS

// + = Concantenation
// += = Same as assignment operator

// + concatenation string operator this is used to join two strings together.
// += this string operator does the same function as the assignment operator

var strn1 = "WELCOME";
var strn2 = "PADDY";
document.write(strn1 + strn2); // if you notice at the output you would notice there's no space between the two variables.
document.write(strn1 + " " + strn2); // when you concatenate and what to add a space between the strings you concatenated use this syntax.

var strn3 = "WElCOME";
strn3 += " " + "USER 1"; // you can also concatenate when using this operator
document.write("Strn3 say's\n", strn3);

// N.B: Associativity it refer's to the direction in which the entire expression is evaulated, either form right to left or the other way

var d = 12;
var b = 8;
var e = 5;
var result = d + b + e;
document.write("<h1>Value of result is \n " + result + "\nNew way</h1>");
// the addition operator has an associativity from left to right.

// CONDITIONAL OPERATOR
// A conditional operator assigns a vaule to a variable based on a certain condition.

// Syntax
// variableName = (condition) ? vaule1 : vaule2
// var voter = (age<18) ? "Too young" : "Old enough"

var x = 30;
var y = x > 50 ? "true" : "false";
// document.write(y);

// N.B: Condition operators has three differnet parts, it has a condition and two vaules.

// LOGICAL OPERATORS
// Logical operators are used to determine the logic between two variables or vaules. We use to check if multiplu conditions are true or false.

// && = and; it can be used to determine two variables and would only return true if both conditions are true, if not it displays false.
// || = or; for this operator it can display true if any of the conditions are true, or it displays false if they're both incorrect
// !  = not; For this reverse is the case it displays true when the conditions are false and return false when the condition is true,

let jj = 7;
let bb = 4;
document.write(jj < 10 && bb > 1);
document.write(jj == 5 || bb == 5);
document.write(!(jj == bb));

// COMPARSION OPERATORS
// We use comparsion operators to compare two vaules, they are also used to check true/false
// they're the easiest to use in programming

// == Equals to
// === Equal vaule and data type
// != Not equal to
// !== Not equal vaule or data type
// > Greater than
// < Less than
// >= Greater than or equals to
// <= Less than or equals to

var p = 10;
document.write(p == 8);
document.write("<br>");

document.write(p === 8);
document.write("<br>");

document.write(p != 8);
document.write("<br>");

document.write(p !== 8);
document.write("<br>");

document.write(p > 8);
document.write("<br>");

document.write(p < 8);
document.write("<br>");

document.write(p >= 8);
document.write("<br>");

document.write(p <= 8);
document.write("<br>");


// TYPE OF OPERATOR
// Type of operator is used to display the kind of data type when working on a particular variable.

var a = 16;
var b = "Hello word";
var flag = true;
var p;
document.write(typeof a);
document.write("<br>");

document.write(typeof b);
document.write("<br>");

document.write(typeof flag);
document.write("<br>");

document.write(typeof p);
document.write("<br>");

var num = null;
document.write(typeof num);


// BITWISE OPERATOR
// Bitwise operators works on 32bits numbers and decimal nunber.

    // & AND
    // | OR
    // ~NOT
    // ^ XOR

var dc = 5
var pc = 1

document.write(dc&pc)
document.write("<br>")

document.write(dc|pc)
document.write("<br>")

document.write(~dc)
document.write("<br>")

document.write(dc^pc)
document.write("<br>")
    

    
