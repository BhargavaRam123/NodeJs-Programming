// "use strict";
Number = "hello";

console.log(Number);


//assignment to non writable property

const obj = {}
Object.defineProperty(obj,"x",{value:10,writable:false,enumerable:true})
obj.x = 20
console.log(obj)

//assignment to getter property only
const o = {
    get func(){
        return 10
    }
}
o.func = 12

//implementing non extensible objects

const random = {}
Object.preventExtensions(random)
random.name = "hello"

