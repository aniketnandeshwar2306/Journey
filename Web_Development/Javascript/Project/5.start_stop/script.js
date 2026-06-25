const hex = '0123456789ABCDEF'
let color = '#'
let index
let myint
const start = document.querySelector('#start')
const stopp =document.querySelector('#stop')
    start.disabled = false
    stopp.disabled = true


function randomindex(){
    index = Math.floor(Math.random()*16)
    return index
}
function randomcolor(){
    for(let i=0;i<6;i++){
    color = color + hex[randomindex()]
    }
}


start.addEventListener('click',function(e){
    start.disabled = true
    stopp.disabled = false
    if(!myint){  
        myint = setInterval(()=>{
        color='#'
        randomcolor()
        document.body.style.backgroundColor= color
        let color_code = document.querySelector('h2')
        color_code.textContent = color
        },1000)
    }
})
stopp.addEventListener('click',(e)=>{
    clearInterval(myint)
    myint = null
    start.disabled = false
    stopp.disabled = true
})