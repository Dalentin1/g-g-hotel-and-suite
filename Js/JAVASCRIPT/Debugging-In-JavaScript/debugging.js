// DEBUGGING IN JAVASCRIPT
// Debugging refers to finding and fixing errors in our program
// to removes these errors we have to identifiy them then find solutions to sloving them
// we're going to create a function that can add the inputted number of the user see syntax below

function add() {
    var no1 = parseInt(document.getElementById("n1").value)
    var no2 = parseInt(document.getElementById("n2").value) 
    var no3 = no1 + no2
    alert("The sum is " + no3)
    console.log("The sum is " + parseInt(no1 + no2));
}

// so the statement above is a function in it we took three variables
// the first and the second variable is meant to hold whatever data is inputted by the user on the web page
// then the third variable is meant to take the vaules held in the two variables above then add them together, the stores the result
// then the function is also meant to display an alert with a string and the vaule of the third vaule in it
// if you notice the output gotten is differnet from what is expected this is because the system is taking the user inputted number's as strings
// so it concantinates the vaule together it reads all as strings, there's way to solve this
// we use a method parseInt method with the first and second variable so the document.getElementById would be passed as an arugument
// the parseInt converts strings data to numbers
// note this problem would be encounted when you use the console.log you also have to use the parseInt then pass the first and second variable name as an arugement
// now imagine if you mistakly forgot to add the + operator between the two variable when working with the console Vscode won't display an error
// this is where the console come's in handy it show hidden error in our program
// on the browser there're lots of tools that helps with debugging
// the source tool : this also help when there's an error in the program the console you notify you the would also suggest you use the source tool to see the exact line in the program statement the error has occurred in
// you would see the line in which the error has occurred would be in a light red line, N:B changes can't be made from the source tool it has to be made in the program file directly
// also with the source tool you can go step by step on the execution of the statements in the program
// now in the source tool we have the navigator on the left hand side and the debugger on the right hand side
// on the debugger in the source tool there're lots of options there're : Breakpoints, Scope, Call Stack, XHR/fetch Breakpoints, DOM Breakpoints, Global Listeners, Event Listener Breakpoints, CSP Violation Breakpounts
// Breakpoint refer to a point or place where we intentionally stop the program so we could review the further execution process
// now for example we have an event listener in the html code onclick so on the dubugger we are going to click on Event Listener Breakpoint the select mouse now in the mouse menu we have certain events find the click and select it since its the event we used
// now if you try to get the sum of numbers inputted in the text box when you click on the submit button you notice the execution of the statement stopped when it got to the event in the html file were the submit button code is it would be highlighted
// now where this happens you would get some icon on the top of the debugger this option are used to move step by step in the program statements
// the first option is the resume script execution, this would execute the whole script and give use the output
// the second option is the step over next function call option, this would take us to the next function call present in the program
// the third option is the step into next function call option, this would the the same as the second option
// the fourth option is the step out of current function option, this is would take us back to the first function from whatever function we're in
// the fifth option is the step option this takes up a step futher in the execution the program then when the program is fully executed the result is displayed on the console
// when using the step option what happens is it executes only the statement we're on if there's an error the line would be highlighted in red, eles it would move to the next statement 

