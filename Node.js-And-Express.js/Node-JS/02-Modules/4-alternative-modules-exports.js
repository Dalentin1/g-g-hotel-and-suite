// there're other syntax used to export modules see syntax below
// any data type can be exported in modules

module.exports.items = ["item1", "item2"];

// the first syntax we gave the exports object a property then passed an array to them

const person = {
  name: "bob",
};

module.exports.singlePerson = person;
// here we passed the name of the object decleared above as a value to the property in the exports object
