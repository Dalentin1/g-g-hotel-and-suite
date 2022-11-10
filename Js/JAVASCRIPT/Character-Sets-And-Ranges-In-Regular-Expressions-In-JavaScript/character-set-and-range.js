// Character Sets And Ranges In Regular Expressions
// Today we would be looking at how basic validation works in JavaScript
// we can say characters in lame man language reffers to numbers and alphabet
// now we can use one character or a group of characters when working with regular expression in JavaScript
// now we would look at the syntax to inculde character set in JavaScript first
// [abc] 

// now we're using the character set in a regular expression see syntax below
var regex = /[abc]def/
var str1 = "This string contains bdef"
var output = regex.test(str1)
console.log(output)

// now the statement above would return ture on your console this is because the character set was used in the regular expression
// a break down of what that meant is, in the regular expression the test method was meant to look for three characters in  the string which are def, but if you took note at the str1 vaule you would notice the vaule there is adef
// this is because the character set was used in the regular expression so any of the three characters can be allowed to be in fornt of the characters decleared in the regular expression you would get a true or the index where the characters are in the string
// if its declared after the characters decleared in the regular expression you would get a false or null result
// you should also note when character set is used with regular expression in JavaScript is the character right before the character decleared in the regular expression


// now let's look at character range, imagine a suitation where you wanted to add characters from a-z instead of the declearing all the characters like we did in the character set we use character range see syntax below
// you use this character - in between the characters you wish to set your range to
var regex1 = /[a-z]def/;
var str2 = "This string contains xdef";
var output1 = regex1.test(str2);
console.log(output1);


// now imagine you have set your character range and along you decide that you wanted some certain characters to be exculed from the range input
// we have a way to sort this its called carat operator in the character block with the characters we need to take out see syntax below
var regex2 = /[^def]def/;
var str3 = "This string contains edef"; // what ever character is used with apart from def would give you a true or index of the selected character in the string
var output2 = regex2.test(str3);
console.log(output2);

// now we would be looking at basic validation in JavaScript
// we would create a html form that would get information and from the user it would validate if the user is registered to the firm
// going to state a function below

function employee() {
  var empid = document.getElementById("eid").value;
  // invoked a variable empid then passed the document in  the html document to it the use the .vaule operator this is to get what ever character is inputed on the form the store the vaule in the emid variable

  var check = /[DE]253[10-99]/i; // used the incase sensitive modifier here so it becomes incase sensetive when the alphabet D/E is used
  // now we used the regular expression to check for some special characters
  // lets say we want every employee id to either start with this two characters DE the have this numeric characters 253 in between every employee id
  // so firstly we used the character set with the regular expression declearing the set vaule to be either D/E the and the regular expression this nubmeric character 235 as a constant numeric character in every employee id
  // then lastly also added two numeric characters range in the regular expression, a range of two numeric characters as the last vaules of the employee id

  if (check.test(empid)) {
    alert("Vaild employee ID");
  } else {
    alert("Invaild employee ID");
  }
  // the next part was we had to validate the Id entered by the employee with the IF-Else Statement followed with the test function nested inside two parenthesis
  // so its the check variable housing the regular expression followed with the test method and the empid variable passed in the test method parenthesis
  // so if the Id entered is vaild you would get an window alert saying "Valid employee ID" else "Invalid employee ID"
}