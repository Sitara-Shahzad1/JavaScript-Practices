let arr = [1,2,3,4,5];
let newArr = [];
let forResult = arr.forEach( num => {
 newArr.push( num * 2);
}
 );
console.log(newArr);


let arr1 = [2,3,4,5,6,7];
let result = arr.map(num => {
  return num > 2  
})
console.log(result);


let array = [1,2,3,4,56];
let sliced = array.splice(1,3);
console.log(sliced);


// setTimeout(() => {
//   console.log('Timeout')
// }, 0);
// Promise.resolve().then(() => console.log('Promise'))
// console.log('End');




//=========== async function 
async function foo() {
  return  "Hello World "
}

const result1 = console.log(foo())
// foo().then(result1 => console.log(result1)  );