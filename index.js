//today topic is about non primative data types in JavaScript. Non-primitive data types include objects, arrays, functions, and more. These types are mutable, meaning their values can be changed after they are created.

const person ={
    name: "John",
    age: 30,
    lastName: "Doe",
}


const obj ={
    name: "saad",
    age: 30,
    email: "saadExample@.com",
    city: "Lahore",
}


console.log(person.name) // Output: John
console.log(person["age"]) // Output: 30

const skill = ["JavaScript", "Python", "Java", "C++"];
console.log(skill[0]) // Output: JavaScript
console.log(skill.length) // Output: 4

let ist = person.name = "saad";
let snd = person["lastName"]

console.log(`${ist}, ${snd}`) // Output: John;     

