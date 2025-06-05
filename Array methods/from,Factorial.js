//This method uses fill and map 
let arr = new Array(5).fill(0).map((x, i) => i + 1);
console.log(arr); // [1, 2, 3, 4, 5]


// THis is the modern method which is not using map 
let arr1 = Array.from({ length: 5 }, (_, i) => i + 1);
console.log(arr1); // [1, 2, 3, 4, 5]


// factorial using from
let fact = Array.from({ length: 5 }, (_, i) => i + 1).reduce((a,b) => a * b);
console.log(fact); // [1, 2, 3, 4, 5]


// Factorial using map fill from 
let factorial = new Array(5).fill(0).map( (a,b) => b + 1 ).reduce((a,b) => a*b);
console.log(factorial);