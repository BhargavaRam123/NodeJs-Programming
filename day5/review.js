 const arr = ['A','B','C','D']

 let ans = []
 for(let i=0;i<arr.length;i++)
 {
    for(let j=i+1;j<arr.length;j++)
    {
        const str = arr[i]+","+arr[j]
        ans.push(Array(str))

    }
 }
 console.log(...ans)