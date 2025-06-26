let arr = [1,2,3,4,5,6];
let flated =  arr.flatMap( x => [x, x*2]);
console.log(flated);  //it will print x and x*2 