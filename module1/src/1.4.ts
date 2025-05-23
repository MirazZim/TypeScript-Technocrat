// Basic Data Type

//String
let Firstname : string = "Mirazur Rahman Zim"
let Secondname : string = "Mirazur Rahman Zim"

//This is explicit part : string and without : string is implicit part

//implicit part
let Thirdname = "Mirazur Rahman Zim"

//Number
let roll : number = 12

//Boolean
let isStudent : boolean = true


//undefined
let isMarried : undefined = undefined

//null
let isDead : null = null



let d : number | string | boolean | undefined | null;

d = 12;
d = "Mirazur Rahman Zim";
d = true;
d = undefined;
d = null;


//Array 
let names : string[] = ["Mirazur Rahman Zim", "Mirazur Rahman Zim", "Mirazur Rahman Zim"]
let numbers : number[] = [1, 2, 3, 4, 5]
let mixed : (string | number)[] = [1, "Mirazur Rahman Zim", 2, "Mirazur Rahman Zim", 3, "Mirazur Rahman Zim"]
let mixed2 : (string | number | boolean)[] = [1, "Mirazur Rahman Zim", true, "Mirazur Rahman Zim", 3, "Mirazur Rahman Zim"]
let mixed3 : (string | number | boolean | undefined | null)[] = [1, "Mirazur Rahman Zim", true, "Mirazur Rahman Zim", 3, "Mirazur Rahman Zim", undefined, null]
let mixed4 : any[] = [1, "Mirazur Rahman Zim", true, "Mirazur Rahman Zim", 3, "Mirazur Rahman Zim", undefined, null]

//Tuple means fixed length array ==> [string, number]
let person : [string, number] = ["Mirazur Rahman Zim", 12]
let person2 : [string, number, boolean] = ["Mirazur Rahman Zim", 12, true]
let person3 : [string, number, boolean, undefined, null] = ["Mirazur Rahman Zim", 12, true, undefined, null]
let person4 : [string, number, boolean, undefined, null, any] = ["Mirazur Rahman Zim", 12, true, undefined, null, "Mirazur Rahman Zim"]
let person5 : [string, number, boolean, undefined, null, any, string] = ["Mirazur Rahman Zim", 12, true, undefined, null, "Mirazur Rahman Zim", "Mirazur Rahman Zim"]
let person6 : [string, number, boolean, undefined, null, any, string, number] = ["Mirazur Rahman Zim", 12, true, undefined, null, "Mirazur Rahman Zim", "Mirazur Rahman Zim", 12]



