function multiply (a){


 return function (b){
  return a * b;
 };

}
const double = multiply(3);
console.log(double(5));


// addition of 3 numbers 

function Add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const result = Add(3)(4)(5);
console.log(result); // 12
