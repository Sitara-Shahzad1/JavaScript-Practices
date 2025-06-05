let arr = [1,2,3,4,5,6];
let filledWithZero = arr.fill(0);
console.log(filledWithZero);


// fill contains fill(value, startIndex, EndIndex);
let array = [123,45,667,886,564,44]
let filledIndex = array.fill( 9,1,4);
console.log(filledIndex);

//Create new array with fill ;

let newArr = new Array(5).fill("Hi");
console.log(newArr);