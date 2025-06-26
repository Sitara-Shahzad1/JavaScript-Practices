
  // Remove duplicates from index using indexof() and filter()

  
// SImple IndexOF fun 
        let numbers = [10, 20, 30, 40, 50];
        let index = numbers.indexOf(30);
        console.log(index);


//SIMPLE USING ARRAY AND FILTER 
          let array = [1,2,2,3,4,4,5];

          let findArray = array.filter((a,b) => array.indexOf(a) === b)

          console.log(findArray);


//Same using set 

        let newarray = [1, 2, 2, 3, 4, 4, 5];

        // Convert array to Set and back to array to remove duplicates
        let finalfindArray = [...new Set(newarray)];

        console.log(finalfindArray); 
