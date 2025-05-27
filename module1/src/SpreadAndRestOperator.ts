{


    //spread operator
    //Rest Operator

    //This is for array spread operator
   const bros1: string[] = ["Mirazur Rahman Zim", "Zim", "Lakar"]
   const bros2: string[] = ["Cristiano Ronaldo", "Mbappe", "Vini"]

   bros1.push(...bros2)
   console.log(bros1);


   //This is for object spread operator
   const person1: {name: string, age: number} = {name: "Mirazur Rahman Zim", age: 22}
   const person2: {name: string, age: number} = {name: "Lakar", age: 22}

   const person3 = {...person1, ...person2}
   console.log(person3);


   //EXAMPLE
   const Team1 = {

    Center: "Mirazur Rahman Zim",
    Forward: "Lakar",
    Defender: "Cristiano Ronaldo",
    Goalkeeper: "Mbappe"
   }

   const Team2 = {
    Center: "Sakib Bhai",
    Forward: "Lakar",
    Defender: "Lionel Messi",
    Goalkeeper: "Howard"
   }

   //This is for object spread operator
   const TeamList = {...Team1, ...Team2}
   console.log(TeamList);


//Learn Rest Operator
const greetFriends = (...friends: string[]) => {
    //Here i have used rest operator to gather all the arguments and store them in the friends array
    //Then i have looped through the array and logged out each element
    friends.forEach((friend : string) => {
        console.log(`Hello ${friend}`);
    })
}

greetFriends("Mirazur Rahman Zim", "Zim", "Lakar")

//rest operator is used to gather all the arguments and store them in an array


}