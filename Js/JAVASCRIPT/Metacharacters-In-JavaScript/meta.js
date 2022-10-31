// Metacharacters In JavaScript
// we have some predefined characters in javaScript that helps searching easy we talked about regular expression we saw how to use methods to pick and replace things in the string vaule
// this characters are used within the expressions they can be used to check the avaliablity of words in a string we would look at some of them below

// Dot metacharacter
// the first we would look at is the dot character
// the dot character can be used to replace alphabets in the regular expression and you won't get an error from the system
// the dot replaces the missing alphabet in the expression, but not it can only be used for a limited time can be used for a single character to slove this with use the * character see note below

let regex = /We.come/;
let str1 = "Welcome to our store, we Welcome Family and Friends !!! ";
let output = regex.test(str1);
console.log(output);

// we're using this statement to check the index number of the word in the regular expression
let test = regex.exec(str1);
console.log(test);

// * metacharacter
// * character this is used to put more than one character in an expression, see syntax below

let regex1 = /W*e/;
let str2 = "WelcoLoremipsumme to our store, we Welcome Family and Friends !!! "; // if you note there're some lorem text inbetween the Welcome word it still returns true and the exec method says its in the first index when you use the * character the only important this is the first and last alphabet
let output1 = regex1.test(str2);
console.log(output1);

// we're using this statement to check the index number of the word in the regular expression
let test1 = regex1.exec(str2);
console.log(test1);

// ^ metacharacter
// The next character we would looking at is different from the two above, it works upon whole stream see syntax below
// when the ^ character is used in a regular expression what happens is the program checks if the word in the regular expression matches the first word in the string, it doesn't matter if the word appears along the string statement, see syntax below

let regex2 = /^Welcome/;
let str3 = "Welcome to our store, we Welcome Family and Friends !!! "; // if you note there're some lorem text inbetween the Welcome word it still returns true and the exec method says its in the first index when you use the * character the only important this is the first and last alphabet
let output2 = regex2.test(str3);
console.log(output2);

// we're using this statement to check the index number of the word in the regular expression
let test2 = regex2.exec(str3);
console.log(test2);
// this statement here would give you a true vaule and an array with welcome at 0 index of the string array
// the statement below would give you a different result if you not the word welcome was at some part of the array but we still got a false and null vaule
// this is because of the ^ character it checks if the word in the regular expression is the startng word for the string

let regex3 = /^Welcome/;
let str4 = " to our store, we Welcome Family and Friends !!! "; // if you note there're some lorem text inbetween the Welcome word it still returns true and the exec method says its in the first index when you use the * character the only important this is the first and last alphabet
let output3 = regex3.test(str4);
console.log(output3);

let test3 = regex3.exec(str4);
console.log(test3);

// Dollar $ metacharacter
// The next meta character does almost the same thing as the one above on difference is it checks if the word in the regular expression is the same as the last word in the string
// its know as the $ dollar character its placed at the end of the regular expression see syntax below

let regex4 = /store$/;
let str5 = "Welcome to our store, Hope you have a loving shopping at our store"; // if you note there're some lorem text inbetween the Welcome word it still returns true and the exec method says its in the first index when you use the * character the only important this is the first and last alphabet
let output4 = regex4.test(str5);
console.log(output4);

let test4 = regex4.exec(str5);
console.log(test4);

// the statement above would give you a true vaule and the index of the store character in the string
// N.B you would get a different result if store wasn't the last word in the string, this is because we used the dollar $ character in the regular expression see example 2 below

let regex5 = /store$/;
let str6 =
  "Welcome to our store, Hope you have a loving shopping at our store enjoy!!!";
let output5 = regex5.test(str6);
console.log(output5);

let test5 = regex5.exec(str6);
console.log(test5);

// N.B: you should note in the string spaces also counts as characters in regular expression

// Optional metacharacter
// The last character we would look at is the optional metacharacter
// the question mark ? symbol representes this character, and the function states that any character before this symbol is treated as optional
// which means it doesnt matter if the character is present in the string or not see example below

let regex6 = /Welc?ome?/;
// technically the letter c and e doesn't need to be present in the string because of the optional character before them
// we should also note that those alphabets can be replaced with another character eles it would return a null and false vaule, the e alphabet can be changed if its the last character in the expression  see a syntax below
let str7 =
  "Welome to our store, Hope you have a loving shopping at our store enjoy";
let output6 = regex6.test(str7);
console.log(output6);

let test6 = regex6.exec(str7);
console.log(test6);

// a differnet example
let regex7 = /Welc?ome?/;
let str8 =
  "Welhome to our store, Hope you have a loving shopping at our store enjoy";
let output7 = regex7.test(str8);
console.log(output7);

let test7 = regex7.exec(str8);
console.log(test7);
