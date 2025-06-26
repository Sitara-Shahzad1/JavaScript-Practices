    const checkPos =(num)=>{
      let pos = num.every((a,b)=> a>=0) 
      return pos;
    }

    console.log(checkPos([1,2,3,-1,5,6,7]));
     