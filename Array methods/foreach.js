let arr = [1,2,3,4,5];
let doubled = []
let result = arr.forEach( num => {
  console.log(num*2);
})


// Using push and foreach


 let pushed = arr.forEach( nums => {
  doubled.push(nums * 2);

});
console.log(doubled);