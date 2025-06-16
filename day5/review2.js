const arr = ['adb','aabbcc','abc']
const ans = []

for(let i =0;i<arr.length;i++)
{
    let mp = new Map()
    for(let j=0;j<arr[i].length;j++)
    {
        if(mp.has(arr[i][j]))
        {
           mp.set(arr[i][j], mp.get(arr[i][j]) + 1)
        }
        else
        {
            mp.set(arr[i][j], 1)
            
        }
    }
    let fact = 1
    for(let j=1;j<=arr[i].length;j++)
    {
        fact *= j
    }
    let denom = 1
    for(let [key,value] of mp.entries())
    {
        // let fact1 = 1
        console.log(value)
        let factValue = 1
        for(let j=1; j<=value; j++) {
            factValue *= j
        }
        denom *= factValue
    }
    let ans1 = fact/denom
    // console.log("factorial and denominator",fact,denom)
    ans.push(ans1)
}
console.log(ans)


