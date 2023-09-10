// Getter and setter using class 

class User{
    constructor(username, email){
        this.username = username;
        this.email=email;
    }
    get username(){
        return _username;
    }
    set username(value){
       this._username=value
    }
}

const userOne=new User("hello", 'h@Hi.tech')
// console.log(userOne.get());
// console.log(userOne.set());
// console.log(userOne);


// getter and setter using objects

const Teacher={
    _email:"hi@tech.com",
    _name:"Hello",

    get email(){
        return this._email;
    },
    set email(value){
        this._email=value
    }
}

const he=Object.create(Teacher)
console.log(he.email);