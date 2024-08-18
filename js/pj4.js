let rn=parseInt((Math.random()*100)+1)
const b=document.querySelectorAll('button')
const r=document.querySelector('#gn')
b.addEventListener('click',function(e){
    
    if(r==rn){
        b.innerHTML="You Are Right :)"
        alert("You Are Right :)")
    }
    else{
        b.innerHTML="You Failed :)"
        alert("You Failed :)")
    }
})