// destructured array  
let array = [1,2,3,4,5]

let [a,b,c,d,e] = array ;
console.log(a);
console.log(b);
console.log(c);


// ========== Using Skipping Values 

let [x,y] = [10, 20, 30 ];
console.log( ` x = ${x}`);
console.log(`y = ${y}`);



// =========== Using rest syntax 

let [first , ...rest]  = [1,2,3,4,5,6];
console.log(`This is First : ${first}`);
console.log(`This is rest : ${rest}`);