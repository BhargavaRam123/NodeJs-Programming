

class parentcls{
    constructor(parentproperty){
        this.parentproperty  = parentproperty
    }
    parentfunc = ()=>{
        console.log("parent funciton called",this.parentproperty)
    }
}

class childclss extends parentcls{
    constructor(a,b,c){
        super(c)
        this.a = a
        this.b = b
    }
    clidfunc = ()=>{
        console.log("hello world",this.a,this.b)
    }
}

const obj = new childclss(1,2,3)
console.log(
    "object value :",obj
)

obj.parentfunc()