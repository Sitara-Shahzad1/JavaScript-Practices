const str = "hi i am sitara";

let capital = str.split(' ').map( (str)=> str.charAt(0).toUpperCase() + str.slice(1)).join(' ') ;

console.log(capital);


const string = "hi i am your instructor";
let capitalize = string.split(' ').map( (b) => b.charAt(0).toUpperCase() + b.slice(1)).join(' ');
console.log(capitalize);
