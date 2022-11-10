// GENERATORS IN JAVASCRIPT
// A generator function allows us to define iterative logarithm by writing a single none continuous function
// the generators in javascript has a more shorteer syntax and it much easier asnd quicker than when we work with iterators
// the syntax of generators is pretty easy all we do is create a function with * symbol in front of the function keyword then the function name see syntax below
function* generate() {
  let i = 0;
  yield "BMW";
  yield "Audi";
  yield "Mercedes";
  yield "Honda";
}
let gen = generate();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next().value);
console.log(gen.next());
console.log(gen.next());

// let's evaluate the statement above
// the * symbol in front of the function keyword tell the computer that this isn't a regular function but a generator function that has so task to do, that's to generate he vaule on the go
// inside the body of the function we have to declear the parts we want to access
// so we decleared the variable i for traversing purpose.
// the yield keyword is used to stop the generator function and it returns the vaule folllowing it, it's the return keyword but generator based
// then we created a variable and then passed the generate function to it, then called the next function in the console
// the benefits of using the generator in javascript is the next method is already predefined as a generator method
// so on your console you would get two properties one with the vaule of the element in the current index and the other the done property
// so each time the console statement is repeated it prints the next element in the index of the array
// this same task could also be done with a loop see syntax below

function* Cars() {
    let index = 0;
    var models = ["BMW", "Audi", "Mercedes", "Honda"]
    while (index < models.length) {
        yield models[index]
        index++
    }
}

// the statement above is an easy one
// first we decleared a variable "index" inside the Cars generator function for traversing through the array
// the created a variable holding the arrays
// then used a while loop then passed this statement if index is greater than the variable models.lenght
// then used the yield keyword its same as the return keyword, used it to yield the array index, so its the variable name holding the array then the variable meant for traversing passed as an array
// then incremented the vaule of "index" by one... so it picks the next element in the array index whenever the console statement is called
// we took a variable passed the generator function to it then printed the variable with the next function see syntax
let newCars = Cars()
console.log(newCars.next().value) // the value property can also be used to get on the element vaule
console.log(newCars.next())
console.log(newCars.next())
console.log(newCars.next())
console.log(newCars.next())
