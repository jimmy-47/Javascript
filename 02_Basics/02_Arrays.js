// ******************** Joining Two Arrays ***************************

let fruits=["Apple" , "Banana" ," Papaya" ,"Grapes"]
let vegetables=["Califlower", "Bindi" ,"Aloo " , " Gobi"]

// 1--
fruits.push(vegetables) // it modify the orignal array and return the full array 
console.log(fruits)

// 2--
const grocery=fruits.concat(vegetables)  // it returns a new array after concatenation
console.log(grocery)

//3--
const groceries=[...fruits, ...vegetables]  // same as concat but it takes as many array as your wish
console.log(groceries)


// **************************** Making an array from variables **************************

// 1--   Check Whether an array or not
console.log(Array.isArray("Jimmy"));

// 2-- Converting t0 Array
console.log(Array.from("Jimmy"));

let name="Jimmy"
let age=23
let job=null

console.log(Array.of(name,age,job));