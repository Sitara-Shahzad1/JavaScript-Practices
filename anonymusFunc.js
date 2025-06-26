 
    let sum = function (num1 , num2 ){
      return num1 + num2 ;
    }

    let newSum = sum ;
    
    console.log(newSum(4,5)); // function call 

    //(4 + 5 ) + 6 

    let sumThreeNumbers = function (num1 , num2 , num3 , sumTwoNumbers)
    {

      let sum1 = sumTwoNumbers (num1 , num2);
      return sumTwoNumbers(sum1, num3)
    }
    
    console.log( sumThreeNumbers( 2,4,5, sum) );
    
