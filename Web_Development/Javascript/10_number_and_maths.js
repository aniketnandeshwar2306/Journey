const balance = new Number(211105)
console.log(balance)

const score = 211105
console.log(score)

console.log(score.toString())

console.log(score.toFixed(3))

console.log(score.toPrecision(2))


console.log(score.toLocaleString('en-In'))

///////// ++++++++++++++++++++ Maths +++++++++++++++++ //////

console.log('lets do Mathsssss')

console.log(Math.abs(-7))

console.log(Math.round(2.4))
console.log(Math.round(2.7))

console.log("ceil of 2.2 is "+  Math.ceil(2.2))

console.log( "floor of 3.9 of 2.2 is " + Math.floor(3.9))

console.log(Math.min(2,5,10,0,-6))

console.log(Math.max(2,5,10,0,-6))


//// random

console.log(Math.random())
console.log((Math.random()*10)+1)

const min=11
const max=27

console.log(Math.floor((Math.random()*(max-min+1)) + min))