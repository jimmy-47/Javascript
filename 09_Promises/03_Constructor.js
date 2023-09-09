function User(username,loginId,password){
    this.username=username
    this.password=password
    this.loginId=loginId
    return this
}

const userOne=new User("Jimmy",2342,1234)
console.log(userOne)