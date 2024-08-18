const b=document.querySelectorAll('.btn');
const body=document.querySelector('body');

b.forEach( function a(b){
    b.addEventListener('click', function(e){
        switch(e.target.id){
            case 'c1':
            body.style.backgroundColor = 'blue';
            b.style.color='blue';
            alert("You Selected Blue")
            break;
            case 'c2':
            body.style.backgroundColor = 'Red';
            b.style.color='red';
            alert("You Selected Red")
            break;
            case 'c3':
            body.style.backgroundColor = 'Green';
            b.style.color='green';
            alert("You Selected Green")
            break;
            case 'c4':
            body.style.backgroundColor = 'Yellow';
            b.style.color='yellow';
            alert("You Selected Yellow")
            break;
            default:
            body.style.backgroundColor = 'white';
            break;
        }
    })
})
// document.querySelector('#c').addEventListener('click',function(e){
//     if(e.target.tagName==='button'){
//         e.target.parentNode.remove()
//     }
// })


///async function(settiomeot function & cleartimeout function)
const name= function (){
    document.querySelector('h1').innerHTML="happy nation living in the happy nation"
}

const changename= setTimeout(name,3000)

document.querySelector('#stop').addEventListener('click',function(){
    clearTimeout(changename)
})