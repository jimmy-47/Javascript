function user(username){
  this.username=username;   // yeh apne this ki jagah jo this pass hua usko use krega 
}

function userValue(username,password){
    user.call(this,username)    // call refence hold krta hai // aur this pass krte hain batane ke liye yeh wala current refence use kro
    this.passowrd=password
}
const userOne=new userValue('hello',1234)
console.log(userOne);