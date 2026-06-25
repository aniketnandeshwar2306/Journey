
const sym = Symbol("keyra")

const user = {
    name : "Aniket", 
    "full name" : "ANiket ANil Nandeshwar",   // for this to access we need to use user["full name"]  (user."full name"  do not work)
    [sym] : "Key1",   // to use as key this syntax  // for this to access user[sym] 
    age : 27,
    email : "aniket@sonata.com"
}
// console.log(user["full name"])
// console.log(user.email)
// console.log(user[sym])   
// console.log(typeof(sym))

user["age"]=21 // changes will be applied

user.greeting = function(){
 //   console.log(`Hello ${this.name}`)  // this is imp
}
// console.log(user.greeting)
// console.log(user.greeting())


Object.freeze(user) // no changes will applied
//console.log(user)

//////////////////////////////////////++++++++++++++++++++++++++++++++++++++++++++++++



const tinda = new Object()  /// singleton

tinda.id = "user123"
tinda.name = "robo"
tinda.IsloggedIn = false

console.log(tinda)

//////////////

const obj1 = {1:'a',2:'b'}
const obj2 = {3:'c',4:'d'}

//const obj3 = {obj1,obj2}
//console.log(obj3)   // nested ban gaya

//const obj3 = Object.assign({},obj1,obj2)  // (Target , Source)  we {} empty so we always get a object in return and all others become source

const obj3 = {...obj1,...obj2} //using spread ...
console.log(obj3)

console.log(Object.keys(tinda))
console.log(Object.values(tinda))

console.log(tinda.hasOwnProperty("id"))
  //////////////////+++++++++++++++++

/////////////destructure ////////////////////////

const obje = {
    instructmanager : "lalabhai"
}

console.log(obje.instructmanager)  /// we will waste time on typing such big name so we use destructure

const {instructmanager : instructor } = obje   // destructuring
console.log(instructor)  

