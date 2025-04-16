class Employee extends Person {
    constructor(firstName, lastName, age, jobTitle, salary) {
        super(firstName, lastName, age);
        this.jobTitle = jobTitle;
        this.salary = salary;
    }

    // Additional method
    getEmployeeDetails() {
        return `${this.getFullName()} - ${this.jobTitle}`;
    }
}

class MathOperations {
    static PI = 3.14159;

    static calculateCircleArea(radius) {
        return this.PI * radius * radius;
    }

    static compareNumbers(a, b) {
        return a > b ? a : b;
    }
}