document.querySelector('.india').addEventListener('click',(e)=>{
    alert("Welcome To India !!!")
})
document.querySelector('.images').addEventListener('click',(e)=>{
    // let removeIt=e.target.parentNode;  // simple way but sometime gave error
    // removeIt.remove()


    let removeIt=e.target.tagName
    if (removeIt=='IMG'){
        (e.target.parentNode).remove()
    }
})