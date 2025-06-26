

    let str = "Javascript is fun to learn ";

    function findFun (){
      if (str.includes("fun")) {
        return "true";
      } else {
        return "false";
      }
    }

    findFun();

    //same with different 

   
function findFun() {
  let stri = "Javascript is fun to learn";

  if (stri.indexOf("fun") !== -1) {
    console.log(true);
  } else {
    console.log(false);
  }
}

findFun();
 