const user = {
    name: "ANi",
    age : 20,
    hello : function(){
        console.log(`hello ${this.name}`)  // current me jo hai usske reference lega
    }
}
user.hello()

///////////// see difference in console(browser) and in terminal

console.log(this) // browser me windows ayega but terminal pe empty object


//////////////    ARROW Func ++++++++++++++++


const arro = () => {
    console.log("This is arrow function")
}
arro()
 // implicit return

const addtwo = (num1,num2) => (num1+num2)
console.log(addtwo(3,4))

const meranaam = (num1,num2) => ({naam: "ani"})