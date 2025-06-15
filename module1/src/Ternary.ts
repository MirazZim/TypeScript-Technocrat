{

//ternary operator


//this is a ternary operator
const age : number = 22
age >= 18 ? console.log("You are eligible for voting") : console.log("You are not eligible for voting");


//optional chaining
//optional chaining is used to access a property of an object that may be null or undefined
const user1 = {
    name: "Mirazur Rahman Zim",
    age: 22,
    address: {
        city: "Dhaka",
        country: "Bangladesh"
    }
}
console.log(user1?.address?.city);


//nullish coalescing operator
//nullish coalescing operator is used to provide a default value when a variable is null or undefined
const isAuthenticated = undefined;
const user = isAuthenticated ?? "Please login to continue"
console.log(user);

//it means if isAuthenticated is null or undefined then user will be "Please login to continue"
//ternary and nullish is not the same
//ternary is used to provide a value based on a condition
//nullish is used to provide a default value when a variable is null or undefined

}