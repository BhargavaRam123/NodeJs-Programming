//implementing polymorphism in javascript
class Animal {
    speak() {
        console.log("The animal makes a sound");
    }
}

class Dog extends Animal {
    speak() {
        super.speak()
        console.log("The dog barks");
    }
}


const dog = new Dog();
dog.speak(); // Output: The dog barks