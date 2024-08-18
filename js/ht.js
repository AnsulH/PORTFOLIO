const form=document.querySelector('form')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const h=parseInt(document.querySelector("#H").value);
    const w=parseInt(document.querySelector("#W").value);
    const t=document.querySelector("#result");
    if(h===""||h===" "||h==0){
        t.innerHTML=`enter valid height`;
    }   
    else if (w===""||w===" "||w==0){
        t.innerHTML=`enter valid weight`;
    }
    else{
        t.innerHTML=(w/((h*h)/10000)).toFixed(2);
    }
})