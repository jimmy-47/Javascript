// some values we already assume that these values are always true or false these are called truthy or falsy value 

// Falsy Values 

// 0,-0,'' ,false, null, undefined , BigInt 0n, NaN

// Truthy Values

// '0', 'false', true, " ", [], {}, function(){}

const check='0'  // true 
if(check){
    console.log("true")
}
else{
    console.log("false");
}



const check2=''   // false 
if(check2){
    console.log("true");
}
else{
    console.log("false");
}


//Nullish coalescing operator (??) //  
//The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, 
//and otherwise returns its left-hand side operand.

let val1;
val1=2??3;
console.log(val1)