// *********************** decleration with the help of  Singelton OR Constructor ******************************

const tinderUser={}

tinderUser.name="Jimmy"
tinderUser.email="jimmy@tinder.com"
tinderUser.isLoggedIn=true
tinderUser.isRegularUser=false

// console.log(tinderUser)

const regularUser={
    email:"jimmy@tinder.com",
    fullName:{
        firstName:"Jameel",
        lastname:"Chowdhary"
    }
}
// console.log(regularUser.fullName.lastname)



// ***********************  Object Conactenation *************************

// const allUsers={tinderUser,regularUser}    // not a best way 
// const allUsers=Object.assign({},tinderUser,regularUser)  // little bit okay
const allUsers={...tinderUser ,...regularUser}   // always use because of its ease to use 
// console.log(allUsers);