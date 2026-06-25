const addLanguage = (name) => {
    const item = document.createElement('li')
    item.innerText = name  // iske karn un optimized
    console.log(name);
    document.querySelector('.lang').appendChild(item)
}
addLanguage('C++')
addLanguage('python')

/// upper one is not optimized as tree has to be traversed each time 

/// now optimized way
const addLanguageopti = (name) => {
    const item = document.createElement('li')
    item.appendChild(document.createTextNode(name))
    console.log(name);
    document.querySelector('.lang').appendChild(item)
}
addLanguageopti('Ruby')

// edit
const scndlang = document.querySelector("li:nth-child(2)") //space mat dena biro
console.log(scndlang);

const newlan = document.createElement('li')
newlan.textContent ="Rust"
scndlang.replaceWith(newlan)

//
const frst = document.querySelector('li:first-child')
frst.outerHTML ="<li>HTML</li>"

//remove
const last = document.querySelector('li:last-child')
last.remove()