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
console.log(userLoggedInn());