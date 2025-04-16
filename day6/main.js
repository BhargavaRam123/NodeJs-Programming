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

// Object with getter and setter using Object.defineProperty
const employee = {
    _salary: 50000  // convention to indicate "private" property
};

Object.defineProperty(employee, 'salary', {
    get: function() {
        return this._salary;
    },
    set: function(newSalary) {
        if (newSalary < 0) {
            console.log("Salary cannot be negative");
            return;
        }
        this._salary = newSalary;
    }
});

// Using ES6 class syntax with get/set
class Person {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    
    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }
    
    set fullName(name) {
        const parts = name.split(' ');
        this._firstName = parts[0];
        this._lastName = parts[1] || '';
    }
}

// Using getters/setters
console.log("Employee salary:", employee.salary); // 50000
employee.salary = 60000;
console.log("New salary:", employee.salary); // 60000
employee.salary = -1000; // Salary cannot be negative

const p = new Person("Jane", "Smith");
console.log(p.fullName); // Jane Smith
p.fullName = "Sarah Johnson";
console.log(p.fullName); // Sarah Johnson

// 2. Object with Methods
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    }
};

const temperature = {
    _celsius: 0,
    get fahrenheit() {
        return (this._celsius * 9/5) + 32;
    },
    set fahrenheit(value) {
        this._celsius = (value - 32) * 5/9;
    },
    get celsius() {
        return this._celsius;
    },
    set celsius(value) {
        this._celsius = value;
    }
};

//inheritance in js using extends and super
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class bird extends Animal {
    constructor(name) {
        super(name); // Call the parent constructor
    }
    
    speak() {
        console.log(`${this.name} chirps.`);
    }
}

const animal = new Animal("Generic Animal");