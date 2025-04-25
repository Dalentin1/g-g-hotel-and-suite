const num1 = 5;
const num2 = 10;

addVaules = () => console.log(`sum is 5 and 10 is :${num1 + num2}`)

addVaules()

// this code would run if we try to access this module from another file
// you note we didn't use the module object or pass any variable
// this code works because there's a function inside this module so whenever its invoked you would get the sum of 5 and 10