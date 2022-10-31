/* We've started Quokka for you automatically on this file.
 *
 * To open a new Quokka file:
 *   - Press `Ctrl K, J` to create a new JavaScript File
 *   - Press `Ctrl K, T` to create a new TypeScript File
 *   - Press `Ctrl K, L` to open an interactive sample from:
 *     https://github.com/wallabyjs/interactive-examples
 *
 * To start/restart Quokka on an existing file:
 *   - Press `Ctrl K, Q`
 */

// See the output of console.log right next to your code
const quokka = { isAwesome: true };

console.log(quokka);

// See the value of a variable simply by typing its name
quokka;

// Use sequence expression to compare objects
const wallaby = { "is Quokka's BigBrother": true };

quokka, wallaby;

// Gutter indicators show what code was executed (code coverage)

// Orange indicators means only part of the line was executed
// because JavaScript stops processing after first false value
console.log("partialCoverage", false && true);

// Green indicators means that Quokka executed all statements
// on a line of code
if (false) {
  // White indicators means that a line of code was never
  // executed by Quokka
  console.log("noCoverage", true);
}

// Red indicators show where an error occurred. The error message
// is also shown beside the error
throw new Error("Something went wrong");

// There's a lot more Quokka can do! Visit our docs to learn more:
// - https://quokkajs.com/docs/

// Regular Expressions In JavaScript
// regular experssions are objects in javaScript used to perform pattern matching, or when we want to seacrh or replace something in a string
// you should note that regular expressions are present in all programming languages and the concept are same, the syntax may differ a bit between different languages but the logical behind are always same.
// we would look at the synatx of regular expressions in javasrcipt

var regex = /HeLlO/ig // used the "i" modifiyer to make the regular expression incase sensitive
// used this "g" modifiyer to access the second index also known as the gobal maodifiyer
var str1 = " Hello and Welcome to our Home page. Say Hello if you're new here"

// exec()
var output = regex.exec(str1)
console.log(output)
var output = regex.exec(str1)
console.log(output)

// first we take a variable then before you assign the vaule we use two slashes this way JavaScript knows its an regular expression and the vaule of the variable passed inbetween the slashes
// now we're trying to search the word "Hello" so we would create a new variable then assign a string to it, the word Hello would be inculded in the string
// now there're some important functions used with regular expressions, the first used above is the exec() function
// now this fuction returns an array if the word is present in the string, otherwise it would return null
// the syntax is a bit forward all we need do is to use the exec() function with the variable containing the regular expression then the variable name holding the string would be passed as a parameter to the exec() function
// so what was done here is we created a variable then passed the variable holding the regular expression as the vaule with the exec() function a the variable holding the string vaule in the exec() parenthesis
// regular expressions in javaScript are case sensitive, we can also make them incase sensitive as well all we need do is to use a modifiyer "i". it should be written after the // double slash: var regex = /Hello/i
// now imagine we had two "Hello" in the string we won't be able to print the two index eles we use a modifiyer see syntax above

// test()

// now the next function we would be looking at is the test() function
// this function either returns True/False, what it basically does is it checks for a particular word in a string if the selected word is present then you get a True vaule eles it returns false
var regex1 = /Hello/;
var str2 = " Welcome to our Home page. Say Hello if you're new here";

var output1 = regex1.test(str2)
console.log(output)