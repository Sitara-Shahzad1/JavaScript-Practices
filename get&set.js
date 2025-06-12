class Users{

  constructor(name){
    this.name = name; 
  }

  get name(){
    return this._name;
  }

  set name(value){
    if(value.length < 4){
      console.log('Length is too short ');
      return;
      
    }
    this._name = value;
  }
}

let user = new Users ('John');
console.log(user);

user.name = "Harry"
console.log(user);


