//This is a simple loop that will print numbers from 0 to 99 to the console. The loop uses a for statement, where 'i' is initialized to 0, and the loop continues as long as 'i' is less than 100. After each iteration, 'i' is incremented by 1. Inside the loop, the current value of 'i' is logged to the console using template literals for formatting.

for(i =0; i < 100; i++){
    console.log(`number is  = ${i}`)
}


for(i = 1; i <= 50; i++){
    if(i % 2 === 0){
        console.log(`Even number ${i}`)
    }else{
        console.log(`Odd number ${i}`)
    }
 }
let sum = 0;

for (i = 1; i <= 100; i++) {
    sum += i;
    console.log(` = ${sum}`);
}


let no = prompt("Enter a number to calculate its factorial: ");

for (let i = number - 1; i >= 1; i++) {
    number *= i;
}


let number = 10;

do {
    console.log(`The number is ${number}`);
    number--;
}
while (number > 0); 

let i = 2;

let sum2 = 0;

do {
    sum = sum + i;
    i = i + 2;
    console.log(`The sum of even numbers from 1 to 50 is: ${sum}`);
}while(i <= 50);

