// SETS IN JAVASCRIPT
// set in javascript is an object that let's us store unique values inside it
// firstly we have discussed about objects and map in javascript, set are similar to maps in javascript it means that they're also objects but they perform various activity other than maps, the syntax are almost the same
// so we know that set let's us store unique vaules, this means if we create a set and try to keep a single value inside the set more than once we wouldn't be allowed to do so see syntax below

var mySet = new Set() // syntax for set
console.log(mySet)

// now we would create a new set and add values to it see syntax below

var mySet1 = new Set()
    mySet1.add(1)
    mySet1.add(2)
    mySet1.add(3)
    mySet1.add(4)
    mySet1.add(4) // this wouldn't be present in our set
console.log(mySet1);
// we just added some vaule to the set statement above
// we should note we can't add a value twice to the set any number of set could be add but can't be repeated
// set can also be used with arrays to see syntax below

// creating an array
let arr = [1, 2, 3, 4, 3, 45, 3, 5, 6, 2, 3, 1] 
// the array above has elements in it repeating what we want to do is get the unique elements in the array, we're going to do this with set
// all we need do is pass the array as an arugment to the set see snytax below
let mySet2 = new Set(arr)
console.log(mySet2)
console.log(mySet2)
// this would pick the unique values in the array, set doesn't allow values to be repeated.
// the set can also be printed in a form of an array see syntax below
let myArr = Array.from(mySet2)

// used the Array key word with the from() method the passed the set as an arugment
// the from() method is an iterable object to convert to an array. Creates an array from an iterable object.
// so it creates an array from whatever object is passed to it as an arugment
console.log(myArr) 

// this would display an array of the unique vaules in set passed to the from() method as an arugment
// we can also traverse all the elements in the set by using the for of loop see syntax below
for (let item of mySet2)
    console.log(item);

// we can also delete a particular entry from the set by using the delete() method
// the delete() method also work's for maps also see snytax below
// the delete() method removes a specified value from the Set. Returns true if an element in the Set existed and has been removed, or false if the element does not exist
mySet2.delete(45)
console.log(mySet2)
// check the new set size on your console you would see it been reduced by one and the value 45 is no longer present in the set
// we can also delete all the values in the set
// to do this we use the clear() method see syntax below
mySet2.clear()
console.log(mySet2)

 








