// ******************** For Loops *******************
for (let i = 0; i < 10; i++) {   // for loop 
    const element = i
    // console.log(i);
    
}

// break
for (let i = 0; i < 10; i++) {    
    const element = i
   if(i==5){
    // console.log(" 5 detected");
    break;   // break exit the whole after the condition true 
   }    
//    console.log(i)
}

// continue

for (let i = 0; i < 10; i++) {
    const element = i
    if(i==5){
        console.log(" 5 dteteced ");
        continue;   // did not break the loop but skip 1 iteration when the condition is matched 
    }
    console.log(i);
    
}