const firstpromise = new Promise((resolve,reject)=>{
    const done =false
    if(done){
        resolve('hogaya')
    }else{
        reject('nhi hua error aa gaya')
    }
})

firstpromise
.then((message)=>{
    console.log(message);
})
.catch((message)=>{
    console.log(message);
})

async () => {
    
    try {
        const response=await fetch('')
        const data = await response.json()
    } catch (error) {
        console.error(error);
        
    }
}

fetch('')
.then((responce)=>{
    return responce.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>{
    console.log(error);
    
})