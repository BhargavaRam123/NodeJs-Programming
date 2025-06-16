const func = ()=>{
    console.log("hello world")
}

setTimeout(func,2000)


//passing settimout with arguments 
const func2=(phrase,name)=>{
    console.log(phrase,name)
}

let id = setTimeout(func2,1000,"hello","john")


// console.log("id value",id)
clearTimeout(id)