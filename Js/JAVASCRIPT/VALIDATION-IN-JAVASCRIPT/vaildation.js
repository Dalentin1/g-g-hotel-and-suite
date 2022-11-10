// VALIDATION IN JAVASCRIPT
// we would going to write a program that would vaildate the username password and age see synatxs below
// first wen going to creat a function that would check if the username and password is the same with the one on the server and lastly user must be 13 above to use our website see example below

function validate() {
  var uname = document.getElementById("uname").value;
  var pass = document.getElementById("pass").value;
  var age = document.getElementById("age").value;
  // the statement above gets what is inputted by the user then stores it in the variable

  // going to write a statement to make sure the user never leaves any of the input box empty
  // we also going to use the trim method this checks if the user inputs multipul spaces, if so it rejects the input
  if (uname.trim() == "" || pass.trim() == "" || age.trim() == "") {
      alert("Missing credentianls");
      return false // used this so the form action doesn't move to the home page if the input boxes are empty and the submit button clicked on
  }
  // creating a predefined input for each boxes using the else if statement
  else if (uname == "Patrick" && pass == "08162030" && age >= 13) {
      alert("Sign-in successful");
      return true
  }
  else if (age < 13) {
      alert("Under aged")
       return false;
  }   
  else {
      alert("Wrong id and password");
       return false;
  }
}
