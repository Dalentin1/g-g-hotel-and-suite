// setting the initial count for the application
let count = 0;
// select vaule and buttons
// need to get the vaule id and the buttons in the html file
// used the querySelector all to pick every button element with a class of btn
const value = document.querySelector("#value");
// the querySelector returns the first element that is a descendant of node that matches selectors.
const btns = document.querySelectorAll(".btn");
// the querySeletorAll returns all element descendants of node that match selectors.
// so all elements with the class of btn would be selected

// we're going to use the forEach method to access the nodes in the  btns variable above
// then pass a callback function that would be executed for each and every node item in the variable see statment below
// when i pass a parameter to the callback function i get a list of all the elements present in the node
// a parameter can be called whatever you want
// also passed an event listener in the callback function for each node element
// in the event listener declared below we passed a callbeck function
// then passed the event object 'e' as a parameter to the callback function declared in the event listener
// what the event object does is it allows us to check on which of the node button the user clicks on
// we can get the object clicked by the user on the console
// all we need is passed the event object with the property currentTarget
// what the currentTarget does is it returns the object whose event listener's callback is currently being invoked.
// we can also get the classList of the object by adding the classList property to the event object
// the next thing we need to do is pass the classList of every object the user clicks on to a variable
// after that we now declear an if statment declearing if the variable which we passed the object classList to
// so what we want to do is set a statement if the variable contains a particular classList see statement below
// after that we have to change the textContent of the value element and replace it with whatever text in the count variable see statement below
// the next step we're going to take is declear an if else statement let us change the color of the variale value
// so we want if the number is 1 above we want the color of the number on our web application to green
// if its 0 then we want a different color if its -1 down we also want a different color see statement below

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    console.log(e.currentTarget.classList);
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count == 0) {
      value.style.color = "#0a0c20";
    }
    value.textContent = count;
  });
  console.log(btn);
});
