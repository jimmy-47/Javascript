let date=new Date()
// console.log(date.toLocaleDateString())  // gave us exact today date
// console.log(Date.now())  // gave us date in millisecond from 1970
// console.log(date.getMonth())   // gave us 8 becase month starts from the 0 in javascript
// console.log(date.getMonth()+1) // for the exact month we add 1 into it
// console.log(Date.now()/1000)  // convert date into millisecond 


let myCreatedDate= new Date("01-12-2023")  // created our own date
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());// convert into string