// Short-hand Character Class
// we going to look at short-hand character class and how we can use them with regular expression
// we could use character class to over come using character set and ranges
// the statement below is a string with a regular expression to check for certain characters in the string see below

var regex = /\d321/
var str1 = "Users phone number is 9876543210"
// now using the exec method to find the regular expression in the string
var output = regex.exec(str1)
console.log(output)

// the short-hand character class used in the regular expression above is used to get the numeric character in front of the pattern decleared in the regular expression
// the short-hand character class \d gets the numeric character in front of the regular expression its used with if there's a number in front of the character decleared in the regular expression you would get a null/ false result depending on the method used with the expression
// so instead of getting the character 321 in the output you would aslo get the numeric character before the pattern in the regular expression so it would 4321
// now if we want find all the numeric characters in the string you would have to add a + operator after the short-hand character class see syntax below

var regex1 = /\d+321\d/;
var str2 = "Users phone number is 9876543210";
var output1 = regex1.exec(str2);
console.log(output1);
// N.B the + operator won't return all the numeric characters in the string once it encouters any alphabet in between the numeric character just the numeric characters before the alphabet would be display the rest would be overlooked
// if you also note on the console only the numbers 987654321 was displayed this is because we didn't decleared that in the regular expression to do that inculde the \d short-hand character class at the end of the expression see example above


// the next we would be looking at is almost the same with the short-hand character class we just looked at
// it does the opposite of the short-hand character class while \d is to find the numeric characters in front of the regular expression
// this looks for a non digit pattern before the regular expression, the only difference in the d the short hand character is \D see syntax below
// so basically it would return any thing in fornt of the regular expression as long as its not a numeric character

var regex2 = /\D+321/;
var str3 = "Users phone number is 987654a$!3210";
var output2 = regex2.exec(str3);
console.log(output2);

// the next character class we would be looking at is the wordly short-hand character class \w
// it's used in place of any character that can be an alphabet, number or an underscore sign
// we can use this short-hand character class over the \d or \D short-hand character class if we are unsure of the character present berfore the pattern see synatx below

var regex3 = /\w+ber/;
var str4 = "Users phone number is 987654a$!3210";
var output3 = regex3.exec(str4);
console.log(output3);

// now the regular expression above would return the characters in the regular expression pattern with the character before the, this is because we used the short-hand character class
// if the + operator is used with this short-hand character class in the expression the it would return the whole alphabet before the regular expression pattern in the string until it enconters a space or a character other than an alphabet or an underscore
// you should note it won't return any character after the characters in the regular expression
// like we had the inverse short-hand character class for the digits \d \D we also have the inverse short-hand character class for worldy short-hand character class
// what it actually does is it returns ture for ever character expect for an alphabet, number or an underscore sign see syntax below

var regex4 = /\W+ber/;
var str5 = "Users phone num!@#$$%^&*()(*&&^*(+ber is 987654a$!3210";
var output4 = regex4.exec(str5);
console.log(output4);
// now the satement above would return the index of the signs before the expression pattern vaule on your console this is because the inverse wordly short-hand character class won't return true if there's an alphabet, number or underscore sign before the regular expression pattern
// used the + operator to get the remaining signs before the regular expression

// the next short-hand character class is an easy one it work for white spaces only
// it would return true or give us the index of the expression if only there's a space before the regular expression pattern see syntax below

var regex4 = /\s+phone/;
var str5 = "Users                   phone number is 987654a$!3210";
var output4 = regex4.exec(str5);
console.log(output4);
// N.B so the index number that would be returned on your console is for the space before the regular expression pattern
// we can also use the + operator to return all the spaces before the regular expression pattern
// there's also an inverse class for this character what it does is it returns true for everything in the string expect when a space is encountered in the string see syntax below

var regex5 = /\S+phone/;
var str6 = "Users                   y&phone number is 987654a$!3210"; // so whatever character is inculded to the pattern you change your result
var output5 = regex5.exec(str6);
console.log(output5);

// N:B while it encounters a space in the execution of the program if there a character of sign is inculded before the regular expressio n pattern you would get a true result or the index number of the pattern see example above

