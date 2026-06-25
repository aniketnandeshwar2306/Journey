const parent = document.querySelector(".week")
//console.log(parent.children)

const arr = Array.from(parent.children)
//console.log(arr)

arr.forEach(element => {
    //console.log(element.innerText);
});
// or instead of using more space by creating new aaray 
for(let i=0 ; i<parent.children.length;i++){
  //  console.log(parent.children[i].innerText)
    parent.children[i].style.color = "green"
}
// firstELementChild
//lastElementChild
//console.log(parent.firstElementChild);
//console.log(parent.lastElementChild);

let dayone = parent.firstElementChild 

console.log(dayone);
console.log(dayone.parentElement);
console.log(dayone.nextElementSibling);

console.log(parent.childNodes);

////////////Creation element ++++++++++++++++++++

const div = document.createElement('div')
//console.log(div);
div.className = "butter"
div.id = "masala"
div.setAttribute('title', 'yehetitle')
div.style.backgroundColor = "yellow"
div.innerText = "Kya baat hai"
// or text add karne ka dusra tarika
//const addText = document.createTextNode('kya baat hai')
//div.appendChild(addText)

document.body.appendChild(div)
