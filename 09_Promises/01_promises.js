const promiseOne=new Promise((resolve,reject)=>{
     setTimeout(()=>{
         console.log("Hello i am inside the promise ")
          resolve()
     },1000)
})
promiseOne.then(()=>{
    console.log('hello from then')
})//

const promiseTwo=new Promise((resolve,reject)=>{
    let error=false
    setTimeout( () =>{
       if(!error){
        console.log("Hello without error")
        resolve()
       }
       else{
        console.log("Oops! found some bug");
       }
    },1000)
}).then(()=>{
    console.log(" hello After Sucess without error");
})



const promiseThree=new Promise((resolve,reject)=>{
    let error=true
    setTimeout( () =>{
       if(!error){
        console.log("Hello without error")
        resolve({username:"Hello", password:1234})
       }
       else{
        console.log("Oops! found some bug");
        reject("Something Went Wrong")
       }
    },1000)
})

promiseThree.then((user)=>{
    const data=user.username;
    return data;
}).then((user)=>{
    console.log(user);
}).catch((error)=>{
    console.log(error);
}).finally(()=>console.log(" Either it is resolved or rejected idk | but process is complete"))


const promiseFour=new Promise((resolve,reject)=>{
    let error=false
    setTimeout( () =>{
       if(!error){
        console.log("Hello without error")
        resolve({username:"Hello", password:1234})
       }
       else{
        console.log("Oops! found some bug");
        reject("Something Went Wrong")
       }
    },1000)
})

async function fourUsuage(){
    try {
        const response=await promiseFour
    } catch (error) {
        console.log("Oops! Something Went Wrong");
        
    }
}
fourUsuage()


