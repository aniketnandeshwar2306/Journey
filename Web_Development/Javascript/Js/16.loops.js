//// for
for(let i=0 ; i<10 ; i++){

}// break and continue exist here too

//// while 
while (false) {
    
}


/// do while
do {
    
} while (false);

//// for of
const arr = [1,2,3,4,5,6]

for (const num of arr) {
    console.log(num)    
}

let st = "hello"
for (const alpha of st) {
    console.log(alpha)
}

////  map       object but uniques values
const map = new Map()
map.set("IN" , "India") 
map.set("JP","Japan")
map.set("IT","Italy")

console.log(map)

for (const [key,value] of map) {
    console.log(`${key} is key and ${value} is value`)
}

const obj = {
    name : "ani",
    age : 10,
    fav : "kurkure"
}
/* object not looped by for of 
for (const [key,value] of obj) {
    console.log(key)
}
*/
 //////// for in
for (const key in obj) {
    console.log(`${key} is key and ${obj[key]} is value`)    
}

const arrr = [ "aka" , "baka" , "daka"]

for (const key in arrr) {
    console.log(key);  // this gives the indes not the value thats why we use for of loop for array
}
for(const key in map){
    console.log(map);  // this do not get anything , for of works but not for in (for map)
}


///////////// ForEach
const lang = ["cpp","py","ruby","js"]

lang.forEach( function(item){
//console.log(item);

} )
function printing(item){
    console.log(item);
}
lang.forEach  ((item , index , list) => {
})
lang.forEach(printing) // given reference only

///////////////////  for each ki dikkat ******************* it does not return anything 

const numbo = [1,2,3,4,5,6,7,8]
const nava = numbo.filter( (num)=>  { 
    if(num>3){
        return num
    }
}  )
let kikaka = numbo.filter( (num)=> num > 3) // shortcut if only one condition

const khali =[]
numbo.forEach( (num)=>{
    if(num>3){
        khali.push(num)
    }
} )


console.log(nava);
console.log(khali);

////////// map()

const gheghe = numbo.map((item) => item*10 )
console.log(gheghe);

////////chaining

let tughe = numbo
                .map((item)=> item*10)
                .map((item)=> item+5)
                .filter((item)=>item>55)
console.log(tughe);


///////////reduce

tughe = numbo.reduce((acc,curr)=> acc+curr, 0)
console.log(tughe);