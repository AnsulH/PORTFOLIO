const s= document.querySelector('#start')
const e= document.querySelector('#stop')

s.addEventListener('click',function(){
    document.body.style.color='white'
})

let c=function(){
    const colour='0123456789ABCDEF';
    let BGC='#'
    for (let i=0;i<6;i++){
        BGC+=colour[Math.floor(Math.random()*16)];///to generate no. upto 16
        
    }
    return BGC;
}

let colourid;
const changecolour= function(){

    if (!colourid){
        colourid=setInterval(() => {
            document.body.style.backgroundColor=c();
            console.log("c");
        }, 1000);
    }
    
}

const stopchangingcolour= function(){
    clearInterval(colourid);
    console.log("p")
    colourid=null;
}

s.addEventListener("click",changecolour)
e.addEventListener("click",stopchangingcolour)

window.addEventListener('keydown',function(e){
    document.querySelector('#it').innerHTML=`
    <table class="table table-bordered">
    <thead>
      <tr>
        <th scope="col">code</th>
        <th scope="col">keycode</th>
        <th scope="col">key</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>${e.code}</td>
        <td>${e.keyCode}</td>
        <td>${e.key==" " ? "space" : e.key}</td>
      </tr>
    </tbody>
  </table>`
})