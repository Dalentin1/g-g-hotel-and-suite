// ITERATORS IN JAVASCRIPT
// the definition of iterators is, it's a tool in computer programming that enables the programmer to tranverse a class, data structure or abstract data type
// iterators traverse a container particular list, traverse in the sense that it goes through the property of an object the prints its sequence.
// so in javaScript an iterator is an object which defines a sequence and potentially return vaule upon its termination. Specifically, an iterator is any object ehich implements the iterator protocol by having a next() method that returns an object with two or more properties vaule. The next vaule in the iteration sequence.
// we can also say in plain language that an iterator is an object that uses a method() to return an object with two properties. The two properties are vaule and done
// before we go futher we would declear a variable with an array the use the for loop to get the length and index of the array see statement below
var arr = ["BMW", "Audi", "Mercedes", "Honda"];
console.log(arr); // printing the variable in the console
console.log(arr.length); // getting the lenght of the array with the lenght property on the console
// we're also going to print the properties of the array on the console using the for loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// now there's another short and easy syntax that could used in place of the for loop its called the for of loop see syntax below
for (let i of arr) {
  console.log(i);
}
// this is quite short and nice get the properties of the array printed on the console
// now going back to iterators, when we talk about traversing in array in javaScript it can be done with the for loop or the for of loop
// but the same thing can be done with iterators in javaScript, we can traverse each element in the array one by one. we won't be traversing all the elements in the array at once
// now to use the iterator object in javaScript we have to creat a function then the function would have the array passed to it as parameter see syntax below

function cars(values) {
    let index = 0;
    return {
        next: function () {
            if (index < values.length)
            return {
                value: values[index++],
                done: false
            }
            else {
                return {
                    done: true
                    
                }
            }
        }
    }
}

// so let evaluate the statement above it's not so complicated
// we created a function cars and we passed the array to it as parameters
// we then created a local variable that would traverse the array just like we had variable i in for loop and then we set it's value to 0
// the variable index would go through each elements present in the array and the car function would return an object with two properties
// by the definition of iterators we know it's an object that returns an object with two properties
// so the next statement returns an object which used the return key word followed with curly braces
// so the function car would return an object then this object would use a function next to return the two properties we're discussing about " Value and done"
// so when next is called it would print the current element value in the array index then when its called again it would then take the next index element in the array, returning two properties one with the element in the array the other is to tell you if its gotten to the last index of the array , basically the traversing of the array starts at the next function
// in the next function we used the if else statement, so what we actually want is the index variable to traverse the array till it get's  to the end
// the condition was if index is less then vaules.lenght
// the stated a label or property whichever you deem fit then called the function cars argument and increased the index by one
// this would look for whatever variable passed as a parameter to the cars function then would increase the index by one. : almost the same syntax formular with the for loop just a longer process and syntax
// if you also notice the return keyword was used in the if eles statement the conditions were stated in them and they were sperated by a comma , this because the properties has to be returned
// N.B: in place of the property names value and done it not a must to use those name, the properties could be name whatever you want
// so when the iterator get's to the last element and index of the array the else statement would be printed telling you it has gone through all the elements in the array
// now to use the object or iterator above we have to create a new variable newCars then passed the function cars to the variable the passed the array in the parenthesis of the cars function see syntax below
// after that we called the newCars variable with the next function
// if you check on your console you would see two properties one giving you the first element of the array and the other property is done with a boolean value of flase meaning there're still more elements in the array
// now one of the benefits of using iterators is when the we execute the console statement again passing the variable newCars and the function next to it you would automatically get the next element in the index of the array see syntax below


var newCars = cars(arr)
console.log(newCars.next().value) // you can use the .value property to get only the name of the element present in the array
console.log(newCars.next()) // printing the second element in the array
console.log(newCars.next()) // printing the third element in the array
console.log(newCars.next()) // printing the fourth element in the array
console.log(newCars.next()) // printing the fifth element in the array, this would just give you a boolean value because it has gotten to the last index in the array, if you use the .value here you would get the undefined vaule this because there's no more elements in the array so what we're trying to access is still undefined
