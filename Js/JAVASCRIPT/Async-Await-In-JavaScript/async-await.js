// Async-Await In JavaScript
//  Async-await works with promises in JavaScript its a syntatical sugar rapped around promises in JavaScript
// its basically makes it easier to work with promises in JavaScript
// now we would write some statements in promises then see what way async-await can come in see example below
function makeOrder(Coffee) {
    return new Promise((resolve, reject) => { // N.B:  used the arrow function " => " here instead if doing this: * return new Promise(function(resolve, reject) { }) *
        console.log(" Making a request for a " + Coffee);
        if (Coffee == "Black coffee") { // if there's a change or different input from the coffee selected an error message would be displayed
            resolve(" Here is your coffee, Have a nice day")
        }
        else {
            reject(" Sorry! We serve Black coffee only.") // pops up when there's an error or when the promise is rejected
        }
    }) // used the IFelse Statement with the promises 
}

function processOrder(order) {
    return new Promise((resolve, reject) => {
        console.log("Processing Order")
        resolve(" Extra Infromation " + order)
    })
}

// the two functions each returns a promise the makeOrder function returns a promise and it wouold reslove it if the user selects Black coffee otherwise it would be rejected if the user picks a different type of coffee
// the other function processOrder would always resolve
// now we're going to call the statements using promises then we would change the same code using async-await

// makeOrder("Black coffee").then(order => {
//     console.log("Order has been received")
//     return processOrder(order)
// }).then(processedOrder => {
//     console.log(processedOrder)
// }).catch(error => {
//     console.log(error)
// })
// so what we basically did here was to call the makeOrder function then passed an arugment as Black coffee to make the promise resolved
// the used the .then method so after the first promise is resloved then created a order function which display a console message and return the second promise stated above
// then created a new function processedOrder that aslo displays a console message
// then finally used the .catch method the created a function that would display a console message if the promise is rejected


// now this is the same statement above with the same syntax but we would use async-await to call the promises below see example

function placeOrder(chocolate) {
  return new Promise((resolve, reject) => {
    console.log(" Making a request for a " + chocolate);
    if (chocolate == "Hot chocolate") {
      resolve(" Here is your chocolate, Have a nice day");
    } else {
      reject(" Sorry! We serve Hot chocolate only."); 
    }
  }); 
}

function processOrder(order) {
  return new Promise((resolve, reject) => {
    console.log("Processing Order");
    resolve(" Extra Infromation " + order);
  });
}

// syntax of async-await
async function user1() {
    try {
        var order = await placeOrder("Hot chocolate")
        console.log("Order has ben received")
        var processedOrder = await processOrder(order) // passed the vaule of the variable order as an arugumnet to processOrder promise checks if the vaule is resloved before moving to the next statement
        console.log(processedOrder) // then passed the vaule of the variable processedOrder to the console
    } catch (error) {
        console.log(error)
    }
}

user1() // calling the function

// now this is the exact statment above the only difference is the syntax which we called them both
// now when using async-await we should keep this in mind we need functions to use the syntax
// now before we declare the function for async-await we have to use the keyword "async" this tell javaScript how the function would work
// now i have to call both functions in the async function decleared
// to do this we have to declear a local variable then use the await keyword to tell the computer to hold on with excuting the statement until the placeOrder function is excuted the computer comes back to pick the vaule of the excuted statement and passes it to the other variable the order is pass as an arugument in
// we use the try-catch statement with the async so we could tackle when a promise isn't resloved
// the try statement we put a block of statement if the try statement telling the computer to try and see if the statement is reslove it proceeds if not it moves to the catch block then display the error or reject text

