// IFELSE CONDITIONER STATEMENT
// the ifelse conditioner statement is used whenever we work with conditions. It either can be a single condition or different conditions as the case maybe.

// A PROGRAM WITH A SINGlE CONDITION
var x = 50;
if (x < 10) {
  document.write("the vaule of x is less than 10");
  document.write("<br>");
} else {
  document.write("the vaule of x is greater than 10");
  document.write("<br>");
}

var ph = 5;
if (ph % 2 == 0) {
  document.write("Even number");
  document.write("<br>");
} else {
  document.write("Odd number");
  document.write("<br>");
}

// A PROGRAM WITH DIFFERENT CONDITIONS
var y = 10;
if (y < 10) {
  document.write("the vaule of y is less than 10"); // first condition
  document.write("<br>");
} else if ((y = 10)) {
  document.write("the vaule of y is equals to 10"); /// second condition
  document.write("<br>");
} else {
  document.write("the vaule of y is greater than 10"); // third condition
  document.write("<br>");
}

var ui = 15;
if (ui > 0) {
  document.write("Positive number");
  document.write("<br>");
} else if (ui < 0) {
  document.write("Negtive number");
  document.write("<br>");
} else {
  document.write("Zero");
  document.write("<br>");
}

var numberCheck = 10;
if (numberCheck > 0) {
  if (numberCheck % 2 == 0) {
    document.write("Positive and Even");
    document.write("<br>");
  } else {
    document.write("Positive and Odd");
    document.write("<br>");
  }
} else if (numberCheck < 0) {
  if (numberCheck % 2 == 0) {
    document.write("Negative and Even");
    document.write("<br>");
  } else {
    document.write("Negative and Odd");
    document.write("<br>");
  }
} else {
  document.write("Number is zero");
  document.write("<br>");
}

var methodTwo = 8;
if (methodTwo > 0 && methodTwo % 2 == 0) {
  document.write("Number is Positive and Even");
  document.write("<br>");
} else if (methodTwo > 0 && methodTwo % 2 != 0) {
  document.write("Number is Positive and Odd");
  document.write("<br>");
} else if (methodTwo < 0 && methodTwo % 2 == 0) {
  document.write("Number is Negative and Even");
  document.write("<br>");
} else if (methodTwo > 0 && methodTwo % 2 != 0) {
  document.write("Number is Negative and Odd");
  document.write("<br>");
}
else {
    document.write("Number is Zero");
    document.write("<br>");
}
