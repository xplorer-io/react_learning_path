/***
 * How to declare a Class in JavaScript
 */

/**
 * Method 1: Using Function Keyword
 */

function Person(name, age) {
  this.name = name;
  this.age = age;
  Person.prototype.getDescription = function () {
    return `My name is ${this.name}. I am ${age} years old`;
  };
}

const person = new Person("Pramish", 24);
console.log(person.getDescription());

/**
 * Method 1: Using Class Keyword
 */

class AnotherPerson {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getDescription() {
    return `My name is ${this.name}. I am ${this.age} years old`;
  }
}
const anotherPerson = new AnotherPerson("Pramish", 24);
console.log(anotherPerson.getDescription());
