const requestUrl= 'https://api.github.com/users/jimmy-47'   // api link
let data;
const xhr=new XMLHttpRequest();  // creating a request
xhr.open('GET',requestUrl);  // request open
xhr.onreadystatechange=function(){   // on ready stage 
    if(this.readyState===4){    // totally 4 stage so we take 4
         data=JSON.parse(this.responseText)   // convert the string data into object
}
}
xhr.send()   // without this it will not work

const insert=document.getElementById('insert')
insert.innerHTML=`
<div class='body'>
<button class='showDetails' > Show Details </button>
<button class='hideDetails' > Hide Details </button>
<div class='card'></div>
</div>
`
const card=document.querySelector('.card')
const detail=document.querySelector('.showDetails')
detail.addEventListener("click",()=>{
    card.innerHTML=`
    <img src=${data.avatar_url} />
    <h3> Followers:-${data.followers}</h3>
    <h3> Twitter :- ${data.twitter_username}</h3>
    `
})
const hideDetails=document.querySelector('.hideDetails');
hideDetails.addEventListener("click", () => {
    card.style="display:none";
})
card.style=null;
