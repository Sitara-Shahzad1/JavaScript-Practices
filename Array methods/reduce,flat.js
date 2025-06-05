let arr = [1,2,3,4,5,6];
let reduced = arr.reduce((a,b) => a+b , 3 );
console.log(reduced);


// flattening arrays 

let nested = [[1,2], [3,4], [5,6],[7,8]];
let flattened = nested.reduce((a,b) => a.concat(b) , []);
console.log(flattened); // we can do it using flat also 

let arr1 = [ [1,2],[3,4],[5,6]];
let flattened1 = arr1.flat();
console.log(flattened1);



// Checking if number occurs again and again 

let words = ["apple" , "Banana", "apple", "Mango", "apple"];

let count = words.reduce((a,b) => {
  if(a[b]){
    a[b] +=1;
  } else{
    a[b] = 1;
  }
  return a;
}, {});

console.log(count);