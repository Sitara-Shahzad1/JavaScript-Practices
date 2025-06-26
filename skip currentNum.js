  // Same thing with for each when we call return in for each it will skip current number
    let arr1 = [1,2,3,4,5,6,7,8]
   arr1.forEach(num => {
    if(num === 3 ){
      return  ;
    }
    console.log(`visited: ${num} `);
  }
)