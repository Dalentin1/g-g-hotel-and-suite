// Promises In JavaScript
// When we talk about promise you know it means a vow to do something, in our everyday life we get promises from people or make this promise to other people
// and we know that promises can go only two ways its either its fulfilled or resolved or we can its failied or rejected
// there's another term between the two terms decleared above its pending, pending reffers to time in which the system works on the promise.
// We can say a promise is an object which would produce vaules sometimes it either gives us a vaule or an arrays
// see below for syntax for promises in javascript

var prom = new Promise(function (resolve, reject) {
  // if you look at the program here we created a new object the used the callback function and note the names decleared in the parenthesis can be change to whatever you want.
  // using the if eles conditional statement to call any of the two functions
  var drive = true; // would determine if the promise is resloved or rejected
  if (drive ) { // stating if the var drive has its vaule set true then the function below would be excuted 
    resolve("Yes"); // passing the parameter vaule for the resolve parameter decleared above
  } else {
    reject("No"); // else the reject function would be excuted
  }
});

// the next part of this program is to excute this promise to that we have to use two methods
// we use the promise name followed by the data operator the "then" method it is called when the promise is resloved or fulfilled, rejection of promises has its own syntax called "catch" see below
// we then use a callback function in this method then pass the resloved vaule in the arugment followed by it's body.
prom.then(function (resolve) {
    console.log(resolve + " the user knows how to drive. "); // if you notice we also had to pass the name of the reslove function in the console.log this way its vaule its dispalyed
  }).catch(function (reject) {
    // used the catch method for the rejection part
    console.log(reject + " the user knows how to drive. ");
  });

// In the example below show a more complex example of promises
// you would see that we're working with three different functions, lets say we need to learn promises in JavaScript but you have to learn about functions and callback function before getting to promises
// so you won't be allowed to move to the next topic eles you have a good knowledge of the present topic
// so we have created three function in which the current function depends on the previous function
// so each functions decleared returns a promise

var functions = function () {
  return new Promise(function (resolve, reject) {
    resolve(" Learnt Functions ");
  });
};

var callback = function (message) { // passed the argument in the parenthesis so i could acces the vaule of the function when i print the arugment name could be an alphabet a dollar sign or an under scor
  return new Promise(function (resolve, reject) {
    resolve(message + " Learnt Callback Functions ");
  });
};

var promises = function (message) {
  return new Promise(function (resolve, reject) {
    resolve(message +  " Good to go for Promises in JavaScript");
  });
};

// to display the result of the statement stated above
// we called the name of the first function "functions" then on resloving we called the function "callback"
// the did the same thing for the callback function on resolving it calls the promise function then displays the consloe.log


functions().then(function(result){
    return callback(result) // its a parameter "result" it gets the messages from the promises above
}).then(function (result) {
    return promises(result)
}).then(function (result) {
    console.log("Good to go : " + result) // then when you concatenate the method result with whatever vaule you might want to add it displays all the messages from each promise checking if all is resloved 
})
