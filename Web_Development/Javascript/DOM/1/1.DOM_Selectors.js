//document.getElementById

document.getElementById("heading").id  // id value 
document.getElementById("heading").className  // classs value 
document.getElementById("heading").getAttribute("id")  // returns  id name of id 
document.getElementById("heading").getAttribute("class")  // return class name of class
document.getElementById("heading").setAttribute("class","redhot")  // overwrite class name to redhot 
document.getElementById("heading").innerHTML = "phanta loge?"

// we get the h1 value now
let title = document.getElementById("heading")
title.style.color = "purple"

title.innerText      // returns the inside text of current div
title.innerHTML      // return the inside div child div of current div
title.textContent    // returns all the text even inside of deepest child

document.querySelector("")  // id name class name , tag name 

////// ul or ol ke elements kaise le

const Li = document.querySelector("li")
//const Lilist = document.querySelectorAll("li")

//// HTML COllection ko array banao

const htmlcol = document.getElementsByClassName("list")
const convarr = Array.from(htmlcol)
convarr.forEach((li) => {
    li.style.color = "green"
});

