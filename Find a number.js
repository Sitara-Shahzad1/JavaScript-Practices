// Find a number from an Arrau 

   let array = [1,2,3,4,5,6,7];

   function search ( array, num ){

    for (let i = 0; i < array.length; i++) {
      if (array[i] === num ){
        console.log(`Element found at index: ${i}`);
        return;
      }
    }
    console.log("Element not  found");
   }
   search( array , 3);


   // Same thing with for each when we call return in for each it will skip current number
let arr1 = [1,2,3,4,5,6,7,8]
   arr1.forEach(num => {
    if(num === 5 ){
      return  ;
    }
    console.log(`visited: ${num} `);
  }
)
 