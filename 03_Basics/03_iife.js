// Immediately invoked Function Expression

// ***********Declaration *****************
// ()() // This is iife declaration

//named IIFE

(function chai(){
    console.log('hello');
})();    // If you want to invoke two iife then semicolon is expected 

// unnamed iife
( ()=>{
    console.log("Unnamed IIFE")
})();

//passing parameters

((name)=>{
    console.log(`${name}`);
})("hello")