//implementing encapsulation in javascript
class Person {
 name = "John Doe";
 age = 30;
 #email;
#phoneNumber;
    constructor(email, phoneNumber) {
        this.#email = email;
        this.#phoneNumber = phoneNumber;
    }
    getEmail() {
        return this.#email;
    }
    getPhoneNumber() {
        return this.#phoneNumber;
    }
    setEmail(email) {
        this.#email = email;
    }
}

const obj = new Person()
console.log(obj.name); // John Doe
console.log(obj.age); // 30
console.log(obj.getEmail()); // undefined
console.log(obj.getPhoneNumber()); // undefined
console.log(obj.#email); 
console.log(obj.#phoneNumber); 