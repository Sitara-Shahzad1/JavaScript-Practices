let arr = [1,2,3,4,5,6];
let arr1 = [46,6,788,99];
let arr2 = [333,444,555,666];

let concatenated = arr.concat(arr1,arr2);
let sorted = concatenated.sort((a,b)=> a-b)
console.log(sorted);

let joined = arr.join("and"); // it will join using and 
console.log(joined)
let simpleJOin = arr.join(" , ");
console.log(simpleJOin);

