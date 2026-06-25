const buttonss = document.querySelectorAll('.button')
console.log(buttonss);
/// aam jindgi
// buttonss[0].addEventListener('click',(e)=>{
//     if(e.target.id === 'grey'){
//     document.body.style.backgroundColor = e.target.id
// }
// })
// buttonss[1].addEventListener('click',(e)=>{
//     if(e.target.id === 'white'){
//     document.body.style.backgroundColor = e.target.id
// }
// })
// buttonss[2].addEventListener('click',(e)=>{
//     if(e.target.id === 'blue'){
//     document.body.style.backgroundColor = e.target.id
// }
// })
// buttonss[3].addEventListener('click',(e)=>{
//     if(e.target.id === 'yellow'){
//     document.body.style.backgroundColor = e.target.id
// }
// })

// mentos jindgi

buttonss.forEach(element => {
element.addEventListener('click',(e)=>{
    switch (e.target.id) {
        case 'grey':
            document.body.style.backgroundColor = e.target.id
            break;
        case 'white':
            document.body.style.backgroundColor = e.target.id
            break;
        case 'blue':
            document.body.style.backgroundColor = e.target.id
            break;
        case 'yellow':
            document.body.style.backgroundColor = e.target.id
            break;
    }
})
});
