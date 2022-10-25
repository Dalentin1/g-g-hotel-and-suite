// Error Handling In JavaScript
// Errors are something we get some times when working on a program
// there're different types of errors we could get when working on a program errors like " SyntaxError, ReferenceError and LogicalError "
// now SyntaxErrors are errors that a user can't control the only to fix a SyntaxError is to check and change the syntax used in the program
// ReferenceError are errors encountered by the computer during the execution of the program, take for instance when a function is decleared lets say when calling the function decleared we made a mistake with the function name you would get a ReferenceError on you console, this error can be fixed with the try-catch statement
// Now there're also cases where we want to print an error to the users either for a data inputted by the user or for the data gotten by the server
// this type of errors are known as custom errors created by the programmer to make the program run smoothly

// now we're going to use the try-catch statement to solve an error and also custom our own error message, so basically the statement below would first check if the name of the function is correct if yes it would executed eles our error message would be displayed
// now going to decleared a basic function the would call it inside the try statement if is ok we would get no error eles our custom error message in the catch block would be displaye

function makeOrder() {
    console.log(" Here is your Black Tea, Enjoy your day ")
}

try {
    makeOrder() // if the function name is incorrect or when a function name is undefined in the program and you try to call the name, you would get the custom error message on your console
    fun1() // this would give you an error message
} catch (error) { // used the catch block to throw the error message
    console.log(" Sorry, an error occurred in your program ")
    console.log(error) // you would get the Reference error on the console
    // you can also print the name of the error and message different on the console see below
    console.log(error.name);
    console.log(error.message);
}
// N.B you should note if the function "fun1()" is called outside the try block you woulld get a ReferenceError on your console
// you can also get the default error printed on the console see the catch block above 
