//***************** Declaration******************** */
// ()=>{}  // this is declaration of arrow function
// //OR
// const myArrow=()=>{} // wrapping in a variable 


// Arrow function with return statement

// const returnTwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(returnTwo(2,3));

// Arrow function without return 

const returnTwo =(num1,num2)=>(num1+num2)
console.log(returnTwo(2,3));

//Objects in Arrow function

const arrowObject=()=>({username:"hello"})
console.log(arrowObject());