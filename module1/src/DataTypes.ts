// Number: This is for whole numbers or decimals.

let age: number = 5; // This is a number
let price: number = 10.99; // This is a decimal number



// String: This is for text or words.

let name: string = "John"; // This is a string (text)
console.log(name);



// Boolean: This is for true or false values.

let isHappy: boolean = true; // This is a boolean, it can be true or false
let isTired: boolean = false; // Another boolean value



// Array: This is a list of things (like a group of numbers or words).

let colors: string[] = ["red", "blue", "green"]; // This is an array of strings (words)
let numbers: number[] = [1, 2, 3, 4, 5]; // This is an array of numbers



// Tuple: A special type of array where each item can have a different type.

let person: [string, number] = ["Alice", 25]; // This is a tuple with a string and a number



// Any: This means you can put any type of value here.

let anything: any = 10; // It can be a number
anything = "Hello"; // Now, it can also be a string
anything = true; // And it can even be a boolean



// Null: This means there is nothing.

let nothing: null = null; // This is a null value, meaning "nothing"



// Undefined: This means a value is not set yet.

let notDefined: undefined = undefined; // This is an undefined value, meaning "it hasn't been set yet"



// Object: This is used for things that are more complex than just simple values.

let personObj: object = { name: "Tom", age: 30 }; // This is an object with properties name and age

// Enum: This is a way to give friendly names to numeric values.
enum Color {
  Red = 1,
  Green = 2,
  Blue = 3,
}
let favoriteColor: Color = Color.Green; // This means favorite color is Green (which has value 2)




// Void: This is for functions that don't return anything.
function greet(): void {
  console.log("Hello, world!"); // This function doesn't return anything
}




// Never: This is for functions that will never return anything, like if they keep running forever or throw an error.
function throwError(): never {
  throw new Error("Something went wrong!"); // This will never return a value because it throws an error
}



// Object type (More generic version of an object)
let personInfo: { name: string; age: number } = {
  name: "Jake",
  age: 22,
}; // This object must have a name (string) and age (number)

