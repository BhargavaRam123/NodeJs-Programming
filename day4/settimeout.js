const func = ()=>{
    console.log("hello world")
}

setTimeout(func,2000)


//passing settimout with arguments 
const func2=(phrase,name)=>{
    console.log(phrase,name)
}

setTimeout(func2,1000,"hello","john")