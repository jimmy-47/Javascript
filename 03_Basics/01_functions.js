// ***************** Functions Declaration ******************

const sayMyName=function(){      // simple declartation
    console.log("My Name Is Jimmy")
}
// sayMyName()


const addTwoNumbers=function(num1, num2){  // passing the values in the function and print
    console.log(num1+num2)
}
// addTwoNumbers(2,3)

const addThreeNumbers=function(num1, num2,num3){  // passing the values in the function and return
   return num1+num2+num3
}

// console.log(addThreeNumbers(2,3,4));

const userLoggedIn=function(username){  // if the user passes the name 
    return`${username} is logged in`
}
// console.log(userLoggedIn("Jimmy"));

const userLoggedInn=function(username ="Customer"){  // if user did not passes any thing it automatically get this name 
    return`${username} is logged in`
}
// console.log(userLoggedInn());


// ******************************** Rest Operator ****************************
   // rest operator and spread operators are same 

function valueOfCart(...noOfItems){    // this is spread operator and return the value in the array
    return noOfItems;
}
// console.log(valueOfCart(1000,23,"hell",54));





// *****************************  Passing an object  value in function *********************

const userProfile={
    name:"Jimmy",
    age:23,
    email:"jimmy@yahoo.com"
}

function objValues(userValues){    // passing the object
    return `Hello ${userValues.name} your age is${userValues.age} and your email is ${userValues.email}`  // return the statement

}

// console.log(objValues(userProfile));

//***************************** Same could be done with array**************************** */

const fruits=["Apple", "Jerry" ,"Anar"]

function returnSecondPosition(fruits){
    return fruits[1];
}
console.log(returnSecondPosition(fruits));

