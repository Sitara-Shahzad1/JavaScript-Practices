
// square of array 
        let arr = [1,2,3,4,5,6];
        // let square = arr.map( (num) => {return num * num; })  
        let square = arr.map( num => num *num)//concise
        console.log(`Square is : ${square}`);

// convert into uppercase 

        let array = ['a', 'b', 'c', 'd', 'e'];
        let convert = array.map((a, b) => a.toUpperCase())
        let same = array.map((a) => a.toUpperCase())
        console.log(convert)
        console.log(same) // same without b index


// Array method push 

        let newArray = ['a', 'b', 'c', 'd', 'e'];
        let finalArray = []

        for (let i = 0; i < newArray.length; i++) {
        finalArray.push(newArray[i].toUpperCase());
          
        }

        console.log(finalArray);

