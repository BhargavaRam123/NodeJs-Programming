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

class BankAccount {
    constructor(accountHolder, balance = 0) {
        this._balance = balance;
        this._accountHolder = accountHolder;
    }

    get balance() {
        return this._balance;
    }

    set balance(newBalance) {
        if (newBalance >= 0) {
            this._balance = newBalance;
        } else {
            throw new Error("Balance cannot be negative");
        }
    }

    deposit(amount) {
        if (amount > 0) {
            this._balance += amount;
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this._balance) {
            this._balance -= amount;
        }
    }
}