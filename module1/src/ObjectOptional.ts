{//reference type ==> object

//type ==> literal types
let person : {
    name : "Mirazur Rahman Zim", //this is a literal type, it can only be "Mirazur Rahman Zim"
    isMarried?: boolean, //this is an optional property, it can be undefined or a boolean
    age : number //this is a required property, it must be a number
} = {
    name : "Mirazur Rahman Zim",
    isMarried : false,
    age : 22
}

//when we add a question mark after a property name, it becomes optional
}