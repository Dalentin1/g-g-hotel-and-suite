// MAPS IN JAVASCRIPT
// maps are similar to objects in javascript and both coukd be used in place of another in javascript, but still there're some differences between objects and maps
// now we're going to create an empty object and map see syntax below

var myCar = new Object()
{

}
console.log(myCar)

var myCar1 = new Map()
{

}
console.log(myCar1)

// now if you look at your console you would see the differnce between Objects and Maps the object on the console has a prototype: Object while the map has a prototype: Map
// like objects we have different methods for maps as well
// value can be added to our map with the help of set method see syntax below
// what the set method does is it adds new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.
// so we know the set method has keys and value for every property. so we should keep in mind a key can be anything it could be a number, string, method/function, or symbol
// we can access any of this value with the get() method on the console then the key of the vaule we want to get passed as an arugment to the get() method see snytax below
// so the get() method returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.
// we also have a method used to determine the size of the map see syntax below
// so the size() method states the number of elements in the Map.
// we can also delete a value from the map with the delete() method see syntax below
// the delete() method Removes the specified value passed to it as arugment from the map. Returns true if an element in the map existed and has been removed, or false if the element does not exist
// we can also delete all the values in the map see syntax below
// to do this we use the clear() method 

var carModels = new Map()
{
    carModels.set(1, "BMW")
    carModels.set(2, "Audi")
    carModels.set(3, "Mercedes")
    carModels.set(4, "Honda")
}
console.log(carModels);
console.log(carModels.get(3));
console.log(carModels.size);
console.log(carModels.delete(4));
carModels.clear()
console.log(carModels)


// we would look at some example using function and object as a key in the map
// we can't just use the object or function as keys this is because, we won't be able to get the vaules they're keys to
// this is because we can't use the curly brace in the get method to slove this we have to first pass them as values to variables then use the variable names for the keys see syntax below

var phoneModels = new Map();
// creating two variable
let obj = {}
let func = function() {}
{
  phoneModels.set("My phone brand is ", "Vivo");
  phoneModels.set(obj, "Tecno");
  phoneModels.set(func, "Samsung");
  phoneModels.set(4, "Infinix");
}
console.log(phoneModels);
console.log(phoneModels.get(obj));
console.log(phoneModels.get(func));
console.log(phoneModels.size);

// maps can be used with array as well all we need do is to define an array with key value pairs then pass the array to map as an arugment see syntax below
//

var myArr = [[1, "BMW"], [2, "Audi"], [3, "Mercedes"], [4, "Honda"]]
var myCar2 = new Map(myArr) // passed the array variable as an arugment to the map
console.log(myCar2)
console.log(myCar2.get(2))

// we can also use the for of loop to traverse the array and get the keys and vaule see syntax below
for (let [key, value] of myCar2) {
    console.log(key+ " "+value)
}

// we can also print the keys and value differently see syntax below
// used the key() method with the map name, what the key method does is it returns an iterable of keys in the map
// used the values() method with the map name, it simpliy returns an iterable of values in the map
for (let key of myCar2.keys()) {
    console.log(key)
}

for (let value of myCar2.values()) {
    console.log(value);
}

// the last thing we look at is Map cloning in JavaScript
// we already know cloning refers to creating a copy of something
// we're going to clone on of the map's created above
// first we create a new map the pass the map we want to clone as an arugment see syntax below

var newPhone = new Map(phoneModels)
console.log(newPhone)

// if you note we have a new Map with the exact key vaule pairs with phoneModels map
// but the amazing part is that the two Maps aren't equal
// check your console as we compaire the two Maps see syntax below
console.log(phoneModels == newPhone);