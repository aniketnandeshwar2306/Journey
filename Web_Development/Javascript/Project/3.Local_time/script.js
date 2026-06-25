const clock = document.querySelector('span')



setInterval(()=>{
    let time = new Date()
    clock.innerText = time.toLocaleTimeString()
},1000)
