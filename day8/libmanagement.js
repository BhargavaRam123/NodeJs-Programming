class Book{
    constructor(name,author,pages){
        this.name = name
        this.author = author
        this.pages = pages
    }

}


class Member{
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