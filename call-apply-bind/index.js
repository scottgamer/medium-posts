const personObj = {
  firstName: "Richard",
  lastName: "Munoz",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(personObj.fullName()); // Richard Munoz

const person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const person1 = {
  firstName: "Richard",
  lastName: "Munoz",
};

const person2 = {
  firstName: "Ariel",
  lastName: "Munoz",
};

// call sets "this" to the passed in object
console.log(person.fullName.call(person1)); // Richard Munoz
console.log(person.fullName.call(person2)); // Ariel Munoz

const greeting = function (a, b) {
  return `${a} ${this.name}. ${b}`;
};

const obj = { name: "Juan" };

// the arguments are passed to the function
console.log(greeting.call(obj, "Hello", "How are you?"));

// apply does it in a similar way with arguments passed as an array
console.log(greeting.apply(obj, ["Hello", "How are you?"]));

// bind creates a new bound function to the passed in object
const bound = greeting.bind(obj);
console.log(bound("Hello", "How are you?"));
