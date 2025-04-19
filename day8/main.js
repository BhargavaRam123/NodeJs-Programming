function mainfunc(a,cb)
{
    if(a===2)
    {
        console.log("main function called")
    }
    else{
        cb()
    }
}

function cb()
{
    console.log("hello world")
}
mainfunc(1,cb)