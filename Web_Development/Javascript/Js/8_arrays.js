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
            arr.splice(1,3) // make changes in originalm array and returns the sliced part // NOTE n-1 tak nhi to n tak incluede hota hai


        const  arrhero=["kaptan","lohemanav","kali"]
      //  arr.push(arrhero) // direct array push hua not elemets
        console.log(arr)
      const combo=  arr.concat(arrhero) // returns new array
        console.log(combo)
        const marvale=['ironman','thor']
        // ...   <--- spread operator
        const all_hero=[...arrhero,...marvale]
        console.log(all_hero)

        const nested = [1,2,3,[2,3,5,6,[0,7,10],10 , 11] , 120]
        console.log(nested.flat(Infinity))  // nested ko flat kardega upto depth (nested kitna )

        //////////////
        console.log(Array.isArray("ANik"))
        console.log(Array.isArray(10))

        console.log(Array.from("Anibaba"))

        let score1=10
        let score2=25
        let score6=22

        console.log(Array.of(score1,score2,score6))

