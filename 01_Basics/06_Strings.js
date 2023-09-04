// ************************* Strings **************************

// ***************** Initilization *******************

//1--- 

const name=" Jimmy "

//    OR

// 2----

const newName=new String(" Jameel ")

// Check time 
// console.log(name);
// console.log(newName);


// ******************* Concatenation **********************

//1---

// console.log("Hello"+name+newName);  // Bad practice // Old practice 


//2---

// console.log(`Hello My Name is ${name } and my new is ${newName}`);   // Best Practice ocf Concatenation





// ********************* Methods in strings   ******************************

let myGame=new String('Hello-This-is game')
// let myGame="Hello This is Your Boy-"

console.log(myGame.length);   // Finding The length
console.log(myGame.charAt(4))  // finding the caharacter at the specifice position
console.log(myGame.indexOf('o'))  // finding the index no of a character
console.log(myGame.substring(0,4))  // for the printing of substring
console.log(myGame.slice(-18,5));  // same as sustring but we can use the -ve values 
console.log(myGame.toUpperCase());  // converting to the upper case 
console.log(myGame.toLowerCase());  // converting to the lower case 

 
