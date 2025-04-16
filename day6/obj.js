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