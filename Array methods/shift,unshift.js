
// let array = [1,2,3,4,56];
// let shift = array.shift(2);
// console.log(shift);

// let array1 = [1,2,3,4,56];
// let unshift = array.unshift(2);
// console.log(unshift);
// console.log(array1)

// let arr = [22,34,56,778,888];
// console.log(arr.shift(34))
// console.log(arr.unshift(5))
// console.log(arr)

let arr1 = [20, 30];
let newLength = arr1.unshift(10);

console.log(newLength); // 3
console.log(arr1);       // [10, 20, 30]
let removed = arr1.shift(20);
console.log(removed);
console.log(arr1)
