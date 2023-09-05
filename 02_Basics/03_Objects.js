// ********************* Declaration of Objects *********************

// Object Literals 



// const myObj={
//     name:"Jimmy",
//     age:24,
//     email:"Jimmy@Serviceque.in"
// }

// ********************** Accessing The Element *************************

// console.log(myObj.name); // 1st way
// console.log(myObj["name"]); // 2nd way

// ***********************  Initilization of Symbl in Objects ****************

const mySym=Symbol("Key1")

const myObj={
    name:"Jimmy",
    age:24,
    email:"Jimmy@Serviceque.in",
    [mySym]:"key1"
}

//************************* Accessing the symbol **************************** */

// console.log(myObj[mySym]);

// // ******************Freeze **************************************

myObj.email="Hello@jimmy.com"
console.log(myObj["email"]);
Object.freeze(myObj);  // freezes whole object after that we are unable to made any changes in tghat 
console.log(myObj["name"]);
myObj.name="Jameel"
myObj.email="Hello@jimmyyyy.com"
console.log(myObj["email"]);
console.log(myObj["name"]);


// ***************************Creating Functions and uses this for the refence ****************

myObj.greeting=function(){
    console.log(`Hello And Welcome Abroad ${this.name}`);
}
// console.log(myObj.greeting())
myObj.greeting()
