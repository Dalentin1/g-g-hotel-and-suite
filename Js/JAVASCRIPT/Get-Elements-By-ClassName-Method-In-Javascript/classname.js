// Get ELements By ClassName Menthod In JavaScript

// creating a new function 
function Fun1() {
    var x = document.getElementsByClassName("cls1") // what this does is to complie all the html collection of elements having the same class name passed in the parameter
    x[0].style.fontStyle = "italic"
    x[1].style.color = "blue"
    x[2].style.fontWeight = "bolder"
}

// using the for loop to access all the elements at once
function Fun2() {
    var x = document.getElementsByClassName("cls1");
    for (var i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "green"
    }
}

// so we have dicuss ways of getting elements so lets indicate when to use each method
// starting with the id method we use it when we want to access a single element and we have to provide a unqine is to that element so it can be accessed
// so if we intend to work on more than one element we could use the tagname method or the class name method
// the tagname method is useful when we want to access elements with the same tagname the restriction in this method is we can only access tagname at one time but we can't access two different of tagname, this is were we consider the classname method
// but with classname method we can access more than one elements at same time and the elements could be different, see the html file for this program to see more examples regaurding the classname method.
