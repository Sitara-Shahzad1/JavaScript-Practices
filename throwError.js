const prompt = require('prompt-sync')();

let a = prompt("Enter the value of a: ");
let b = prompt("Enter the value of b: ");

if(isNaN(a) || isNaN(b)){
  throw SyntaxError ("This is not correct value! ")
}

let sum = parseInt(a) + parseInt(b);

try {
  console.log(`The sum is ${sum*x} `);
  
  
} catch (error) {
  console.error("error agaya bhai ")
  
}
