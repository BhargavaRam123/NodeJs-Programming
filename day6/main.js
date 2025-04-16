// Creating an object using object literal notation
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com",
    
    // Method inside the object
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    },
    
    // ES6 shorthand method
    greet() {
        return `Hello, my name is ${this.firstName} ${this.lastName}`;
    }
};

// Accessing object properties
console.log(person.firstName); // John
console.log(person["lastName"]); // Doe

// Using object methods
console.log(person.getFullName()); // John Doe
console.log(person.greet()); // Hello, my name is John Doe

// Adding a new property
person.job = "Developer";

// Adding a new method
person.getInfo = function() {
    return `${this.getFullName()} is a ${this.age}-year-old ${this.job}`;
};

console.log(person.getInfo()); // John Doe is a 30-year-old Developer