{

//union types

//this is a union type which can be any of the given strings
type FrontendDev = 'Fakibaz Developer' | 'Junior Developer' | 'Senior Developer' | 'Tech Lead'

//here we are using the union type
const newDevloper : FrontendDev = 'Junior Developer'

//this is an object type which can have the following properties
type User = {
    name: string,
    email: string,
    //this is a union type which can be either "male" or "female"
    gender: "male" | "female";
    //this is a union type which can be any of the given strings
    bloodgroup : "o+" | "A+" | "B+" | "AB+"

}

//here we are using the object type
const user1 : User = {
    name: 'mirazur rahman',
    email: 'mirazurrahmanzim@gmail.com',
    gender: 'male',
    bloodgroup: 'o+'
}

const user2 : User = {
    name: 'Lakar',
    email: 'lakar@gmail.com',
    gender: 'female',
    bloodgroup: 'A+'
}





//this is an intersection type 
// which can have the properties of both FrontendDevoloper and BackendDevoloper
type FrontendDevoloper = {
    skills: string[];
    designation1:'Frontend Developer'
}
type BackendDevoloper = {
    skills: string[];
    designation2:'Backend Developer'
}


type FullstackDeveloper = FrontendDevoloper & BackendDevoloper

//here we are using the intersection type
const fullstackDeveloper : FullstackDeveloper = {
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node JS', 'Express JS', 'Nestjs'],
    designation1: 'Frontend Developer',
    designation2: 'Backend Developer'
}








}