//Learning Functions

//Normal Functions
function add(a:number, b:number):number{
    return a + b
}

console.log(add(1, 2));

//Arrow Functions
const addArrow = (a:number, b:number):number => a + b
console.log(addArrow(1, 2));


//object er bhetor==> function => holo ekta method
const User = {
    name: "Miraz",
    balance: 100,
    addBalance(balance: number): string{
        return `Your balance is ${this.balance + balance}`
    }
}
console.log(User.addBalance(10));

//what happened in the above :
//1. i have created a objecet User
//2. i have created a method addBalance in the object User (this is a function)
//3. i have called the method addBalance (this is a method)
//4. i have passed a parameter balance (this is a parameter)
//5. i have returned a string (this is a return)



const arr : number[] = [1, 2, 3, 4, 5]

const newArray = arr.map((elem:number):number=>elem*elem)
console.log(newArray);