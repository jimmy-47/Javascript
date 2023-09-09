const heros=["thor", "spiderman"]

let heropowers={
    thor:"Hammer",
    spiderman:"Spidey",
   getPower: function(){
       console.log(`power of ${this.spiderman} of spiderman `);
   }
}
// console.log(heropowers.thor)
// heropowers["getPower"]()



// Creating Own Prototype 

Object.prototype.power=function(){    // This prototype is declared in object and acessable to all
    console.log('Yaay !! Got Power');
}

// heropowers.power()


Array.prototype.fower=function(){    // only in array
    console.log(` yay ! I Got The power`);
}

// heros.fower()
// heropowers.fower()   // this would not accesable 