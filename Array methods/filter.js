
    //  Using if else 
    // let array=[1,2,3,4,5,6,7,8];

    // for (let i = 0; i < array.length; i++) {
    //   let element = array[i];

    //   if (i%2 ==0) {
    //     console.log(i)
    //   }
    // }


    // Using filter 

    let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let result = number.filter((a, b) => b % 2 === 0)
    // console.log(result)


    // Using map and filter

    let array = [1, 2, 3, 4, 5, 6, 7, 8];

    let finalresult = array
      .map((_, i) => i)
      .filter(i => i % 2 === 0);
    // console.log(finalresult);



    // filter odd numbers 

    let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    let odds = arr3.filter((num, index) => {
      if (num % 2 === 1) {
        return true;
      }

    }
    )
    console.log(odds);

    // concise version of odd function 

    let newOdd = arr3.filter((num, index) => {
      return num % 2 === 1 ; //if we write 0 instead of 1 it will return even numbers
    });
    console.log(newOdd);



    // ======= from interview  filter num < 3

    const numbers = [0,1,2,3,4,5]
    let filtered = numbers.filter(nums => nums <3).map( num => num + 5);
    console.log(filtered);
    // let add = filtered.map(num => num + 5)
    // console.log(add);