const change=document.querySelector('h1')
 const stopt=setTimeout(() => {
    change.innerHTML="Hello I am Changed "
    console.log(change.innerHTML="Hello I am Changed ")
}, 2000);

const stop=document.querySelector('.stop')
stop.addEventListener('click',()=>{
    clearTimeout(stopt)
    console.log("Stop Clicked");
    alert("Stopped Pressed")
})

