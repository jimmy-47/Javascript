fetch('https://api.github.com/users/jimmy-47')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
    console.log(data.followers);
}).catch(()=>{
    console.log('oops got error');
}).finally(()=>{
    console.log('Yaay ! Finally got sucess');
})