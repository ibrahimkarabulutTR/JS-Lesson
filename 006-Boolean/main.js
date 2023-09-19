/// Variable type that returns True or False
let answer = true;
answer = false;
console.log(answer);


let email = "job.ibrahimkarabulut@gmail.com";

// It asks if there is this value in it.
let query = email.includes("@");
console.log(query);

let names = ["Ahmet", "Mehmet", "Mahmut"];
let query2 = names.includes("A");
console.log(query2);

// Conditionals
let age = 23;
console.log(age == 23);
// It asks type to is same
console.log(age === "25"); 
console.log(age !=  23);
console.log(age <   23);
console.log(age <=  23);
console.log(age >   23);
console.log(age >=  23);
// Value's same type different or type same value's different
console.log(age !== "25");
console.log(age !== 24); 


let name = "Ahmet";
console.log(name == "Ahmet");
console.log(name == "ahmet");
console.log(name <  "ahmet");
console.log(name >  "Mahmut");

let boolean  = Boolean("");   // False because it's empty
let boolean1 = Boolean("a"); // True because it's full
let boolean2 = Boolean(0);   // False because 0
let boolean3 = Boolean(1);   // True because 1
console.log(boolean, boolean1, boolean2, boolean3);