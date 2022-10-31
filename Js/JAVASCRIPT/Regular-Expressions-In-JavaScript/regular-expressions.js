// Regular Expressions In JavaScript
// regular experssions are objects in javaScript used to perform pattern matching, or when we want to seacrh or replace something in a string
// you should note that regular expressions are present in all programming languages and the concept are same, the syntax may differ a bit between different languages but the logical behind are always same.
// we would look at the synatx of regular expressions in javasrcipt

var regex = /HeLlO/gi; // used the "i" modifier to make the regular expression incase sensitive
// used this "g" modifier to access the second index also known as the gobal maodifiyer
var str1 = " Hello and Welcome to our Home page. Say Hello if you're new here";

// exec()

var output = regex.exec(str1);
console.log(output);
var output = regex.exec(str1);
console.log(output);

// first we take a variable then before you assign the vaule we use two slashes this way JavaScript knows its an regular expression and the vaule of the variable passed inbetween the slashes
// now we're trying to search the word "Hello" so we would create a new variable then assign a string to it, the word Hello would be inculded in the string
// now there're some important methods used with regular expressions, the first used above is the exec() method
// now this fuction returns an array if the word is present in the string, otherwise it would return null
// the syntax is a bit forward all we need do is to use the exec() method with the variable containing the regular expression then the variable name holding the string would be passed as a parameter to the exec() method
// so what was done here is we created a variable then passed the variable holding the regular expression as the vaule with the exec() method a the variable holding the string vaule in the exec() parenthesis
// regular expressions in javaScript are case sensitive, we can also make them incase sensitive as well all we need do is to use a modifier "i". it should be written after the // double slash: var regex = /Hello/i
// now imagine we had two "Hello" in the string we won't be able to print the two index eles we use a modifier see syntax above

// test()

// now the next method we would be looking at is the test() method
// this method either returns True/False, what it basically does is it checks for a particular word in a string if the selected word is present then you get a True vaule eles it returns false
var regex1 = /Hello/;
var str2 = " Welcome to our Home page. Say Hello if you're new here";

var output1 = regex1.test(str2);
console.log(output1);
// N.B you should note when using the test method if by an case you missed an alphabet when writing the word to be check in the string provided, the test method would still return true this because it checks for every alphabet in the string so if meant to write " Hello " and did this instead " ello " it would still return a true vaule bacause ello can be found in the word

// match()

// the match method returns an array of results otherwise null, the syntax of this method is different from the ones above, because we would pass the regular expression as a parameter to the method and the string would be used with method
// see syntax below

var regex2 = /Hello/g;
var str3 =
  " Hello Welcome to our Home page. Say Hello if you're new here " +
  " Hello we're glad you're here with us  ";
var output2 = str3.match(regex2);
console.log(output2);

// N.B unlike when you use the "g" modifier with the exec method to get the second index in the string and had to also declear the console.log twice to get the index
// with the match method its different once the gobal modifier is used with the regular expression if there are more than three word in the string you would get an array containing the regular expression

// replace()
// this the last method we would be looking at its an important method when it comes to regular expression its used to replace vaules in the string either to the first matching word or to all the matching words
// when you use the gobal modifier all the words would be replaced otherwise the first matching word would be replaced see syntax below

var regex3 = /Hello/;
var str4 =
  " Hello Welcome to our Home page. Say Hello if you're new here " +
  " Hello we're glad you're here with us  ";
var output3 = str4.replace(regex3, "Hi");
console.log(output3);

// now the statement above was used without the gobal modifier now the statement below was used with the gobal modifier at the regular expression see below

var regex4 = /Hello/g;
var str5 =
  " Hello Welcome to our Home page. Say Hello if you're new here " +
  " Hello we're glad you're here with us  ";
var output4 = str5.replace(regex4, "Hi");
console.log(output4);




