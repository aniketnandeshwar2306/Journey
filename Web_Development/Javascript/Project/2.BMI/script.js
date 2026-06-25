const form = document.querySelector("form")
const result = document.querySelector(".result")
console.log(form);

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const weight = parseFloat(document.querySelector('.weight input').value)
    const height = parseFloat(document.querySelector('.height input').value)
    console.log(weight);
    

    if(weight === "" || (weight <= 0) || isNaN(weight)){
        result.innerHTML = "<span>Enter a Valid Weight</span>"
    }else if(height === "" || (height <= 0) || isNaN(height)){
        result.innerHTML = "<span>Enter a Valid Height</span>"
    }else{
        result.innerHTML = (weight/(height*height)).toFixed(2)
    }
})