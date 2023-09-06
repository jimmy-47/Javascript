//***********************  For Of ***************** */

// Syntax

// const element=[2,3,4,5,6];    // for in synatx

// for (const i of element) {
//     console.log(i)
// }


// ****************** for in   for objects*********************
const languages={
      js:"javascript",
      py:"python",
      ry:"ruby"
}
for (const name in languages) {
//   console.log(`${name} for the ${languages[name]}`)
}

// *****************  for in for arrays **************

const lang=["python","ruby","c++","Javascript"]
for (const index in lang) {
//    console.log(lang[index])
}

//**********  Map In javascript********** */

const map=new Map()
map.set('IN','India'),
map.set('FR','France')

for (const [key,value] of map) {
   console.log(key,':-',value)
}
