// import express from "express"

// const app = express()
// app.get(
//     "/",()=>{
//         console.log("hello world")
//     }
// )

// app.listen(8000,()=>{
//     console.log("server running on port 8000")
// })

//why classes are used 

//consider the following objects
const alien1 = {
    name: "Ali",
    species: "alien",
    phrase: () => console.log("I'm Ali the alien!"),
    fly: () => console.log("Zzzzzziiiiiinnnnnggggg!!")
}
const alien2 = {
    name: "Lien",
    species: "alien",
    sayPhrase: () => console.log("Run for your lives!"),
    fly: () => console.log("Zzzzzziiiiiinnnnnggggg!!")
}
const bug1 = {
    name: "Buggy",
    species: "bug",
    sayPhrase: () => console.log("Your debugger doesn't work with me!"),
    hide: () => console.log("You can't catch me now!")
}
const bug2 = {
    name: "Erik",
    species: "bug",
    sayPhrase: () => console.log("I drink decaf!"),
    hide: () => console.log("You can't catch me now!")
}
const Robot1 = {
    name: "Tito",
    species: "robot",
    sayPhrase: () => console.log("I can cook, swim and dance!"),
    transform: () => console.log("Optimus prime!")
}
const Robot2 = {
    name: "Terminator",
    species: "robot",
    sayPhrase: () => console.log("Hasta la vista, baby!"),
    transform: () => console.log("Optimus prime!")
}

// so this is repeated work to avoid this we will use classesf

class Alien {
    constructor(name,species,phrase){
        this.name = name
        this.species = species
        this.phrase = () => console.log(phrase)
        this.fly= () => console.log("Zzzzzziiiiiinnnnnggggg!!")
    }
}
const alien = new Alien("ravi","Alien","Iam an alien")
console.log(alien)

alien.phrase()
alien.fly()