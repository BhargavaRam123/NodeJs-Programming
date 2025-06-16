funciton closure(){
    let value = 10 
    const func = new Function('console.log(value)')
    return func
}