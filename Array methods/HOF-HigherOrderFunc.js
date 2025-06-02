function room() {
  console.log("I am room");
}

function home(fn) {
 
  fn(); // call the passed function
}

home(room); // ✅ passing function as argument
