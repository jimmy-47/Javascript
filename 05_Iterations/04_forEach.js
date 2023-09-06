// ****************** For each *********************


// For Eachfor the arrays 
const arr=[1,2,3,4]
arr.forEach((item) => {
    // console.log(item);
});

// for each for the objects 

// const myObject={   // it does not work on object
//     IN:"India",
//     FR:"France"
// }
// myObject.forEach((key)=>{
// //    console.log(key);
// })

const arrObj=[   // object inside array
    {
        h:"Hello",
        y:"Hyy"
    },
]
arrObj.forEach((key) => {
    console.log(key.h)
});
