class User{
    constructor(username, password){
        this.username = username;
        this.password =password;
    }
    logMe(){
        console.log(`You Rae Logged with ${this.username}`);
    }
}
const userOne=new User("Jimmy",123)
userOne.logMe();

// if classes are not there we will write it down as 

function Userfunc (username , password){
     this.username=username;
     this.password=password;

     Object.prototype.logMe=function(){
        console.log(`${this.username}, you have logged in`);
     }
}

const userTwo=new Userfunc("James", 2342)
userTwo.logMe()