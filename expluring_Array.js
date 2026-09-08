

let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
console.log(fruits[0]); // Output: apple
console.log(fruits[2]); // Output: cherry


// Adding an element to the end of the array
fruits.push("fig");
console.log(fruits); // Output: ["apple", "banana", "cherry", "date", "elderberry", "fig"]  


// Removing the last element from the array
fruits.pop();
console.log(fruits); // Output: ["apple", "banana", "cherry", "date", "elderberry"] 


// Adding an element to the beginning of the array
fruits.unshift("grape");
console.log(fruits); // Output: ["grape", "apple", "banana", "cherry", "date", "elderberry"]


// Removing the first element from the array
fruits.shift();
console.log(fruits); // Output: ["apple", "banana", "cherry", "date", "elderberry"]


// Finding the index of an element in the array
let index = fruits.indexOf("cherry");
console.log(index); // Output: 2

// Checking if an element exists in the array
let exists = fruits.includes("banana");
console.log(exists); // Output: true

// Slicing the array to create a new array
let slicedFruits = fruits.slice(1, 4);
console.log(slicedFruits); // Output: ["banana", "cherry", "date"]


// Splicing the array to remove elements and add new ones
fruits.splice(2, 1, "kiwi", "lemon");
console.log(fruits); // Output: ["apple", "banana", "kiwi", "lemon", "date", "elderberry"]  



// marging two arrays using concat method
let tropicalFruits = ["mango", "papaya", "pineapple"];
let allFruits = fruits.concat(tropicalFruits);
console.log(allFruits); // Output: ["apple", "banana", "kiwi", "lemon", "date", "elderberry", "mango", "papaya", "pineapple"]



// type of array using Array.isArray() method
console.log(Array.isArray(fruits)); // Output: true

// array finding the largest number using Math.max() method
let numbers = [10, 5, 20, 15];
let largestNumber = Math.max(...numbers);
console.log(largestNumber); // Output: 20   

//copying an array using the spread operator
let copiedFruits = [...fruits];
console.log(copiedFruits); // Output: ["apple", "banana", "kiwi", "lemon", "date", "elderberry"]


// filtering an array using the filter() method
let filteredFruits = fruits.filter(fruit => fruit.startsWith("b"));
console.log(filteredFruits); // Output: ["banana"]