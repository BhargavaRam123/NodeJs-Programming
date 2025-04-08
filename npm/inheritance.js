

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
    childfunc = ()=>{
        console.log("hello world",this.a,this.b)
    }
}

class superchild extends childclss{
    constructor(a,b,c,d){
        super(a,b,c)
        this.d = d
    }
    superchildfunc = ()=>console.log(this.d)
}

const obj = new superchild(1,2,3,5)

obj.childfunc()
obj.superchildfunc()
obj.parentfunc()