"use strict";
Number = "hello";

console.log(Number);


//assignment to non writable property

const obj = {}
Object.defineProperty(obj,"x",{value:10,writable:false,enumerable:true})
obj.x = 20
console.log(obj)