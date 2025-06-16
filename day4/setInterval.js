
const func = ()=>{
    console.log(
        "hello world"
    )
}


let timerid = setInterval(func,1000)

//how to stop this after 5 second, here is the implementation
setTimeout(() => {
    clearInterval(timerid)
    
}, 5010);