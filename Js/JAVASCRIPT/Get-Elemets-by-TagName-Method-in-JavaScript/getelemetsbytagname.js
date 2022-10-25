// Get Elements By Tag Name In JavaScript
// this method is used to access a bunch of elemets with the same tagname see example below

// function for the submit button
function Fun2() {
  var x = document.getElementsByTagName("div"); // with this syntax we could access elements with the same tagnames in the HTML file

  // we can also access the elements with the same tag name differently, we use the variable name the use called the index number of the element just like we did in arrays see example below
  x[0].style.fontFamily = "Courier New";
  x[1].style.color = "blue";
  x[2].style.fontStyle = "italic";
  x[3].style.backgroundColor = "red";
}

// there is an important thing we should keep in mind you can not make changes to all the elements at once eles you specifiy each element array then you can make your changes
  //  x.style.fontFamily = "Courier New" so basically the code you are looking at would give you an error display on your console
  //  but there's a solution to this problem we could use the "for loop" then we could access the elements at once see example below

function Fun1() {
    var y = document.getElementsByTagName("section")
    for (var i = 0; i < y.length; i++) {
        y[i].style.backgroundColor = "yellow"
    }
}