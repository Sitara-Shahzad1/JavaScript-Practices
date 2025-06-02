const str = "hi i am sitara";

let capital = str.split(' ').map( (str)=> str.charAt(0).toUpperCase() + str.slice(1)).join(' ') ;

console.log(capital);