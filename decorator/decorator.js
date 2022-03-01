class User{

#username;
  constructor(username){
    this.#username=username
  }

 get username(){
    return  this.#username;
  }
}

class UserLowerCaseDecorator{

constructor(user){
  this.user=user
  }
get username(){
  return  this.user.username.toLowerCase();
 }

}
let user=new User("aliMohammadzadeh")
console.log(user.username);


let userLowerCaseDecorator=new UserLowerCaseDecorator(user)
console.log(userLowerCaseDecorator.username);
