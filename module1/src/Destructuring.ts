{
//Destructuring

//object destructuring
const User = {
    id: 1,
    name: {
        firstName: "Mirazur Rahman Zim",
        lastName: "Zim"
    },
    age: 22,
    contact: {
        phone: 1234567890,
        email: "mirazurrahmanzim@gmail.com"
    }
,
address: {
    city: "Dhaka",
    country: "Bangladesh"
}
}

const {name: {firstName : name1, lastName : name2}, age, contact, address} = User
console.log(name1, name2, age, contact, address);





//array destructuring
const friends = ["Mirazur Rahman Zim", "Zim", "Lakar"]
const [friend1, friend2, friend3] = friends
//rest operator using array destructuring
const [BestFriend, ...OtherFriends] = friends
console.log(BestFriend, OtherFriends);
} 