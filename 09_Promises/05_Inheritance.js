// Old Syntax

let user={
    name:"Jimmy",
    loginID:"234",
    passowrd:231
}
let Teacher={
    makeVideos:true,
}
let TA={
    assignment:"JS Assigmnet",
    // __proto__:Teacher  // Accesing the properties of teacher
}
// console.log(TA.makeVideos);
// console.log(user.makeVideos);
// Teacher.__proto__=user   // same accesing the properties of user
// console.log(Teacher.passowrd);


// Modern Syntax of inheritence

Object.setPrototypeOf(Teacher,user)
console.log(Teacher.loginID);




