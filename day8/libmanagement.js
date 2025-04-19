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
        this.#borrowedbooks = []
        this.age = age
        this.validity = validity
    }
    borrowbook(bookobj) {
        this.#borrowedbooks.push(bookobj)
    }
    getborrowedbooks(){
        console.log("borrowed books are:")
        this.#borrowedbooks.map((a)=>console.log(a))
    }

}

//creating a newbook

const b1 = new Book(1,"book1","auth1",100)

const m1 = new libMember("bhargav",20,12)

m1.borrowbook(b1)
m1.getborrowedbooks()