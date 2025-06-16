let obj1={
    name:"bhargav1",
    age:20
}
let obj2={  
    name:"bhargav1",
    age:20
}


function areObjectsEqual(obj1, obj2) {
    // Check if both inputs are objects
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
      return obj1 === obj2;
    }
    
    // Handle arrays separately
    if (Array.isArray(obj1) && Array.isArray(obj2)) {
      if (obj1.length !== obj2.length) return false;
      
      for (let i = 0; i < obj1.length; i++) {
        if (!areObjectsEqual(obj1[i], obj2[i])) return false;
      }
      
      return true;
    }
    
    // If one is array and other is not, they're not equal
    if (Array.isArray(obj1) !== Array.isArray(obj2)) return false;
    
    // Get all keys from both objects
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    
    // Check if both objects have the same number of keys
    if (keys1.length !== keys2.length) return false;
    
    // Check if all keys in obj1 exist in obj2 with the same values
    for (const key of keys1) {
      if (!keys2.includes(key)) return false;
      
      // Recursively compare nested objects/arrays
      if (!areObjectsEqual(obj1[key], obj2[key])) return false;
    }
    
    return true;
  }

  console.log(areObjectsEqual(obj1,obj2))

  //polymorphism 

  //you can have the same method for all the family tree dlike the parent child grandparent like that depending on whicch class you invoked to create the object the functionality may differ this is possible due to overriding
  //duck typing:


  function ducktyping(obj){
    console.log("user name is ",obj.user)
  }

  let obj = {
    user:"bhargav"
  }
ducktyping(obj)

//duck typing polymorphism
function makeSound(soundMaker) {
  // We don't care what type the object is, only that it has a speak method
  console.log(soundMaker.speak());
}

// These don't need to inherit from the same class
const dog = {
  speak: () => "Woof!"
};

const person = {
  speak: () => "Hello!"
};

const car = {
  honk: () => "Beep!",
  speak: () => "Vroom!"
};

makeSound(dog);    // Outputs: Woof!
makeSound(person); // Outputs: Hello!
makeSound(car);    // Outputs: Vroom!


//polymorphism overriding
// Parent class
class Animal {
  speak() {
    return "Some sound";
  }
}

// Child classes
class Dog extends Animal {
  speak() {
    return "Woof!";
  }
}

class Cat extends Animal {
  speak() {
    return "Meow!";
  }
}

// Polymorphic behavior
const animals = [new Animal(), new Dog(), new Cat()];

animals.forEach(animal => {
  console.log(animal.speak());
});
// Output:
// Some sound
// Woof!
// Meow!