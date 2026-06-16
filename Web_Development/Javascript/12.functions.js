function mama (){
    console.log("mama ala mama")
}

mama // reference
mama() // execution

let result = mama()
console.log(result) // for something to return we need to return

const add = function(num1 , num2){
    return  num1 + num2
}

result = add(5 , 8)
console.log(result)

function calculatesum(vaal1,val2,...num1){
    return num1
}
console.log(calculatesum(2,4,5,10,17))


const obj = {
    user : "ani",
    price : "20"
}

function handleObj(anyobj){
    console.log(`user is ${anyobj.user} and price is ${anyobj.price}`)
}
handleObj(obj)