// here array === list of python

const arr=["hel",1,2,3]

console.log(arr[0])

arr.push(7)
console.log(arr)
arr.pop()
console.log(arr)

arr.unshift(10)  // adding at front
console.log(arr)

console.log(arr.includes(3)) // returns true if exits
            arr.indexOf(3) // returns index
            arr.join() // returns in , separated string
            arr.slice(1,3) // returns the elemts in that index
            arr.splice(1,3) // make changes in originalm array and returns the sliced part


        const  arrhero=["kaptan","lohemanav","kali"]
        arr.push(arrhero) // direct array push hua not elemets
        console.log(arr)
      const combo=  arr.concat(arrhero) // returns new array
        console.log(combo)