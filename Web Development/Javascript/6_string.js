const namee = new String("aniket")

const email='ani@gmail.com'
let age = 20

console.log(`my name is ${namee} and my age is ${age}`)

console.log(namee.__proto__)
console.log(namee.length)

console.log(namee.toUpperCase())
console.log(namee.trimStart)
console.log(namee.charAt('5'))
console.log(namee.indexOf('a'))

const newstring = namee.substring(0,3)
console.log(newstring)

const anotherstring = namee.slice(-6,3)
console.log(anotherstring)

let mail = 'malikamail#gmail.com'
mail=mail.replace('#','@')
console.log(mail)

console.log(mail.includes('.com',-1))

