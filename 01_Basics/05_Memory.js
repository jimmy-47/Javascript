// *************** Types of memory in JS ********************

/*   
     Two types of memory
     1- Stack   => All primitive data types are stored in stack    ( Stack gaves us copy of variable )
     2- heap    => All non primitive data types are stored in heap  ( Heap gaves us Reference of variable )


*/


// ******************** Examples oF Stack ************************

let userOne=" Jimmy"
let userTwo=userOne

userTwo="Jameel"

console.log("User One",userOne)  // user one remained same as it is original and no changes made in it
console.log("User Two ",userTwo)   // After changing the value it gave the new updated value 



// ****************** example Of Heap **********************


let myObj={
    name: " jimmy",
    email: "Jimmy@serviceconnect.in"
}

 console.table([myObj.name, myObj.email])

let myObj2=myObj;
console.log(myObj2);

myObj2.email="jimmy@google.com"  // we are changing in myObj2 but changes are reflected in original also this is call by refernce 
console.log(myObj)
