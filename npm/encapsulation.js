//implementing by default public in objects
class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}
const person1 = new person("John", 30);
console.log(person1.name); 


//implementing private properties in objects

class person2{
    #a
    b
    constructor(a,b){
        this.#a = a
        this.b = b
    }
    func = ()=>{
        console.log("values are",this.#a,this.b)
    }
}

const obj2 = new person2(2,3)
// console.log(obj2.#a) //not accessible outside the class because it is private
obj2.func()