class Book{
    constructor(id,name,author,pages,copies){
        this.id = id
        this.name = name
        this.author = author
        this.pages = pages
        this.copies = copies
    }
    decrementcopy()
    {
        console.log("book is borrowed")
        this.copies--
    }
    getavailablecopies()
    {
        return this.copies
    }

}


class libMember{
    #borrowedbooks
    constructor(name,age,validity)
    {
        this.name = name
        this.#borrowedbooks = []
        this.age = age
        this.validity = validity
    }
    borrowbook(bookobj) {
        if(bookobj.getavailablecopies()>0){
            bookobj.decrementcopy()
        this.#borrowedbooks.push(bookobj)}
        else
        console.log("The book you are trying to borrow is not available")
    }
    getborrowedbooks(){
        console.log("borrowed books are:")
        this.#borrowedbooks.map((a)=>console.log(a))
    }

}

class Admin {
    constructor(name)
    {
        this.name = name
    }
    usepowerofadmintodec(bobj)
    {
        if(bobj.copies>0)
        bobj.copies--
        else
        console.log("there are no copies to remove the books")
    }
}

//creating a newbook

const b1 = new Book(1,"book1","auth1",100,10)

const m1 = new libMember("bhargav",20,12)

m1.borrowbook(b1)
// m1.borrowbook(b1)
m1.getborrowedbooks()

const admin = new Admin("mainchar")

admin.usepowerofadmintodec(b1)