function parentfunc()
{
    let i=0;
    return function()
    {
        i++;
        console.log("i value",i)
    }
}
const child = parentfunc()
child()
child()
child()