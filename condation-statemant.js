//today we will discuss about conditional statements in JavaScript. Conditional statements allow us to execute different blocks of code based on certain conditions. The most common conditional statements are if, else if, and else.

let age = 20;
let fitnessLevel = "intermediate";

if (age >= 18 && fitnessLevel === "intermediate") {
    console.log("You are eligible to with us ");
}else{
    console.log("You are not eligible to with us");
}

if (typeof(age) === typeof(fitnessLevel)) {
    console.log("Both variables are of the same type");
}
else {
    console.log("Both variables are of different types");
}


let saad_is_logedIn = true;

if (saad_is_logedIn) {
    console.log("Welcome Saad bahi");
}else{
    console.log("Please try to login again");
}


const array = [];

if (array.length === 0) {
    console.log("The array is empty");
}else{
    console.log("The array is not empty");
}


let vowel = "a";

if (vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u") {
    console.log("The letter is a vowel");
}else{
    console.log("The letter is consonant");
}


let Amount = 1000;

if (Amount > 100 && Amount <= 100000) { 
    console.log("You are abel to withdraw the amount ");
}else if (Amount >0 && Amount <= 100) {
    console.log("You have very low amount you can not withdraw the amount");
}
else{
    console.log("You have no amount in your account");
}



let attendance = 75;

if (attendance >= 75) {
    console.log("You are eligible to sit in the exam");
}else {
    console.log("You are not eligible to sit in the exam");
}