// ***************************** Arrays Initilization *********************************

// let myArr=new Array(1,2,3,4,5);    // First way 
// console.log(myArr)


// let myArr=[1,2,3,4,5]           // Second way
// console.log(myArr)



//****************************  Methods in Array******************************************* */

// Basic Operations
let myArr=new Array(1,2,3,4,5);
myArr.push(9)        // Add Value at the last place 
myArr.pop()          // Remove elemnt from the last
let newArr=myArr.join()  // join the previos array and convert it into string
console.log(newArr);

myArr.unshift(5)  // Add elemet at first position
myArr.shift()    //remove element from its first position

console.log(myArr.slice(1,3));  //gave a portion of array without changing tyhe original array 
console.log(myArr.splice(1,3));    //same as slice but modify the original array

console.log(myArr)
