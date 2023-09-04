//   **************** Simple Comparision With the same data type  ************************



/*
           2==2
           2!=2
           2>2
           2<2
           2>=2
           2<=2

*/


//  ************************** comaprision with differebt data types  ***********************


/* 
        "2" >2
        2<="2"

   Issme thoda sa dhyaan rakhna hai 

*/


// ********************* Comparing Null and undefind 

console.log("******* Null Comparision ********")
console.log("Greater Than",null>0  )
console.log("Less Than",null<0)
console.log(" Greater Than Equal To",null>=0)
console.log("Less Than Equal to ",null<=0)

// ************ Comparing Undefined **************
let compareUndefined;
console.log("******* Undefined Comparision ********")
console.log("Greater Than",compareUndefined>0)
console.log("Less Than",compareUndefined<0)
console.log(" Greater Than Equal To",compareUndefined>=0)
console.log("Less Than Equal to ",compareUndefined<=0)

// *****************Strict Check *****************

/* It Not Even check the value but it check the data type also  */

console.log("******* Strict Check ********")
console.log("Strict Check ","2"===2);
console.log("Strict Check ","2"==="2");
