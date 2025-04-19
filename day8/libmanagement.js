class Book{
    constructor(id,name,author,pages){
        this.id = id
        this.name = name
        this.author = author
        this.pages = pages
    }

}


class libMember{
    #borrowedbooks
    constructor(name,age,validity)
    {
        this.name = name
        this.age = age
        this.validity = validity
    }
    borrowbook(bookid) {
        this.#borrowedbooks.push(bookid)
    }
    getborrowedbooks(){
        console.log("borrowed books are:")
        this.#borrowedbooks.map((a)=>console.log(a))
    }

}

//creating a newbook

const b1 = new Book(1,"book1","auth1",100)

const m1 