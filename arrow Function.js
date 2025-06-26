//Simple function 
     let sum = function (num1 , num2 ){
      return num1 + num2 ;
    }

    console.log(sum (2,3));


    // Arrow function 

    let sum2 = (num1 , num2 ) => {
      return num1+num2;
    }
    console.log(sum2 (2,3));


    //Square
    // if you have single parameter you can write without brackets
    let square = num  => {
      return num *num;
    }
    console.log(square(3));

    // Concise way to write arrow function 

    let square1 = num => num * num ;
    console.log( square1(7));

    
  