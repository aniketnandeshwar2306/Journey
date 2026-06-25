if (condition) {
    
}
else if (condition) {
    
} 
else {
    
}

switch (key) {
    case value:
        
        break;

    default:
        break;
}

/////////++++++++++++++++============== Truthy Falsy ++++++++++++===============////////////////


const Falsy = [ false , 0 , -0 , null , undefined , "" , BigInt 0n , NaN ]  // all are falsy and baaki sab truthy

// some surprising truthy values

const truthy = [ 'false' , '0' , " " , [] , {} , function(){} ]




/////  nullish coalescing  operator (??) 

let val = null ?? 10 // direct vaue nhi kuch function dala jata hai

////// ternary operator  ( condition  ?  state1  : state2  )

let val1 = 16
val <=20 ? console.log("val big") : console.log("val small")

