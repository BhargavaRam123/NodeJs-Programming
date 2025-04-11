const func = new Function('a','b',
    'return a+b'
)
console.log(func(1,2))

const func1 = new Function(
    'console.log("hello world")'
)
func1()


//main use case of this
// let str = ... receive the code from a server dynamically ...
// let func = new Function(str);
// func();

