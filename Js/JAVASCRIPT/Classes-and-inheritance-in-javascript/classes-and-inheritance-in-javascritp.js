// Classes And Inheritance In JavaScript
// classes are nothing but templates used to create objects in javascript, we could inculde properties and behaviour to a class.
// the syntax of classes in javascript is almost same with constructor function, see below for examples
// to declear a class we use the "class" keyword followed by the name of the class then its body

class Student {
  // syntax: class keyword then class name
  constructor(name, age, row) {
    // you have to also declear a constructor function inside a class, in the constructor function decleared inside the class all the properties of the class are decleared in the constructor function within the class
    this.name = name;
    this.age = age;
    this.row = row;
  }

  // adding a method to the class
  Sch() {
    return "I am " + this.name + " from Codekingdom";
  }
  dob() {
    return "The date of birth of " + this.name + " is " + (2022 - this.age);
  }

  // moving forward there's another concept we would discuss about when it come's to classes its called static functions
  // when declearing a static method in classes we use the "static" keyword then followed by the name of the method, the best part of the static function is it could be used without creating the instances of a class
  // if we want to access the static method we can do this by declearing the class name followed by the data operator then the method name, see example below
  static add(a, b) {
    return a + b;
  }
}

// Creating a new class and would also want to inherite some properties from the "Student" class decleared above
// when you want to inherite properties from an existing class the keyword used is quite different from when you want to inherite properties from a constructor function
// remember when we wanted to inherite fron the constructor function we used the constructor name followed by the "call" keyword in class we use a different keyword
// we use the "extends" keyword followed by the name of the class whose properties would be inherited
// then in the body of the class we use the constructor function then in the parameter we pass the names of the properties we want to inherite followed with the names of the new properties you intend to declear for the new class
// then in the body of the constructor we use the "super" keyword then in the parameter you pass the name of the properties you want to inherite from the base class
// the "super" keyword used in the body of the constructor reffers to the parent class we use it to call its constructor, we can also use it to call a particular property or method

class Student2 extends Student {
  constructor(name, age, row, language, section) {
    super(name, age, row);
    this.language = language;
    this.section = section;
  }
}

// creating a new object via the "Student" class decleared above
var Daniel = new Student("Daniel", 22, 12);
console.log(Daniel);
console.log(Daniel.Sch());
console.log(Daniel.dob());
console.log(Student.add(25, 23)); // access the static method in the console


// creating a new object via the "Student1" class decleared above
var Sunny = new Student2("Sunny", 20, 11, "C++", "A")
console.log(Sunny);
console.log(Sunny.Sch());
console.log(Sunny.dob());
console.log(Student2.add(45, 53));

// If you take note you would notice when we inherited methods from a constructor function we always had to manually declare it, but when it comes to classe once you inherite a class property you could also directly access its method to any object automatically



