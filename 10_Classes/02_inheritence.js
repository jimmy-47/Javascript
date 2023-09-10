// inheritence in clases 

class User{
    constructor(username, password){
        this.username=username;
        this.password=password;
       
    }
    logged(){
        console.log("logged");
    }
}
class Teacher extends User{
    constructor (name , username , password) {
        super(username, password); // Instead of .call and this in function we pass super() here 
        this.name=name;
    }
    logMe(){
        console.log(" Hello you Logged In")
      }
}

const userOne=new Teacher("hello", "h_1", "1234")
console.log(userOne);
userOne.logMe()
userOne.logged()


const userTwo= new User("Hell", 1234)
console.log(userTwo);
userTwo.logged()
