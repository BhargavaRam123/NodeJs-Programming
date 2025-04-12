let arr = [2,3,4,6,5,7,3,1]

let hc=0,lc=0;
let f=0;
if(arr[0]>arr[1])
{
    f=0;
    hc++;
}
else if(arr[0]===arr[1])
    {
    f=2;
}
else{
    f=1;
    lc++
}
for(let i=1;i<arr.length-1;i++)
{
    if(f===1)
    {
        if(arr[i]>arr[i+1])
        {
            hc++;
            f=0;
        }
    }
    else if(f===2)
    {
        if(arr[i]>arr[i+1])
        {
            hc++;
            f=0;
        }
        else if(arr[i]<arr[i+1])
        {
            lc++;
            f=1;
        }
    }
    else{
        if(arr[i]<arr[i+1])
            {
                lc++
                f=1
            }
    }
}
if(arr[arr.length-2]>arr[arr.length-1])
{
    lc++;
}
else
{
    hc++;
}
console.log(hc,lc)