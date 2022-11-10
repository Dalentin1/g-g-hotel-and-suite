// EMAIL VALIDATION IN JAVASCRIPT
// now we're going to create a function and use the if else statement to check if the pattern in the regular expression matches with the email inputted

function validate() {
  var email = document.getElementById("mail").value;
  var regex = /^([a-z A-Z 0-9 \. _]+)@([a-z A-Z]+).([a-z A-Z]{2,6})(.[a-z]{2,6})?$/;

// the regular expression pattern above is to check for a type of email
// we should put this in mind first an email id divided into four parts
// the first part consist of the name, the name can consist of alphabets, number, digits in some cases dot and underscore
// the next part is the @ symbol every email address has this part in them
// the third part is the name of domain it could be the name of any organzation
// the final part is the extension which come's after the dot
// an extension could be .com .in .net .co.za etc
// now with this said we have an idea of how to state a regular expression pattern that would check for this parts in the user input
// so what we did was take three parenthesis then we have to input the @ symbol and the dot symbol inbetween them just like the email
// remember an email consist of four parts so the first parenthesis would be from the character range block for the name part after that come's the @ symbol followed by another parenthesis for the organization part after that followed by the dot symbol then the last parenthesis would be for the extension part, in each parenthesis character range blocks would be placed in them, then ranges set for them each
// the first character range block was to check for small alphabets from a-z then the next range to be checked in the block was for upper case alphabets from A-Z the also set a range to check for numbers from 0-9, we also have to add a range for special symbols to the pattern, remember they could be part of a name to do this since we have a dot as part of the character in the name we can't just input it like that the system would treat it as a meta character so before we input the special symbol we have to use a back slash / followed by whatever symbol
// the part we did was to defined the length of the name pattern, there're two ways this can be done either by adding curly brace after the name range block: {3,20} the statement in the comment means the name pattern must not be less than three or more than twenty, the other way we could do this is to add the + operator after the character range block
// you should note when the + operator is used the user is allowed to input any length of character for the pattern, so since we can't give an specifi number of the user email name we used the + operator to get whatever length of character that maybe inputted
// the next symbol is the @ symbol followed by the company name block in this block we only define alphabet character since the company name won't possible have a digit in it, also used the + operator so it gets whatever length the character might be
// the next block is for the extension we know that this can only alphabets not consisting less than 6 characters sometimes have a dot symbol between them
// what we did was decleared the pattern for the alphabets upper and lower case the decleared the length of the pattern
// the finally outside of the three parenthesis before and after there is carat meta character ^ and a dollar meta character $
// what the carat meta character does is it checks the regular experssion pattern, and see if the pattern in the first block is same with the user inputted pattern if its correct it moves on until it get's to the dollar meta character what this does is check the ending pattern of the user inputted data and see if it's same with the one in the regular expression
// now in some case we can get extensions having dot and other character with them for example 2go.co.za now to sort this we have to use the optional meta character
// what we did was to declear another parenthesis then in it add a dot representin the dot after the first extension the followed by a range of lower case character then also added the lenghth of the pattern block the used the optional meta character
// the optional meta character states the block of pattern in the regular expression mustn't be necessary input for if it is it would be taken still

  

  if (email.trim() == "") {
    alert("Please enter a vaild email id");
  } else if (regex.test(email)) {
    alert("Email submitted successfully");
  } else {
    alert("Wrong email id");
  }
}
 

