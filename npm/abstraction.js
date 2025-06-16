//implementing abstraction through classes
class Bank{
    #balance
    constructor(value ){
        this.#balance = value
    }
    credit(amount)
    {
        this.#balance+=amount
    }
    withdraw(a){
        this.#balance-=a
    }
    getbalance(){
        console.log("account balance is:",this.#balance)
    }
}


const obj = new Bank(100)

obj.withdraw(10)
obj.credit(20)
obj.getbalance()