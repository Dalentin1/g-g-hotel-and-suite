// this is the syntax of declearing an object in a littera way, it has the object name and the properties of the object with two mehods in the object
// we use the "this" keyword to refer to a property in an object

var rect1 = {
  length: 5,
  width: 10,
  getarea: function () {
    return this.length * this.width;
  },
  getparameter: function () {
    return 2 * this.length + 2 * this.width;
  },
};

document.write(
  "<h2>" + "The lenght of the rectangle is" + rect1.length + "</h2>"
);
document.write(
  "<h2>" + "The width of the rectangle is" + rect1.width + "</h2>"
);
document.write(
  "<h2>" + "The area of the rectangle is" + rect1.getarea() + "</h2>"
);
document.write(
  "<h2>" + "The parameter of the rectangle is" + rect1.getparameter() + "</h2>"
);
